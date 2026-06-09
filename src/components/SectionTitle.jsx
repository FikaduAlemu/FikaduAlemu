export default function SectionTitle({ eyebrow, title, text, align = "center" }) {
  const centered = align === "center";

  return (
    <div
      className={`space-y-4  ${
        centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left"
      }`}
    >
      <span className="inline-flex rounded-full border border-coral/20 bg-coral/10 px-3 py-1 text-xs font-body captalize tracking-[0.28em] text-coral">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="font-heading text-4xl font-bold capitalize tracking-tight text-ink sm:text-4xl md:text-6xl">
          {title}
        </h2>
        {text ? (
          <p className="mx-auto max-w-2xl text-base leading-7 text-muted">{text}</p>
        ) : null}
      </div>
    </div>
  );
}
