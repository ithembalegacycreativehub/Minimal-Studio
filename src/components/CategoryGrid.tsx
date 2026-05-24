import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { categories } from '../data/categories';
import { showroomImages } from '../data/showroomImages';

export default function CategoryGrid() {
  const [selectedTitle, setSelectedTitle] = useState(categories[0].title);
  const selected = categories.find((category) => category.title === selectedTitle) ?? categories[0];

  return (
    <section id="categories" className="section-shell">
      <SectionHeading
        eyebrow="Design Categories"
        title="Every room, reduced to what matters."
        copy="Explore the full home environment through furniture, art, appliances, storage, and atmosphere chosen with restraint."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <article key={category.title} className="group category-card">
            <div className={`visual-panel bg-gradient-to-br ${category.accent}`}>
              <img
                className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105"
                src={showroomImages[category.imageKey]}
                alt={`${category.title} minimalist interior inspiration`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-chalk/10" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-3xl font-semibold text-charcoal">{category.title}</h3>
              <p className="mt-3 min-h-24 text-sm leading-7 text-graphite">{category.description}</p>
              <button
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-charcoal"
                type="button"
                onClick={() => setSelectedTitle(category.title)}
                aria-pressed={selectedTitle === category.title}
              >
                Explore <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="category-live-panel">
        <div className="category-live-image">
          <img src={showroomImages[selected.imageKey]} alt={`${selected.title} expanded realistic design preview`} />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-wood">Live category focus</p>
          <h3 className="mt-3 font-display text-4xl font-semibold text-charcoal md:text-5xl">{selected.title}</h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-graphite">{selected.description}</p>
          <p className="mt-5 text-sm leading-7 text-graphite">
            Use this as a design lens: choose one anchor piece, one texture story, one practical upgrade, and one object with emotional presence.
          </p>
        </div>
      </div>
    </section>
  );
}
