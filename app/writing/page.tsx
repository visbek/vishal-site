import SubPage, { PageIntro } from "@/components/SubPage";
import WritingList from "@/components/WritingList";
import { writing as c } from "@/content/site";
import { getPosts } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Writing", `${c.title} ${c.intro}`, "/writing");

export default function Writing() {
  const posts = getPosts();
  return (
    <SubPage current="/writing" wide>
      <PageIntro eyebrow={c.eyebrow} title={c.title} intro={c.intro} introOnMobile={false} />

      <section
        aria-label={c.thoughtLabel}
        className="on-accent flex flex-col gap-[10px] rounded-[22px] bg-accent px-5 py-[22px] text-white md:gap-3 md:rounded-[28px] md:p-8"
      >
        <span className="text-[11px] font-bold tracking-[0.06em] opacity-80 md:text-xs">{c.thoughtHeading}</span>
        <p className="m-0 text-2xl font-bold leading-[1.3] tracking-[-0.02em] md:text-[32px] md:leading-[1.25]">
          {c.thought}
        </p>
        <span className="text-xs opacity-80 md:text-[13px]">{c.thoughtDate}</span>
      </section>

      <WritingList posts={posts} />
    </SubPage>
  );
}
