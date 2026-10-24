"use client";

// A row of toggle buttons (used for tool tabs and the topic filter).
export default function Pills({
  options,
  value,
  onChange,
  label,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="-mx-[18px] flex gap-[6px] overflow-x-auto px-[18px] md:mx-0 md:flex-wrap md:self-start md:overflow-visible md:rounded-full md:border md:border-line md:bg-soft md:p-[6px]"
    >
      {options.map((o) => {
        const on = o === value;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o)}
            className={`min-h-11 shrink-0 cursor-pointer rounded-full px-4 font-[inherit] text-sm font-semibold md:px-[18px] ${
              on
                ? "border-0 bg-ink text-white"
                : "border border-line bg-white text-ink md:border-0 md:bg-transparent"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
