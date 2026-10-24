import SubPage, { PageIntro } from "@/components/SubPage";
import ToolsExplorer from "@/components/ToolsExplorer";
import { freeStuff as c } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Free stuff", `${c.title} ${c.intro}`, "/free-stuff");

export default function FreeStuff() {
  return (
    <SubPage current="/free-stuff" wide>
      <PageIntro eyebrow={c.eyebrow} title={c.title} intro={c.intro} introWidth="md:max-w-[400px]" />

      <section
        aria-label={c.scanner.label}
        className="on-accent flex flex-col gap-3 rounded-[22px] bg-accent px-5 py-[22px] text-white md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-5 md:rounded-[28px] md:p-8"
      >
        <div className="flex flex-col gap-3 md:flex-[1_1_420px] md:gap-[10px]">
          <span className="self-start rounded-full bg-white/[0.18] px-[10px] py-[5px] text-[11px] font-bold tracking-[0.06em]">
            {c.scanner.badge}
          </span>
          <h2 className="m-0 text-2xl font-extrabold leading-[1.2] md:text-[32px] md:leading-[1.15] md:tracking-[-0.02em]">
            {c.scanner.title}
          </h2>
          <p className="m-0 text-[15px] leading-[1.5] opacity-90 md:text-[17px]">{c.scanner.text}</p>
        </div>
        <a
          href={c.scanner.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center rounded-[14px] bg-white font-bold text-ink no-underline hover:text-ink md:min-h-[52px] md:px-[26px]"
        >
          {c.scanner.cta}
        </a>
      </section>

      <section aria-label={c.guidesLabel} className="flex flex-col gap-[10px] md:gap-4">
        <h2 className="m-0 text-[22px] font-extrabold md:text-[28px] md:tracking-[-0.02em]">{c.guidesHeading}</h2>
        <ul className="m-0 grid list-none gap-[10px] p-0 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:gap-[14px]">
          {c.guides.map((g) => (
            <li
              key={g.title}
              className="flex min-h-[200px] flex-col gap-3 rounded-[22px] border border-line p-6"
            >
              <span className="self-start rounded-full bg-tint px-[10px] py-[5px] text-[11px] font-bold tracking-[0.06em] text-accent">
                {g.kind}
              </span>
              <span className="text-[21px] font-bold leading-[1.25]">{g.title}</span>
              <span className="flex-auto text-[15px] leading-[1.5] text-body">{g.text}</span>
              <span className="self-start rounded-full bg-chip px-3 py-[5px] text-xs font-semibold text-body">
                {c.comingSoon}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <ToolsExplorer />
    </SubPage>
  );
}
