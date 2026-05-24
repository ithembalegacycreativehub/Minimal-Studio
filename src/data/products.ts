export type Product = {
  name: string;
  category: string;
  description: string;
  note: string;
};

export const products: Product[] = [
  {
    name: 'Modular Low Couch',
    category: 'Living Room',
    description: 'A generous, low-slung form in textured oatmeal fabric.',
    note: 'Choose fewer modules and let the room breathe.',
  },
  {
    name: 'Washed Linen Bedding',
    category: 'Bedroom',
    description: 'Soft layers in chalk, flax, and warm grey for a relaxed hotel mood.',
    note: 'Use tone variation instead of pattern for depth.',
  },
  {
    name: 'Quiet Abstract Canvas',
    category: 'Artwork',
    description: 'A large neutral composition that anchors the wall without shouting.',
    note: 'Scale matters more than quantity.',
  },
  {
    name: 'Matte Black Kettle',
    category: 'Appliances',
    description: 'A compact counter object with a calm silhouette and hidden controls.',
    note: 'Appliances should support the palette.',
  },
  {
    name: 'Ceramic Reading Lamp',
    category: 'Lighting',
    description: 'Hand-finished ceramic base with a warm fabric shade.',
    note: 'Layer light at seated height.',
  },
  {
    name: 'Neutral Wool Rug',
    category: 'Decor',
    description: 'A dense flatweave rug that softens acoustics and defines the room.',
    note: 'Let texture carry the quiet drama.',
  },
  {
    name: 'Solid Wood Coffee Table',
    category: 'Living Room',
    description: 'Rounded edges, visible grain, and a grounded natural finish.',
    note: 'Wood is warmth, not clutter.',
  },
  {
    name: 'Modular Storage Wall',
    category: 'Storage',
    description: 'Closed-front cabinetry with a precise open shelf for daily objects.',
    note: 'Display only what earns attention.',
  },
];
