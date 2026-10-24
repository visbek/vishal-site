"use client";

import { useState } from "react";
import { howIWork as c } from "@/content/site";

export function RuleCards() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <section
      aria-label={c.rulesLabel}
      className="grid grid-cols-2 gap-[10px] md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:gap-[14px]"
    >
      {c.rules.map((r, i) => {
        const on = !!open[i];
        const n = String(i + 1).padStart(2, "0");
        return (
          <button
            key={r.rule}
            type="button"
            aria-pressed={on}
            onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
            className={`flip flex min-h-40 cursor-pointer flex-col justify-between gap-[10px] rounded-[20px] border p-4 text-left font-[inherit] md:min-h-[200px] md:gap-4 md:rounded-[22px] md:p-[22px] ${
              on ? "border-accent bg-accent text-white" : "border-line bg-white text-ink"
            }`}
          >
            <span className={`text-xs font-bold md:text-[13px] ${on ? "opacity-90" : "opacity-70"}`}>
              {r.cat} · {n}
            </span>
            {on ? (
              <span className="text-sm font-medium leading-[1.45] md:text-[17px] md:leading-[1.5]">{r.why}</span>
            ) : (
              <span className="text-lg font-bold leading-[1.3] md:text-[22px] md:tracking-[-0.01em]">{r.rule}</span>
            )}
            <span className={`text-xs font-semibold md:text-[13px] ${on ? "opacity-90" : "opacity-75"}`}>
              {on ? c.hintOpen : c.hintClosed}
            </span>
          </button>
        );
      })}
    </section>
  );
}

export function WantList() {
  const [side, setSide] = useState<"want" | "dont">("want");
  const want = side === "want";
  const items = want ? c.want : c.dont;
  const tab = (active: boolean) =>
    `min-h-11 cursor-pointer rounded-full border-0 font-[inherit] text-sm font-semibold md:px-[18px] ${
      active ? "bg-ink text-white" : "bg-transparent text-ink"
    }`;
  return (
    <section
      aria-label={c.sideLabel}
      className="flex flex-col gap-[14px] rounded-3xl border border-line bg-soft px-4 py-5 md:gap-5 md:rounded-[28px] md:p-7"
    >
      <div className="flex flex-col gap-[14px] md:flex-row md:flex-wrap md:items-center md:justify-between">
        <div className="sr-only flex-col gap-1 md:not-sr-only md:flex">
          <h2 className="m-0 text-[26px] font-extrabold tracking-[-0.02em]">{want ? c.wantTitle : c.dontTitle}</h2>
          <span className="text-sm text-muted">{c.sideSub}</span>
        </div>
        <div
          role="group"
          aria-label={c.switchLabel}
          className="grid grid-cols-2 gap-[6px] rounded-full border border-line bg-white p-[6px] md:flex"
        >
          <button type="button" aria-pressed={want} onClick={() => setSide("want")} className={tab(want)}>
            {c.wantTab}
          </button>
          <button type="button" aria-pressed={!want} onClick={() => setSide("dont")} className={tab(!want)}>
            {c.dontTab}
          </button>
        </div>
      </div>
      <ul className="m-0 grid list-none gap-2 p-0 md:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] md:gap-[10px]">
        {items.map((t) => (
          <li
            key={t}
            className="flex items-center gap-3 rounded-[14px] border border-line bg-white px-4 py-[14px] text-[15px] font-medium md:rounded-2xl md:px-[18px] md:py-4 md:text-base"
          >
            <span
              aria-hidden="true"
              className={`flex h-6 w-6 flex-none items-center justify-center rounded-full text-[13px] font-bold md:h-[26px] md:w-[26px] md:text-sm ${
                want ? "bg-good-bg text-good-fg" : "bg-bad-bg text-bad-fg"
              }`}
            >
              {want ? "✓" : "×"}
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
