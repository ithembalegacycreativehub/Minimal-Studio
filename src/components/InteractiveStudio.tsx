import { useMemo, useState } from 'react';
import { BedDouble, ChefHat, LampFloor, Sofa } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { showroomImages } from '../data/showroomImages';

const roomModes = [
  {
    id: 'living',
    label: 'Living',
    icon: Sofa,
    image: showroomImages.livingRoom,
    title: 'Soft Conversation Room',
    note: 'A low sofa, tactile rug, sculptural lamp, and one honest table create a room that invites pause.',
    palette: ['#fffdf8', '#d8d1c7', '#9d8f82', '#262420'],
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    icon: BedDouble,
    image: showroomImages.bedroom,
    title: 'Rest Ritual Suite',
    note: 'Muted bedding, softened edges, and hidden storage make the room feel slower before sleep.',
    palette: ['#f8f4ed', '#e9dfd2', '#b68f71', '#4b4944'],
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    icon: ChefHat,
    image: showroomImages.kitchen,
    title: 'Quiet Utility Kitchen',
    note: 'Clear counters and matte appliances let the kitchen work hard without visually raising the volume.',
    palette: ['#fffdf8', '#c8bfb4', '#8d6e57', '#262420'],
  },
  {
    id: 'lighting',
    label: 'Lighting',
    icon: LampFloor,
    image: showroomImages.lighting,
    title: 'Evening Light Study',
    note: 'Warm light at seated height gives minimal spaces depth, intimacy, and a human rhythm.',
    palette: ['#f8f4ed', '#d8d1c7', '#b68f71', '#262420'],
  },
];

export default function InteractiveStudio() {
  const [activeId, setActiveId] = useState(roomModes[0].id);
  const [warmth, setWarmth] = useState(54);
  const activeRoom = useMemo(() => roomModes.find((room) => room.id === activeId) ?? roomModes[0], [activeId]);
  const glow = 0.12 + warmth / 400;

  return (
    <section id="play" className="section-shell">
      <SectionHeading
        eyebrow="Play Studio"
        title="Shape the mood before you design."
        copy="Switch rooms, tune the warmth, and see how a minimalist home changes when image, palette, and atmosphere move together."
      />
      <div className="interactive-studio">
        <div className="studio-image-wrap">
          <img src={activeRoom.image} alt={`${activeRoom.title} minimalist interior`} className="studio-image" />
          <div className="studio-warmth" style={{ opacity: glow }} />
          <div className="studio-caption">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">Current mood</p>
            <h3 className="mt-2 font-display text-4xl font-semibold text-chalk">{activeRoom.title}</h3>
          </div>
        </div>
        <div className="studio-controls">
          <div className="grid grid-cols-2 gap-3">
            {roomModes.map((room) => {
              const Icon = room.icon;
              const isActive = room.id === activeId;
              return (
                <button
                  key={room.id}
                  className={`studio-mode ${isActive ? 'studio-mode-active' : ''}`}
                  type="button"
                  onClick={() => setActiveId(room.id)}
                  aria-pressed={isActive}
                >
                  <Icon size={18} aria-hidden="true" />
                  {room.label}
                </button>
              );
            })}
          </div>
          <div className="mt-7">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-wood" htmlFor="warmth-slider">
              Warmth level
            </label>
            <input
              id="warmth-slider"
              className="mt-4 w-full accent-clay"
              type="range"
              min="0"
              max="100"
              value={warmth}
              onChange={(event) => setWarmth(Number(event.target.value))}
            />
          </div>
          <p className="mt-6 text-sm leading-7 text-graphite">{activeRoom.note}</p>
          <div className="mt-6 flex gap-2" aria-label={`${activeRoom.title} palette`}>
            {activeRoom.palette.map((colour) => (
              <span key={colour} className="h-10 flex-1 rounded-full border border-charcoal/10" style={{ backgroundColor: colour }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
