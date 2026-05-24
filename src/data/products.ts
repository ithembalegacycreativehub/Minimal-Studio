export type Product = {
  name: string;
  category: string;
  description: string;
  note: string;
  imageKey: 'livingRoom' | 'beddingDetail' | 'artWall' | 'kitchen' | 'lighting' | 'decor' | 'storage';
  personality: 'showroom' | 'soft' | 'gallery' | 'precision' | 'glow' | 'moodboard' | 'spatial';
};

export const products: Product[] = [
  {
    name: 'Modular Low Couch',
    category: 'Living Room',
    description: 'A generous, low-slung form in textured oatmeal fabric.',
    note: 'Choose fewer modules and let the room breathe.',
    imageKey: 'livingRoom',
    personality: 'showroom',
  },
  {
    name: 'Washed Linen Bedding',
    category: 'Bedroom',
    description: 'Soft layers in chalk, flax, and warm grey for a relaxed hotel mood.',
    note: 'Use tone variation instead of pattern for depth.',
    imageKey: 'beddingDetail',
    personality: 'soft',
  },
  {
    name: 'Quiet Abstract Canvas',
    category: 'Artwork',
    description: 'A large neutral composition that anchors the wall without shouting.',
    note: 'Scale matters more than quantity.',
    imageKey: 'artWall',
    personality: 'gallery',
  },
  {
    name: 'Matte Black Kettle',
    category: 'Appliances',
    description: 'A compact counter object with a calm silhouette and hidden controls.',
    note: 'Appliances should support the palette.',
    imageKey: 'kitchen',
    personality: 'precision',
  },
  {
    name: 'Ceramic Reading Lamp',
    category: 'Lighting',
    description: 'Hand-finished ceramic base with a warm fabric shade.',
    note: 'Layer light at seated height.',
    imageKey: 'lighting',
    personality: 'glow',
  },
  {
    name: 'Neutral Wool Rug',
    category: 'Decor',
    description: 'A dense flatweave rug that softens acoustics and defines the room.',
    note: 'Let texture carry the quiet drama.',
    imageKey: 'decor',
    personality: 'moodboard',
  },
  {
    name: 'Solid Wood Coffee Table',
    category: 'Living Room',
    description: 'Rounded edges, visible grain, and a grounded natural finish.',
    note: 'Wood is warmth, not clutter.',
    imageKey: 'livingRoom',
    personality: 'showroom',
  },
  {
    name: 'Modular Storage Wall',
    category: 'Storage',
    description: 'Closed-front cabinetry with a precise open shelf for daily objects.',
    note: 'Display only what earns attention.',
    imageKey: 'storage',
    personality: 'spatial',
  },
];
