import { Boxes, Gem, LampDesk, Leaf, Palette, Sofa, Sparkles, SunMedium } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { showroomImages } from '../data/showroomImages';

const principles = [
  ['Less but better', 'Edit until each piece has purpose, scale, and emotional weight.', Gem],
  ['Functional beauty', 'Choose objects that perform beautifully and look settled in the room.', Sparkles],
  ['Calm colour palettes', 'Build with warm whites, stone, wood, taupe, and charcoal restraint.', Palette],
  ['Intentional furniture', 'Let proportion, comfort, and circulation guide every furniture decision.', Sofa],
  ['Smart storage', 'Make daily life easier by giving every object a quiet place to return.', Boxes],
  ['Quality over quantity', 'Invest in fewer pieces with better materials, repairability, and longevity.', Leaf],
  ['Light and balance', 'Use daylight, evening lamps, and negative space as design materials.', SunMedium],
  ['Sustainable purchasing', 'Buy slowly, measure twice, and favour timeless forms over trends.', LampDesk],
] as const;

export default function Principles() {
  return (
    <section id="principles" className="section-shell">
      <SectionHeading
        eyebrow="Principles"
        title="A home that lowers the volume."
        copy="Minimalism is a practice of clarity. The best rooms feel generous, useful, personal, and easy to live inside."
      />
      <div className="principle-mood-band">
        <img src={showroomImages.modernColor} alt="Modern minimalist room with richer colour accents" loading="lazy" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">Modern minimal does not mean colourless</p>
          <h3 className="mt-3 font-display text-4xl font-semibold text-chalk md:text-5xl">Use colour like architecture.</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone">
            Add sage, cobalt, clay, or ink as precise moments: a chair, artwork, lamp, or cabinet face. The room stays calm, but it gains presence.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map(([title, copy, Icon]) => (
          <article key={title} className="rounded-2xl border border-charcoal/10 bg-chalk p-6 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-stone/45 text-charcoal">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-graphite">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
