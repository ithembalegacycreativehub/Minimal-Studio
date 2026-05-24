import { motion, useReducedMotion } from 'framer-motion';

const lines = [
  'Minimalism is not about empty spaces.',
  'It is about intentional spaces.',
  'A softer room. A smarter routine. A clearer way to live with what you choose.',
];

export default function MotionStory() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-chalk md:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        {lines.map((line, index) => (
          <motion.p
            key={line}
            className={`${index < 2 ? 'font-display text-4xl md:text-7xl' : 'mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone'} ${
              index === 1 ? 'text-clay' : ''
            }`}
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: index * 0.12, ease: 'easeOut' }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
