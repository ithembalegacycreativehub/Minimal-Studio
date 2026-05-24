import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setMessage('Thank you. Your first design note will arrive soon.');
    setEmail('');
  };

  return (
    <section id="contact" className="section-shell">
      <div className="rounded-[2rem] bg-charcoal px-6 py-14 text-chalk shadow-soft md:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">Start Designing a More Intentional Home</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone">
              Join the studio journal for refined room ideas, material notes, and calm home rituals selected with care.
            </p>
          </div>
          <form className="rounded-2xl bg-chalk/10 p-4 backdrop-blur" onSubmit={handleSubmit} noValidate>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                className="min-h-12 flex-1 rounded-full border border-chalk/25 bg-chalk px-5 text-charcoal outline-none transition focus:border-clay focus:ring-4 focus:ring-clay/20"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                aria-describedby="newsletter-message"
              />
              <button className="btn-light" type="submit">
                <Send size={17} aria-hidden="true" />
                Submit
              </button>
            </div>
            <p id="newsletter-message" className="mt-4 min-h-6 text-sm text-stone" aria-live="polite">
              {message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
