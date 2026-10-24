"use client";

import { useEffect, useRef, useState } from "react";
import { story } from "@/content/site";

const chapters = story.chapters;

export default function StoryExplorer() {
  const [idx, setIdx] = useState(chapters.length - 1);
  const rail = useRef<HTMLElement>(null);

  // On phones the year row scrolls sideways; keep the selected year in view
  useEffect(() => {
    const el = rail.current;
    const btn = el?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!el || !btn) return;
    const target = btn.offsetLeft - (el.clientWidth - btn.offsetWidth) / 2;
    el.scrollTo({ left: Math.max(0, target), behavior: "auto" });
  }, [idx]);
  const cur = chapters[idx];
  const isCurrent = "current" in cur && cur.current;
  const labels = isCurrent ? story.labels.current : story.labels.normal;
  const total = chapters.length;
  const pct = `${Math.round(((idx + 1) / total) * 100)}%`;

  return (
    <>
      <section ref={rail} aria-label={story.railLabel} className="-mx-[18px] overflow-x-auto px-[18px] py-1 md:mx-0 md:px-[2px] md:pb-1 md:pt-2">
        <div className="flex w-max items-center md:w-auto md:min-w-[620px]">
          {chapters.map((c, k) => {
            const on = k === idx;
            return (
              <div key={c.year} className="contents">
                {k > 0 && (
                  <div
                    aria-hidden="true"
                    className={`h-[3px] w-[18px] rounded-[3px] transition-colors md:w-auto md:flex-auto ${
                      k <= idx ? "bg-accent" : "bg-line"
                    }`}
                  />
                )}
                <button
                  type="button"
                  aria-pressed={on}
                  aria-label={c.year}
                  onClick={() => setIdx(k)}
                  className={`vbtn min-h-11 shrink-0 cursor-pointer rounded-full border-2 px-[14px] font-[inherit] text-sm font-bold md:min-h-12 md:px-[18px] md:text-[15px] ${
                    on
                      ? "border-accent bg-accent text-white"
                      : k < idx
                        ? "border-accent bg-white text-accent"
                        : "border-line bg-white text-muted"
                  }`}
                >
                  {c.year}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section
        aria-live="polite"
        aria-label={story.panelLabel}
        className="flex flex-col gap-4 rounded-[26px] border border-line bg-soft px-[18px] py-[22px] min-[850px]:flex-row min-[850px]:gap-x-10 min-[850px]:gap-y-8 md:rounded-[32px] md:px-8 md:py-9"
      >
        <div className="contents min-[850px]:flex min-[850px]:flex-[1_1_320px] min-[850px]:flex-col min-[850px]:justify-between min-[850px]:gap-[14px]">
          <div className="flex flex-col gap-4 md:gap-[10px]">
            <span className="text-xs font-semibold text-muted md:text-[13px]">
              {story.chapterWord} {idx + 1} {story.of} {total} · {cur.years}
            </span>
            <span className="text-[68px] font-extrabold leading-[0.9] tracking-[-0.06em] text-accent md:text-[clamp(64px,8vw,112px)]">
              {cur.year}
            </span>
            <h2 className="m-0 text-2xl font-bold leading-[1.2] tracking-[-0.02em] md:mt-[6px] md:text-[30px] md:leading-[1.15]">
              {cur.title}
            </h2>
          </div>

          <div className="order-3 flex flex-col gap-4 md:gap-[14px]">
            <div className="h-[6px] overflow-hidden rounded-md bg-line">
              <div className="bar h-[6px] rounded-md bg-accent" style={{ width: pct }} />
            </div>
            <div className="grid grid-cols-2 gap-[10px] md:flex">
              <button
                type="button"
                className="nav min-h-12 cursor-pointer rounded-[14px] border border-ink bg-white font-[inherit] text-[15px] font-semibold text-ink md:px-5"
                onClick={() => setIdx((i) => Math.max(0, i - 1))}
                disabled={idx === 0}
              >
                {story.older}
              </button>
              <button
                type="button"
                className="nav min-h-12 cursor-pointer rounded-[14px] border-0 bg-ink font-[inherit] text-[15px] font-semibold text-white md:px-5"
                onClick={() => setIdx((i) => Math.min(total - 1, i + 1))}
                disabled={idx === total - 1}
              >
                {story.newer}
              </button>
            </div>
          </div>
        </div>

        <div className="order-2 flex flex-col gap-3 min-[850px]:flex-[1.3_1_380px]">
          <div className="card flex flex-col gap-[6px] rounded-[18px] bg-good-bg px-[18px] py-4 md:gap-2 md:rounded-[22px] md:px-6 md:py-[22px]">
            <span className="text-[11px] font-bold tracking-[0.06em] text-good-fg md:text-xs">
              {cur.builtLabel ?? labels.one}
            </span>
            <p className="m-0 text-[17px] font-semibold leading-[1.4] md:text-xl">{cur.built}</p>
          </div>
          <div
            className={`card flex flex-col gap-[6px] rounded-[18px] px-[18px] py-4 md:gap-2 md:rounded-[22px] md:px-6 md:py-[22px] ${
              isCurrent ? "bg-tint" : "bg-bad-bg"
            }`}
          >
            <span
              className={`text-[11px] font-bold tracking-[0.06em] md:text-xs ${
                isCurrent ? "text-accent" : "text-bad-fg"
              }`}
            >
              {labels.two}
            </span>
            <p className="m-0 text-[17px] font-semibold leading-[1.4] md:text-xl">{cur.broke}</p>
          </div>
          {!isCurrent && (
            <div className="card flex flex-col gap-[6px] rounded-[18px] bg-accent px-[18px] py-4 md:gap-2 md:rounded-[22px] md:px-6 md:py-[22px]">
              <span className="text-[11px] font-bold tracking-[0.06em] text-white md:text-xs">
                {story.labels.normal.three}
              </span>
              <p className="m-0 text-lg font-bold leading-[1.4] text-white md:text-[22px]">{cur.learned}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
