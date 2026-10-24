import Link from "next/link";
import Header from "./Header";
import Contact from "./Contact";
import { site } from "@/content/site";

export default function SubPage({
  current,
  children,
  wide = false,
}: {
  current: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <>
      <Header current={current} />
      <main
        className={`mx-auto flex max-w-[1120px] flex-col gap-[22px] px-[18px] pb-8 pt-7 md:px-5 md:pb-[72px] md:pt-12 ${
          wide ? "md:gap-8" : "md:gap-9"
        }`}
      >
        {children}
        <Contact />
        <Link href="/" className="hidden min-h-11 items-center self-start font-semibold md:flex">
          {site.backHome}
        </Link>
      </main>
    </>
  );
}

export function PageIntro({
  eyebrow,
  title,
  intro,
  introOnMobile = true,
  introWidth = "md:max-w-[380px]",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  introOnMobile?: boolean;
  introWidth?: string;
}) {
  return (
    <div className="flex flex-col gap-[10px] md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-4">
      <div className="flex flex-col gap-[10px]">
        <span className="text-[11px] font-semibold tracking-[0.06em] text-muted md:text-xs">{eyebrow}</span>
        <h1 className="m-0 text-[34px] font-extrabold leading-[1.05] tracking-[-0.035em] md:text-[44px]">{title}</h1>
      </div>
      <p
        className={`m-0 text-[15px] leading-[1.55] text-body md:text-base ${introWidth} ${
          introOnMobile ? "" : "hidden md:block"
        }`}
      >
        {intro}
      </p>
    </div>
  );
}
