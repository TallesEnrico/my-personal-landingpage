type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="pill">
        <span className="pill-dot" />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[var(--ink)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[1.02rem] leading-[1.75] text-[var(--ink)]/72">
          {description}
        </p>
      ) : null}
    </div>
  )
}
