import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { journalArticles } from '../data/journal';

export default function Journal() {
  return (
    <section id="journal" className="section-shell">
      <SectionHeading
        eyebrow="Design Journal"
        title="Notes for a more considered home."
        copy="Short editorial guides for decisions that shape daily life: room planning, bedroom calm, appliance styling, and the art of editing."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {journalArticles.map((article) => (
          <article key={article.title} className="rounded-2xl border border-charcoal/10 bg-chalk p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood">{article.readingTime}</p>
            <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-charcoal">{article.title}</h3>
            <p className="mt-4 text-sm leading-7 text-graphite">{article.summary}</p>
            <button
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-charcoal"
              type="button"
              aria-label={`Read more about ${article.title}`}
            >
              Read More <ArrowRight size={16} aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
