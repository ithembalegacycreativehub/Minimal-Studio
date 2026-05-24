import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Leaf, PanelsTopLeft, Sofa, Trees, Waves } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { showroomImages } from '../data/showroomImages';

const japandiCards = [
  {
    title: 'Japanese simplicity',
    copy: 'Quiet silhouettes, negative space, and objects selected for usefulness.',
    icon: PanelsTopLeft,
    detail: 'Keep surfaces visually still. Let one low table, one ceramic vessel, and one art object carry the composition.',
  },
  {
    title: 'Scandinavian warmth',
    copy: 'Soft textiles, pale timber, and rooms that feel generous in daily use.',
    icon: Sofa,
    detail: 'Balance clean geometry with tactile comfort: linen, wool, oak, and warm paper light.',
  },
  {
    title: 'Natural materials',
    copy: 'Wood, stone, linen, clay, paper, and woven textures with visible honesty.',
    icon: Trees,
    detail: 'Use material contrast instead of visual clutter. A matte cabinet beside raw wood feels rich without noise.',
  },
  {
    title: 'Calm practicality',
    copy: 'Beauty that supports living: storage, circulation, light, and repairable pieces.',
    icon: Leaf,
    detail: 'Japandi is not empty. It is practical elegance, edited until each object has a reason.',
  },
];

export default function JapandiLiving() {
  const [active, setActive] = useState(japandiCards[0].title);
  const reduceMotion = useReducedMotion();
  const selected = japandiCards.find((card) => card.title === active) ?? japandiCards[0];

  return (
    <section id="japandi" className="section-shell cinematic-scene">
      <SectionHeading
        eyebrow="Scene 03 / Japandi Living"
        title="Japanese simplicity, Scandinavian warmth."
        copy="Japandi blends low-profile furniture, natural materials, functional beauty, and calm neutral tones into rooms that feel grounded and deeply livable."
      />
      <div className="japandi-stage">
        <motion.div
          className="japandi-image"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={showroomImages.japandi} alt="Japandi interior with natural materials, warm wood, and calm neutral styling" loading="lazy" />
          <div className="japandi-light" />
        </motion.div>
        <div className="japandi-panel">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-wood">
            <Waves size={16} aria-hidden="true" /> Calm material system
          </p>
          <h3 className="mt-4 font-display text-4xl font-semibold text-charcoal">{selected.title}</h3>
          <p className="mt-4 text-base leading-8 text-graphite">{selected.detail}</p>
          <div className="mt-6 flex gap-2" aria-label="Japandi palette">
            {['#fffdf8', '#d8d1c7', '#8d6e57', '#b68f71', '#262420'].map((color) => (
              <span key={color} className="h-10 flex-1 rounded-full border border-charcoal/10" style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {japandiCards.map((card) => {
          const Icon = card.icon;
          const isActive = card.title === active;
          return (
            <button
              key={card.title}
              className={`japandi-card ${isActive ? 'japandi-card-active' : ''}`}
              type="button"
              onClick={() => setActive(card.title)}
              aria-pressed={isActive}
            >
              <Icon size={22} aria-hidden="true" />
              <span>{card.title}</span>
              <small>{card.copy}</small>
            </button>
          );
        })}
      </div>
    </section>
  );
}
