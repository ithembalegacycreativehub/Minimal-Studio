import { Bookmark } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { products } from '../data/products';

export default function ProductInspiration() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Home Essentials"
        title="Product inspiration without the pressure."
        copy="A considered edit of forms, textures, and objects that can guide future purchases without turning the studio into a checkout."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <article key={product.name} className="product-card">
            <div className="product-visual" aria-hidden="true">
              <span className={`product-shape product-shape-${(index % 4) + 1}`} />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood">{product.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-charcoal">{product.name}</h3>
              <p className="mt-3 text-sm leading-7 text-graphite">{product.description}</p>
              <div className="mt-5 rounded-xl bg-ivory p-4">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
                  <Bookmark size={14} aria-hidden="true" /> Design Note
                </p>
                <p className="mt-2 text-sm leading-6 text-graphite">{product.note}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
