import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Building2, Home, Layers3 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { spaces } from '../data/spaces';

export default function SpaceJourney() {
  const [activeId, setActiveId] = useState(spaces[0].id);
  const reduceMotion = useReducedMotion();
  const active = spaces.find((space) => space.id === activeId) ?? spaces[0];

  return (
    <section id="spaces" className="section-shell cinematic-scene">
      <SectionHeading
        eyebrow="Scene 05 / Design by Space"
        title="Move through apartments, rooms, and full homes."
        copy="Choose a living scenario and the studio opens a room-specific design panel with layout guidance, furniture focus, palette, and mood."
      />
      <div className={`space-journey space-${active.interaction}`}>
        <div className="space-map" role="list" aria-label="Room and home concepts">
          {spaces.map((space) => (
            <button
              key={space.id}
              className={`space-node ${space.id === activeId ? 'space-node-active' : ''}`}
              type="button"
              onClick={() => setActiveId(space.id)}
              aria-pressed={space.id === activeId}
            >
              <span>{space.title}</span>
              <small>{space.scene}</small>
            </button>
          ))}
        </div>
        <motion.article
          key={active.id}
          className="space-reveal"
          initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="space-image">
            <img src={active.image} alt={`${active.title} minimalist design concept`} />
            <div className="space-image-overlay" />
          </div>
          <div className="space-content">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-wood">
              {active.id === 'house' ? <Home size={15} aria-hidden="true" /> : active.id === 'studio' ? <Building2 size={15} aria-hidden="true" /> : <Layers3 size={15} aria-hidden="true" />}
              {active.scene}
            </p>
            <h3 className="mt-4 font-display text-4xl font-semibold text-charcoal md:text-5xl">{active.title}</h3>
            <p className="mt-4 text-base leading-8 text-graphite">{active.description}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="space-note">
                <strong>Layout direction</strong>
                <span>{active.layout}</span>
              </div>
              <div className="space-note">
                <strong>Furniture focus</strong>
                <span>{active.furniture}</span>
              </div>
            </div>
            <div className="mt-6 flex gap-2" aria-label={`${active.title} colour palette`}>
              {active.palette.map((color) => (
                <span key={color} className="h-10 flex-1 rounded-full border border-charcoal/10" style={{ backgroundColor: color }} />
              ))}
            </div>
            <button className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-charcoal" type="button">
              Open this room mood <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
