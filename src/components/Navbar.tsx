import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Studio', href: '#studio' },
  { label: 'Categories', href: '#categories' },
  { label: 'Principles', href: '#principles' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-chalk/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Primary navigation">
        <a href="#home" className="font-display text-2xl font-semibold tracking-wide text-charcoal">
          Minimal Living Studio
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-graphite transition hover:text-charcoal">
              {link.label}
            </a>
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
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-lg font-medium text-charcoal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
