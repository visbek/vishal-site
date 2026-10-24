import Link from "next/link";
import { nav, site } from "@/content/site";

const pill =
  "items-center rounded-full bg-accent font-semibold text-white no-underline hover:text-white";

export default function Header({ current }: { current?: string }) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-6 gap-y-[10px] px-[18px] py-3 md:px-5 md:py-[14px]">
        <Link href="/" className="flex min-h-11 items-center gap-[10px] no-underline md:gap-3">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-accent text-[13px] font-extrabold text-white md:h-10 md:w-10 md:rounded-xl md:text-sm">
            {site.logoLetter}
          </span>
          <span className="text-[17px] font-extrabold tracking-[-0.02em] md:text-xl">{site.name}</span>
        </Link>

        <a href="#contact" className={`${pill} flex min-h-11 px-[14px] text-sm md:hidden`}>
          Contact
        </a>

        <nav
          aria-label="Main"
          className="-mx-[18px] flex w-[calc(100%+36px)] gap-5 overflow-x-auto whitespace-nowrap px-[18px] text-sm md:mx-0 md:w-auto md:flex-wrap md:gap-x-[22px] md:gap-y-1 md:overflow-visible md:px-0 md:text-[15px]"
        >
          {nav.map((item) => {
            const active = item.href === current;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 shrink-0 items-center no-underline ${
                  active ? "border-b-2 border-accent font-semibold text-ink" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a href="#contact" className={`${pill} hidden min-h-11 px-4 md:flex`}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
