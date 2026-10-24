import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const dir = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  topic: string;
  readingTime: string;
};

function toDateString(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

function readPost(file: string) {
  const slug = file.replace(/\.md$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    date: toDateString(data.date),
    summary: String(data.summary ?? ""),
    topic: String(data.topic ?? ""),
    readingTime: String(data.readingTime ?? ""),
  };
  return { meta, content };
}

function postFiles(): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md");
}

export function getPosts(): PostMeta[] {
  return postFiles()
    .map((f) => readPost(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const file = `${slug}.md`;
  if (!postFiles().includes(file)) return null;
  const { meta, content } = readPost(file);
  return { meta, html: marked.parse(content, { async: false }) as string };
}
