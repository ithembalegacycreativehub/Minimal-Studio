export type Category = {
  title: string;
  description: string;
  accent: string;
};

export const categories: Category[] = [
  {
    title: 'Living Room',
    description: 'Low-profile seating, quiet tables, soft rugs, and layouts made for conversation.',
    accent: 'from-stone/80 to-clay/40',
  },
  {
    title: 'Bedroom',
    description: 'Layered linen, calm bedside lighting, and restorative proportions.',
    accent: 'from-chalk to-stone/70',
  },
  {
    title: 'Kitchen',
    description: 'Integrated storage, refined surfaces, and appliances that disappear into the design.',
    accent: 'from-taupe/50 to-wood/40',
  },
  {
    title: 'Artwork',
    description: 'Abstract pieces, gallery walls, and single statements with generous breathing room.',
    accent: 'from-charcoal/20 to-clay/50',
  },
  {
    title: 'Appliances',
    description: 'Matte finishes, simple silhouettes, and objects selected for visual calm.',
    accent: 'from-graphite/40 to-stone/70',
  },
  {
    title: 'Lighting',
    description: 'Floor lamps, ceramic shades, warm pools of light, and evening atmosphere.',
    accent: 'from-chalk to-clay/60',
  },
  {
    title: 'Storage',
    description: 'Modular cabinetry, concealed utility, and rituals that keep surfaces composed.',
    accent: 'from-wood/40 to-stone/70',
  },
  {
    title: 'Decor',
    description: 'Ceramics, vessels, textiles, and quiet details that make minimal rooms feel human.',
    accent: 'from-taupe/40 to-chalk',
  },
];
