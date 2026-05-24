import SectionHeading from './SectionHeading';

const rooms = [
  {
    title: 'Calm Living Room',
    mood: 'Quiet social, tactile, grounded',
    textures: 'Boucle, oak, wool, honed stone',
    palette: ['#fffdf8', '#d8d1c7', '#9d8f82', '#262420'],
    notes: 'Anchor the room with a low couch, one sculptural table, soft lighting, and a single oversized artwork.',
  },
  {
    title: 'Restful Bedroom',
    mood: 'Layered, softened, private',
    textures: 'Washed linen, ceramic, ash wood',
    palette: ['#f8f4ed', '#e7ded2', '#b68f71', '#4b4944'],
    notes: 'Use a quiet bed wall, breathable textiles, and hidden bedside storage to make rest feel designed.',
  },
  {
    title: 'Functional Kitchen',
    mood: 'Precise, warm, uncluttered',
    textures: 'Matte fronts, brushed metal, pale timber',
    palette: ['#fffdf8', '#c8bfb4', '#8d6e57', '#262420'],
    notes: 'Keep counters open by integrating appliances and dedicating one visible shelf to daily rituals.',
  },
  {
    title: 'Art-Focused Studio Wall',
    mood: 'Composed, personal, gallery-like',
    textures: 'Limewash, canvas, blackened metal',
    palette: ['#f8f4ed', '#d8d1c7', '#b68f71', '#262420'],
    notes: 'Let negative space frame the work. One strong piece can create more presence than a crowded wall.',
  },
];

export default function RoomInspiration() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Room Inspiration"
        title="Interior ideas with atmosphere."
        copy="Each room concept balances visual quiet with real-life function: the home stays usable, warm, and deeply intentional."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {rooms.map((room, index) => (
          <article key={room.title} className="inspiration-panel">
            <div className="room-mockup" aria-hidden="true">
              <span className={`mock-wall mock-wall-${index + 1}`} />
              <span className="mock-floor" />
              <span className="mock-frame" />
              <span className="mock-sofa" />
              <span className="mock-table" />
              <span className="mock-lamp" />
            </div>
            <div>
              <h3 className="font-display text-3xl font-semibold text-charcoal">{room.title}</h3>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-wood">{room.mood}</p>
              <p className="mt-5 text-sm leading-7 text-graphite">{room.notes}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">Recommended textures</p>
                  <p className="mt-2 text-sm text-graphite">{room.textures}</p>
                </div>
                <div className="flex gap-2" aria-label={`${room.title} colour palette`}>
                  {room.palette.map((colour) => (
                    <span key={colour} className="h-9 w-9 rounded-full border border-charcoal/10" style={{ backgroundColor: colour }} />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
