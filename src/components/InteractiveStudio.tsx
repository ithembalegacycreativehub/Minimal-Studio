import { useMemo, useState } from 'react';
import { BedDouble, ChefHat, LampFloor, Layers3, Orbit, Palette, Sofa, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { showroomImages } from '../data/showroomImages';

type RoomId = 'living' | 'bedroom' | 'kitchen' | 'lighting';
type AccentId = 'sage' | 'terracotta' | 'ink' | 'cobalt';

const accentPalettes: Record<AccentId, { label: string; color: string; glow: string; text: string }> = {
  sage: { label: 'Sage', color: '#8fa18b', glow: 'rgba(143,161,139,0.42)', text: 'calm botanical contrast' },
  terracotta: { label: 'Clay', color: '#c47f5a', glow: 'rgba(196,127,90,0.45)', text: 'warm Mediterranean depth' },
  ink: { label: 'Ink', color: '#202938', glow: 'rgba(32,41,56,0.38)', text: 'sharp gallery definition' },
  cobalt: { label: 'Cobalt', color: '#2f6f9f', glow: 'rgba(47,111,159,0.38)', text: 'modern blue precision' },
};

const roomModes = [
  {
    id: 'living' as RoomId,
    label: 'Living',
    icon: Sofa,
    image: showroomImages.livingRoom,
    title: 'Soft Conversation Room',
    note: 'Move from quiet neutrals to a modern accent story while the artwork, rug, and floating objects respond in real time.',
    features: ['floating art', 'modular couch', 'sculptural table'],
  },
  {
    id: 'bedroom' as RoomId,
    label: 'Bedroom',
    icon: BedDouble,
    image: showroomImages.bedroom,
    title: 'Rest Ritual Bedroom',
    note: 'A true bedroom mood with layered bedding, softened shadows, and anti-gravity textiles that feel slow and restful.',
    features: ['linen bed', 'bedside glow', 'soft wardrobe line'],
  },
  {
    id: 'kitchen' as RoomId,
    label: 'Kitchen',
    icon: ChefHat,
    image: showroomImages.kitchen,
    secondaryImage: showroomImages.kitchen,
    title: 'Live Kitchen Composer',
    note: 'Switch from architectural overview to counter detail, then tune appliance colour, warmth, and floating utility objects.',
    features: ['matte appliance', 'open counter', 'floating utensils'],
  },
  {
    id: 'lighting' as RoomId,
    label: 'Lighting',
    icon: LampFloor,
    image: showroomImages.warmLight,
    secondaryImage: showroomImages.coolLight,
    title: 'Whole-Home Light Lab',
    note: 'Feel warm evening light versus cool daylight across different rooms, with animated rays and responsive atmosphere.',
    features: ['warm glow', 'cool focus', 'room-to-room mood'],
  },
];

export default function InteractiveStudio() {
  const [activeId, setActiveId] = useState<RoomId>('living');
  const [accentId, setAccentId] = useState<AccentId>('sage');
  const [temperature, setTemperature] = useState(62);
  const [detailView, setDetailView] = useState(false);
  const [antiGravity, setAntiGravity] = useState(true);
  const reduceMotion = useReducedMotion();

  const activeRoom = useMemo(() => roomModes.find((room) => room.id === activeId) ?? roomModes[0], [activeId]);
  const accent = accentPalettes[accentId];
  const image = detailView && activeRoom.secondaryImage ? activeRoom.secondaryImage : activeRoom.image;
  const warmth = temperature / 100;
  const coolness = 1 - warmth;

  return (
    <section id="play" className="section-shell">
      <SectionHeading
        eyebrow="Hyperreal Play Studio"
        title="Design with light, colour, and gravity."
        copy="Choose a room, shift the palette, move between warm and cool light, then turn anti-gravity on to let objects float through the space."
      />
      <div className="hyper-studio" style={{ ['--accent-color' as string]: accent.color, ['--accent-glow' as string]: accent.glow }}>
        <div className="hyper-stage">
          <motion.img
            key={`${activeId}-${detailView ? 'detail' : 'wide'}`}
            src={image}
            alt={`${activeRoom.title} realistic minimalist interior`}
            className={`hyper-stage-image ${detailView ? 'hyper-stage-image-detail' : ''}`}
            initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          />
          <div className="hyper-temperature" style={{ opacity: 0.18 + warmth * 0.38 }} />
          <div className="hyper-cool" style={{ opacity: coolness * 0.32 }} />
          <div className="hyper-accent-wash" />
          <FloatingLayer activeRoom={activeRoom.id} antiGravity={antiGravity} reduceMotion={Boolean(reduceMotion)} />
          <div className="hyper-caption">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">Live room system</p>
            <h3 className="mt-2 font-display text-4xl font-semibold text-chalk md:text-6xl">{activeRoom.title}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone md:text-base">{activeRoom.note}</p>
          </div>
        </div>

        <div className="hyper-console">
          <div className="grid grid-cols-2 gap-3">
            {roomModes.map((room) => {
              const Icon = room.icon;
              const isActive = room.id === activeId;
              return (
                <button
                  key={room.id}
                  className={`studio-mode ${isActive ? 'studio-mode-active' : ''}`}
                  type="button"
                  onClick={() => {
                    setActiveId(room.id);
                    setDetailView(false);
                  }}
                  aria-pressed={isActive}
                >
                  <Icon size={18} aria-hidden="true" />
                  {room.label}
                </button>
              );
            })}
          </div>

          <div className="control-block">
            <p className="control-label">
              <Palette size={15} aria-hidden="true" /> Modern colour system
            </p>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {(Object.keys(accentPalettes) as AccentId[]).map((id) => (
                <button
                  key={id}
                  className={`palette-button ${accentId === id ? 'palette-button-active' : ''}`}
                  type="button"
                  onClick={() => setAccentId(id)}
                  aria-label={`Use ${accentPalettes[id].label} colour palette`}
                  style={{ backgroundColor: accentPalettes[id].color }}
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-graphite">Current accent: {accent.label}, {accent.text}.</p>
          </div>

          <div className="control-block">
            <label className="control-label" htmlFor="temperature-slider">
              <LampFloor size={15} aria-hidden="true" /> Light temperature
            </label>
            <input
              id="temperature-slider"
              className="temperature-slider"
              type="range"
              min="0"
              max="100"
              value={temperature}
              onChange={(event) => setTemperature(Number(event.target.value))}
            />
            <div className="mt-3 flex justify-between text-xs font-semibold uppercase tracking-[0.14em] text-graphite">
              <span>Cool daylight</span>
              <span>Warm evening</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button className="feature-toggle" type="button" onClick={() => setAntiGravity((value) => !value)} aria-pressed={antiGravity}>
              <Orbit size={17} aria-hidden="true" />
              {antiGravity ? 'Anti-gravity on' : 'Ground objects'}
            </button>
            <button
              className="feature-toggle"
              type="button"
              onClick={() => setDetailView((value) => !value)}
              disabled={!activeRoom.secondaryImage}
              aria-pressed={detailView}
            >
              <Layers3 size={17} aria-hidden="true" />
              {activeRoom.secondaryImage ? (detailView ? 'Wide view' : 'Detail view') : 'Wide only'}
            </button>
          </div>

          <div className="feature-list">
            {activeRoom.features.map((feature) => (
              <span key={feature}>
                <Sparkles size={14} aria-hidden="true" />
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingLayer({ activeRoom, antiGravity, reduceMotion }: { activeRoom: RoomId; antiGravity: boolean; reduceMotion: boolean }) {
  const pieces = activeRoom === 'kitchen'
    ? ['matte kettle', 'ceramic bowl', 'wood tray']
    : activeRoom === 'bedroom'
      ? ['linen pillow', 'reading lamp', 'folded throw']
      : activeRoom === 'lighting'
        ? ['warm beam', 'cool beam', 'soft halo']
        : ['art frame', 'stone vase', 'floating book'];

  return (
    <div className={`floating-layer ${antiGravity ? 'floating-layer-active' : ''}`} aria-hidden="true">
      {pieces.map((piece, index) => (
        <motion.span
          key={piece}
          className={`floating-piece floating-piece-${index + 1}`}
          animate={reduceMotion || !antiGravity ? { y: 0, rotate: 0 } : { y: [0, -18, 4, 0], rotate: [0, index % 2 ? -4 : 5, 0] }}
          transition={{ duration: 4.2 + index, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
