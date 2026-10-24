"use client";

import { useState } from "react";
import Link from "next/link";
import { writing as c } from "@/content/site";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import Pills from "./Pills";

export default function WritingList({ posts }: { posts: PostMeta[] }) {
  const [topic, setTopic] = useState("All");
  const shown = posts.filter((p) => topic === "All" || p.topic === topic);

  return (
    <>
      <Pills options={c.topics} value={topic} onChange={setTopic} label={c.filterLabel} />
      {shown.length === 0 ? (
        <p className="m-0 border-t border-line pt-5 text-base text-body">
          {posts.length === 0 ? c.empty : c.emptyTopic}
        </p>
      ) : (
        <section aria-label={c.postsLabel} className="flex flex-col border-t border-line">
          {shown.map((p) => (
            <Link
              key={p.slug}
              href={`/writing/${p.slug}`}
              className="post flex flex-col gap-[6px] border-b border-line py-[18px] no-underline md:flex-row md:flex-wrap md:items-center md:gap-x-6 md:gap-y-2 md:rounded-xl md:px-3 md:py-5"
            >
              <div className="flex justify-between gap-2 md:contents">
                <span className="text-xs text-muted md:w-[100px] md:text-[13px]">{formatDate(p.date)}</span>
                <span className="rounded-full bg-chip px-2 py-[3px] text-[11px] font-semibold text-body md:order-3 md:px-[10px] md:py-[5px] md:text-xs">
                  {p.topic}
                </span>
              </div>
              <span className="flex flex-col gap-1 md:order-2 md:flex-[1_1_320px]">
                <span className="text-lg font-bold md:text-xl md:tracking-[-0.01em]">{p.title}</span>
                <span className="text-sm text-body md:text-[15px]">{p.summary}</span>
              </span>
              <span aria-hidden="true" className="arrow hidden text-xl text-muted md:order-4 md:block">
                →
              </span>
            </Link>
          ))}
        </section>
      )}
    </>
  );
}
