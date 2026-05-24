import { ArrowDown, Compass } from 'lucide-react';
import { ReactNode } from 'react';

type HeroProps = {
  scene: ReactNode;
};

export default function Hero({ scene }: HeroProps) {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(182,143,113,0.18),transparent_34%),linear-gradient(135deg,#fffdf8_0%,#f8f4ed_55%,#d8d1c7_100%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-14 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-wood">Minimal Living Studio</p>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] text-charcoal md:text-7xl">
            Design a Calmer, Smarter, More Beautiful Home.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-graphite">
            A curated digital studio for minimalist furniture, interiors, appliances, bedding, art, lighting,
            organisation, and modern home rituals.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="btn-primary" href="#studio">
              <Compass size={18} aria-hidden="true" />
              Explore the Studio
            </a>
            <a className="btn-secondary" href="#categories">
              View Design Categories
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div id="studio" className="h-[520px] min-h-[420px] overflow-hidden rounded-[2rem] border border-white/60 bg-chalk/50 shadow-soft backdrop-blur">
          {scene}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
