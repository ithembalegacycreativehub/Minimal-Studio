type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export default function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-wood">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-charcoal md:text-6xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-graphite md:text-lg">{copy}</p>
    </div>
  );
}
