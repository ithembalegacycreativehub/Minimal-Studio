import { showroomImages } from './showroomImages';

export type SpaceConcept = {
  id: string;
  title: string;
  scene: string;
  description: string;
  image: string;
  layout: string;
  furniture: string;
  palette: string[];
  interaction: 'expand' | 'lounge' | 'soft' | 'precision' | 'spa' | 'focus' | 'warm' | 'overview';
};

export const spaces: SpaceConcept[] = [
  {
    id: 'studio',
    title: 'Studio Apartment',
    scene: 'Compact layout expanding into zones',
    description: 'Multi-functional furniture, calm zoning, and concealed storage make one room feel intentional rather than crowded.',
    image: showroomImages.studioApartment,
    layout: 'Use a rug, low shelf, and pendant line to divide sleep, work, and lounge without closing the room.',
    furniture: 'Storage bed, slim sofa, nesting table, wall-mounted desk.',
    palette: ['#fffdf8', '#d8d1c7', '#8d6e57', '#262420'],
    interaction: 'expand',
  },
  {
    id: 'living-room',
    title: 'Living Room',
    scene: 'Entering a warm lounge scene',
    description: 'Couches, artwork, lighting, texture, and negative space create a room that feels social and settled.',
    image: showroomImages.livingRoom,
    layout: 'Anchor seating around one soft rug and let the artwork define the sightline.',
    furniture: 'Low couch, rounded coffee table, floor lamp, textured lounge chair.',
    palette: ['#f8f4ed', '#c8bfb4', '#b68f71', '#202938'],
    interaction: 'lounge',
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    scene: 'Soft slow reveal with calm light',
    description: 'Layered bedding, quiet tones, and soft materials create a restorative room that lowers the pace.',
    image: showroomImages.bedroom,
    layout: 'Keep the bed wall quiet, add one lamp glow, and hide small objects in closed storage.',
    furniture: 'Linen bed, ceramic lamp, floating nightstand, wool throw.',
    palette: ['#fffdf8', '#e9dfd2', '#9d8f82', '#4b4944'],
    interaction: 'soft',
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    scene: 'Precise functional slide-in details',
    description: 'Integrated appliances, clear counters, and clean storage turn utility into part of the visual language.',
    image: showroomImages.kitchen,
    layout: 'Group appliances by ritual and keep the island clear enough to feel architectural.',
    furniture: 'Matte kettle, stone counter, closed cabinets, slim stools.',
    palette: ['#fffdf8', '#c8bfb4', '#8d6e57', '#262420'],
    interaction: 'precision',
  },
  {
    id: 'bathroom',
    title: 'Bathroom',
    scene: 'Spa-like fade and glass softness',
    description: 'Stone, glass, towels, and soft lighting make a practical room feel like a calm daily reset.',
    image: showroomImages.bathroom,
    layout: 'Let one stone surface, one mirror, and one towel stack carry the whole composition.',
    furniture: 'Floating vanity, glass screen, stone tray, folded linen.',
    palette: ['#f8f4ed', '#d8d1c7', '#a7aaa5', '#262420'],
    interaction: 'spa',
  },
  {
    id: 'office',
    title: 'Home Office',
    scene: 'Focused structured reveal',
    description: 'A clean desk, ergonomic chair, and controlled storage protect concentration without feeling corporate.',
    image: showroomImages.homeOffice,
    layout: 'Place the desk near natural light and keep the background visually calm for deep work.',
    furniture: 'Slim desk, task chair, pinboard, closed drawer unit.',
    palette: ['#fffdf8', '#d8d1c7', '#2f6f9f', '#202938'],
    interaction: 'focus',
  },
  {
    id: 'dining',
    title: 'Dining Space',
    scene: 'Warm inviting transition',
    description: 'Simple table settings, pendant lighting, and natural textures create social calm without formality.',
    image: showroomImages.dining,
    layout: 'Keep the table clear, add one vessel, and let the pendant define intimacy.',
    furniture: 'Oak table, paper pendant, linen runner, ceramic bowl.',
    palette: ['#fffdf8', '#e4d4c2', '#b68f71', '#262420'],
    interaction: 'warm',
  },
  {
    id: 'house',
    title: 'Full House Concept',
    scene: 'Zoomed-out connected journey',
    description: 'Whole-home consistency comes from repeating materials, light temperature, and storage logic room to room.',
    image: showroomImages.fullHouse,
    layout: 'Repeat wood, linen, stone, and black accents so each room feels related but not identical.',
    furniture: 'Unified lighting family, consistent storage fronts, natural wood anchors.',
    palette: ['#f8f4ed', '#d8d1c7', '#8fa18b', '#202938'],
    interaction: 'overview',
  },
];
