const navLinks = ['Home', 'Studio', 'Categories', 'Principles', 'Journal', 'Contact'];
const socialLinks = ['Instagram', 'Pinterest', 'LinkedIn'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-chalk">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <h2 className="font-display text-3xl font-semibold text-charcoal">Minimal Living Studio</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-graphite">
            A digital studio for calmer homes, refined rooms, and everyday objects chosen with intention.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wood">Navigation</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            {navLinks.map((label) => (
              <a key={label} href={`#${label === 'Home' ? 'home' : label.toLowerCase()}`} className="text-sm text-graphite hover:text-charcoal">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wood">Social</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            {socialLinks.map((label) => (
              <a key={label} href="#contact" className="text-sm text-graphite hover:text-charcoal">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-charcoal/10 px-5 py-5 text-center text-sm text-graphite">
        © {year} Minimal Living Studio. All rights reserved.
      </div>
    </footer>
  );
}
