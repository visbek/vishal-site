import Link from "next/link";
import { notFound } from "next/navigation";
import SubPage from "@/components/SubPage";
import { writing as c } from "@/content/site";
import { getPost, getPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata(post.meta.title, post.meta.summary, `/writing/${slug}`);
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { meta, html } = post;
  return (
    <SubPage current="/writing" wide>
      <Link href="/writing" className="flex min-h-11 items-center self-start font-semibold">
        {c.backToWriting}
      </Link>
      <article className="mx-auto flex w-full max-w-[720px] flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3 text-[13px] text-muted">
            <span>{formatDate(meta.date)}</span>
            <span className="rounded-full bg-chip px-[10px] py-[5px] text-xs font-semibold text-body">{meta.topic}</span>
            {meta.readingTime && (
              <span>
                {meta.readingTime}
                {/^\d+$/.test(meta.readingTime) ? ` ${c.minRead}` : ""}
              </span>
            )}
          </div>
          <h1 className="m-0 text-[34px] font-extrabold leading-[1.05] tracking-[-0.035em] md:text-[44px]">
            {meta.title}
          </h1>
        </div>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </SubPage>
  );
}
