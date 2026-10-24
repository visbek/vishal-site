"use client";

import { useState } from "react";
import { freeStuff as c, type ToolPart } from "@/content/site";
import Pills from "./Pills";

type Tab = keyof typeof c.tools;
const tabs = Object.keys(c.tools) as Tab[];

function Name({ parts }: { parts: ToolPart[] }) {
  return (
    <>
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <span key={i}>{p}</span>
        ) : (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-accent"
          >
            {p.t}
          </a>
        ),
      )}
    </>
  );
}

export default function ToolsExplorer() {
  const [tab, setTab] = useState<Tab>("Build");
  return (
    <section aria-label={c.toolsHeading} className="flex flex-col gap-3 md:gap-4 md:pt-2">
      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-[14px]">
        <div className="flex flex-col gap-1">
          <h2 className="m-0 text-[22px] font-extrabold tracking-[-0.02em] md:text-[28px]">{c.toolsHeading}</h2>
          <span className="hidden text-sm text-muted md:block">{c.toolsSub}</span>
        </div>
        <Pills options={tabs} value={tab} onChange={(v) => setTab(v as Tab)} label={c.toolsFilterLabel} />
      </div>
      <ul className="m-0 grid list-none gap-3 p-0 md:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {(c.tools[tab] as { parts: ToolPart[]; d: string }[]).map((x) => (
          <li
            key={`${tab}-${x.d}`}
            className="flex flex-col gap-1 rounded-2xl border border-line bg-soft px-4 py-[14px] md:gap-[6px] md:rounded-[18px] md:px-5 md:py-[18px]"
          >
            <span className="text-base font-bold md:text-[17px]">
              <Name parts={x.parts} />
            </span>
            <span className="text-sm leading-[1.45] text-body">{x.d}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
