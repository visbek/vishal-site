import SubPage, { PageIntro } from "@/components/SubPage";
import { RuleCards, WantList } from "@/components/HowIWork";
import { howIWork as c } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("How I work", c.intro, "/how-i-work");

export default function HowIWork() {
  return (
    <SubPage current="/how-i-work">
      <div className="flex flex-col gap-[22px] md:contents">
        <PageIntro eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
        <figure
          aria-label={c.quoteLabel}
          className="m-0 -mt-2 flex flex-col rounded-2xl border border-line bg-soft px-[18px] py-4 md:mt-0 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-3 md:rounded-[22px] md:px-[26px] md:py-6"
        >
          <blockquote className="m-0 text-[17px] font-bold leading-[1.4] md:text-2xl md:leading-[1.35] md:tracking-[-0.01em]">
            {c.quote}
          </blockquote>
          <figcaption className="mt-[6px] text-xs font-medium text-muted md:mt-0 md:text-sm md:font-normal">
            {c.quoteBy}
          </figcaption>
        </figure>
      </div>
      <RuleCards />
      <WantList />
      <section aria-label={c.happyLabel} className="flex flex-col gap-[10px] md:flex-row md:flex-wrap md:items-center">
        <span className="text-[11px] font-bold tracking-[0.06em] text-muted md:pr-[6px] md:text-xs">
          {c.happyHeading}
        </span>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0 md:contents">
          {c.happy.map((h) => (
            <li
              key={h}
              className="rounded-full border border-line px-[14px] py-[9px] text-sm md:px-4 md:py-[10px] md:text-[15px]"
            >
              {h}
            </li>
          ))}
        </ul>
      </section>
    </SubPage>
  );
}
