import { contact, links } from "@/content/site";

// variant "home" is the big block on the home page; "compact" is on every other page.
export default function Contact({ variant = "compact" }: { variant?: "home" | "compact" }) {
  const home = variant === "home";
  return (
    <section
      id="contact"
      aria-label="Contact"
      className={`on-accent flex flex-col bg-accent text-white md:flex-row md:flex-wrap md:items-center md:justify-between ${
        home
          ? "gap-[14px] rounded-3xl px-[22px] py-[26px] md:gap-6 md:rounded-[28px] md:px-8 md:py-10"
          : "gap-3 rounded-[22px] px-5 py-[22px] md:gap-[18px] md:rounded-3xl md:px-[30px] md:py-7"
      }`}
    >
      <div className={home ? "flex flex-col gap-[14px] md:flex-[1_1_420px] md:gap-[10px]" : ""}>
        <h2
          className={
            home
              ? "m-0 text-[30px] font-extrabold leading-[1.05] tracking-[-0.03em] md:text-[42px]"
              : "m-0 text-2xl font-extrabold leading-[1.15] md:text-[30px] md:leading-[1.1] md:tracking-[-0.02em]"
          }
        >
          {contact.heading}
        </h2>
        {home && (
          <p className="m-0 text-[15px] text-[#E3E3FD] md:text-base md:text-[#D5DAE5]">{contact.sub}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-2">
        <a
          href={links.email}
          className={`flex items-center justify-center rounded-[14px] bg-white font-bold text-ink no-underline hover:text-ink md:justify-start ${
            home ? "min-h-[50px] md:min-h-[52px] md:px-6 md:font-semibold" : "min-h-12 md:px-[22px]"
          }`}
        >
          {contact.email}
        </a>
        <div className="flex justify-center gap-[18px] text-sm md:gap-0 md:text-base">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center font-semibold text-white hover:text-white md:min-h-12 md:px-[14px]"
          >
            {contact.linkedin}
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center font-semibold text-white hover:text-white md:min-h-12 md:px-[14px]"
          >
            {contact.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
