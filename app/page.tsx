import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import { home, site } from "@/content/site";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-[1120px] flex-col gap-7 px-[18px] pb-8 pt-8 md:block md:px-5 md:pb-0 md:pt-0">
        <section
          aria-label="Intro"
          className="flex flex-col gap-[18px] md:flex-row md:flex-wrap md:items-center md:gap-12 md:pb-16 md:pt-20"
        >
          <div className="flex flex-col gap-[18px] md:flex-[1_1_540px] md:gap-6">
            <span className="flex items-center gap-2 self-start rounded-full border border-line px-3 py-[6px] text-[11px] font-semibold tracking-[0.04em] text-muted md:text-xs md:font-medium">
              <span className="h-[7px] w-[7px] rounded-full bg-accent" />
              {home.badge}
            </span>
            <h1 className="m-0 text-[46px] font-extrabold leading-[0.98] tracking-[-0.04em] md:text-[84px] md:leading-[0.95]">
              {home.title}
            </h1>
            <div className="flex flex-col gap-4">
              {home.intro.map((text) => (
                <p key={text} className="m-0 text-[17px] leading-[1.55] text-body md:max-w-[540px] md:text-xl">
                  {text}
                </p>
              ))}
            </div>
          </div>
          <Image
            src="/vishal.jpg"
            alt={home.photoAlt}
            width={840}
            height={1000}
            priority
            sizes="(min-width: 768px) 320px, 100vw"
            className="block h-[360px] w-full rounded-3xl bg-soft object-cover object-center md:h-[380px] md:w-[320px] md:min-w-0 md:flex-[0_1_320px] md:rounded-[28px]"
          />
        </section>

        <section aria-label="Right now" className="flex flex-col gap-[14px] md:pb-10">
          <h2 className="m-0 text-xs font-bold tracking-[0.06em] text-muted">{home.buildingHeading}</h2>
          <div className="flex flex-col gap-[10px] md:grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-[14px]">
            {home.building.map((b) => (
              <a
                key={b.name}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="door flex flex-col gap-2 rounded-[22px] border border-line bg-white px-6 py-[22px] no-underline"
              >
                <span className="text-[22px] font-extrabold tracking-[-0.02em] md:text-[26px]">{b.name}</span>
                <span className="text-[15px] leading-[1.5] text-body">{b.text}</span>
                <span className="text-sm font-semibold text-accent">{b.cta}</span>
              </a>
            ))}
          </div>
        </section>

        <section
          aria-label="Sections"
          className="flex flex-col gap-3 md:grid md:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] md:gap-4 md:pb-[72px]"
        >
          {home.doors.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="flex flex-col gap-[10px] rounded-[22px] border border-line bg-soft p-5 no-underline md:door md:min-h-[250px] md:gap-4 md:rounded-3xl md:p-[26px]"
            >
              <span className="text-[11px] font-semibold tracking-[0.06em] text-muted md:text-xs md:tracking-normal">
                {d.label}
              </span>
              <span className="text-2xl font-bold leading-[1.1] tracking-[-0.02em] md:text-[30px] md:font-semibold md:leading-[1.05]">
                {d.title}
              </span>
              <span className="hidden flex-auto md:block" />
              <span className="text-sm text-body">{d.text}</span>
              <span className="font-semibold text-accent">{home.doorCta}</span>
            </Link>
          ))}
        </section>

        <div className="md:pb-12">
          <Contact variant="home" />
          <p className="m-0 mt-7 text-xs text-muted md:mt-6">{site.footer}</p>
        </div>
      </main>
    </>
  );
}
