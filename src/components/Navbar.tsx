import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Start', href: '#home' },
  { label: 'Studio', href: '#play' },
  { label: 'Japandi', href: '#japandi' },
  { label: 'Spaces', href: '#spaces' },
  { label: 'Collection', href: '#categories' },
  { label: 'Inspiration', href: '#journal' },
  { label: 'Connect', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
      const visibleLinks = links
        .map((link) => ({ href: link.href, element: document.querySelector(link.href) }))
        .filter((item): item is { href: string; element: Element } => Boolean(item.element));
      const current = [...visibleLinks].reverse().find((item) => item.element.getBoundingClientRect().top <= 120);
      if (current) setActive(current.href);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const journeyTo = (href: string) => {
    setOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-chalk/80 backdrop-blur-xl">
      <span className="nav-progress" style={{ transform: `scaleX(${progress})` }} />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Primary navigation">
        <button type="button" onClick={() => journeyTo('#home')} className="border-0 bg-transparent p-0 font-display text-2xl font-semibold tracking-wide text-charcoal">
          Minimal Living Studio
        </button>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => journeyTo(link.href)}
              className={`journey-link ${active === link.href ? 'journey-link-active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 bg-chalk text-charcoal md:hidden"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>
      <div className={`absolute left-0 right-0 top-full md:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} transition-opacity`}>
        <div className="border-t border-charcoal/10 bg-chalk px-5 py-6 shadow-soft">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                className="py-2 text-lg font-medium text-charcoal"
                onClick={() => journeyTo(link.href)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
