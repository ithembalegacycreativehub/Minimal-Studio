import { Bookmark } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { products } from '../data/products';
import { showroomImages } from '../data/showroomImages';

export default function ProductInspiration() {
  const [activeProduct, setActiveProduct] = useState(products[0].name);

  return (
    <section id="collection" className="section-shell">
      <SectionHeading
        eyebrow="Home Essentials"
        title="Product inspiration without the pressure."
        copy="A considered edit of forms, textures, and objects that can guide future purchases without turning the studio into a checkout."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <article key={product.name} className={`product-card product-${product.personality}`}>
            <div className="product-visual">
              <img src={showroomImages[product.imageKey]} alt={`${product.name} inspiration in minimalist home setting`} loading="lazy" />
              <span className={`product-shape product-shape-${(index % 4) + 1}`} />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood">{product.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-charcoal">{product.name}</h3>
              <p className="mt-3 text-sm leading-7 text-graphite">{product.description}</p>
              <button
                className="mt-5 w-full rounded-xl bg-ivory p-4 text-left transition hover:bg-stone/25 focus:outline-none focus:ring-4 focus:ring-charcoal/10"
                type="button"
                onClick={() => setActiveProduct(activeProduct === product.name ? '' : product.name)}
                aria-expanded={activeProduct === product.name}
              >
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
                  <Bookmark size={14} aria-hidden="true" /> Design Note
                </p>
                <p className="mt-2 text-sm leading-6 text-graphite">{product.note}</p>
                {activeProduct === product.name ? (
                  <p className="mt-3 border-t border-charcoal/10 pt-3 text-sm leading-6 text-graphite">
                    Interaction mood: {product.personality}. This card responds like a {product.category.toLowerCase()} studio moment, not a checkout item.
                  </p>
                ) : null}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
