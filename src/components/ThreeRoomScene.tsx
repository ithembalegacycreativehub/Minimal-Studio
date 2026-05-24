import { Canvas, ThreeEvent, useThree } from '@react-three/fiber';
import { ContactShadows, Html, OrbitControls, RoundedBox, useProgress } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';

type SceneObject = {
  id: string;
  label: string;
  note: string;
};

const sceneObjects: SceneObject[] = [
  { id: 'couch', label: 'Low Couch', note: 'A low modular couch keeps the room grounded and preserves visual air above the seating.' },
  { id: 'table', label: 'Wood Table', note: 'Rounded timber adds warmth without interrupting the calm geometry of the room.' },
  { id: 'art', label: 'Wall Art', note: 'One generous canvas creates a focal point while keeping the wall composed.' },
  { id: 'lamp', label: 'Floor Lamp', note: 'A warm floor lamp builds evening atmosphere at human scale.' },
  { id: 'bed', label: 'Linen Bed', note: 'A compact bedding vignette shows how soft layers can stay minimal and restorative.' },
  { id: 'kitchen', label: 'Matte Appliance', note: 'A small matte appliance demonstrates how utility can sit quietly within the palette.' },
];

function LoadingState() {
  const { progress } = useProgress();
  return <Html center className="scene-loader">Loading showroom {Math.round(progress)}%</Html>;
}

function WebGLSupportGuard({ children }: { children: React.ReactNode }) {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      setSupported(Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch {
      setSupported(false);
    }
  }, []);

  if (!supported) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-8 text-center">
        <p className="font-display text-3xl font-semibold text-charcoal">3D preview unavailable</p>
        <p className="mt-3 max-w-md text-sm leading-7 text-graphite">
          Your browser does not appear to support WebGL, but the studio content below remains fully available.
        </p>
      </div>
    );
  }

  return children;
}

function CameraRig() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(5.2, 3.2, 6);
    camera.lookAt(0, 0.8, 0);
  }, [camera]);

  return null;
}

type RoomObjectProps = {
  objectId: string;
  selected: string;
  hovered: string | null;
  setHovered: (value: string | null) => void;
  setSelected: (value: string) => void;
  children: React.ReactNode;
  labelPosition: [number, number, number];
};

function RoomObject({ objectId, selected, hovered, setHovered, setSelected, children, labelPosition }: RoomObjectProps) {
  const object = sceneObjects.find((item) => item.id === objectId);
  const isActive = selected === objectId || hovered === objectId;

  const handlePointer = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(objectId);
    document.body.style.cursor = 'pointer';
  };

  return (
    <group
      onPointerOver={handlePointer}
      onPointerOut={(event) => {
        event.stopPropagation();
        setHovered(null);
        document.body.style.cursor = '';
      }}
      onClick={(event) => {
        event.stopPropagation();
        setSelected(objectId);
      }}
    >
      {children}
      {object && isActive ? (
        <Html position={labelPosition} center distanceFactor={8} className="object-tooltip">
          {object.label}
        </Html>
      ) : null}
    </group>
  );
}

function MinimalRoom({
  selected,
  hovered,
  setHovered,
  setSelected,
}: {
  selected: string;
  hovered: string | null;
  setHovered: (value: string | null) => void;
  setSelected: (value: string) => void;
}) {
  const materials = useMemo(
    () => ({
      floor: new THREE.MeshStandardMaterial({ color: '#d8d1c7', roughness: 0.86 }),
      wall: new THREE.MeshStandardMaterial({ color: '#f8f4ed', roughness: 0.92 }),
      fabric: new THREE.MeshStandardMaterial({ color: '#bfb4a8', roughness: 0.95 }),
      wood: new THREE.MeshStandardMaterial({ color: '#8d6e57', roughness: 0.7 }),
      charcoal: new THREE.MeshStandardMaterial({ color: '#262420', roughness: 0.62 }),
      paper: new THREE.MeshStandardMaterial({ color: '#fffdf8', roughness: 0.8 }),
      clay: new THREE.MeshStandardMaterial({ color: '#b68f71', roughness: 0.74 }),
      linen: new THREE.MeshStandardMaterial({ color: '#e9dfd2', roughness: 0.98 }),
    }),
    [],
  );

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.04, 0]} receiveShadow material={materials.floor}>
        <planeGeometry args={[8, 7]} />
      </mesh>
      <mesh position={[0, 1.75, -2.9]} receiveShadow material={materials.wall}>
        <boxGeometry args={[8, 3.6, 0.12]} />
      </mesh>
      <mesh position={[-3.95, 1.75, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow material={materials.wall}>
        <boxGeometry args={[5.8, 3.6, 0.12]} />
      </mesh>

      <mesh position={[-0.9, 0.02, 0.25]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow material={materials.paper}>
        <planeGeometry args={[3.6, 2.2]} />
      </mesh>

      <RoomObject objectId="couch" selected={selected} hovered={hovered} setHovered={setHovered} setSelected={setSelected} labelPosition={[-1.1, 1.25, -0.6]}>
        <group position={[-1.15, 0.36, -0.65]}>
          <RoundedBox args={[2.6, 0.48, 0.95]} radius={0.13} smoothness={8} castShadow receiveShadow material={materials.fabric} />
          <RoundedBox args={[2.7, 0.78, 0.28]} radius={0.12} smoothness={8} position={[0, 0.38, -0.38]} castShadow material={materials.fabric} />
          <RoundedBox args={[0.22, 0.62, 0.95]} radius={0.08} smoothness={8} position={[-1.44, 0.2, 0]} castShadow material={materials.fabric} />
          <RoundedBox args={[0.22, 0.62, 0.95]} radius={0.08} smoothness={8} position={[1.44, 0.2, 0]} castShadow material={materials.fabric} />
        </group>
      </RoomObject>

      <RoomObject objectId="table" selected={selected} hovered={hovered} setHovered={setHovered} setSelected={setSelected} labelPosition={[0.05, 0.8, 0.8]}>
        <group position={[0.05, 0.25, 0.8]}>
          <RoundedBox args={[1.25, 0.16, 0.72]} radius={0.14} smoothness={12} castShadow material={materials.wood} />
          <mesh position={[-0.42, -0.22, -0.22]} castShadow material={materials.charcoal}>
            <cylinderGeometry args={[0.035, 0.035, 0.44, 12]} />
          </mesh>
          <mesh position={[0.42, -0.22, 0.22]} castShadow material={materials.charcoal}>
            <cylinderGeometry args={[0.035, 0.035, 0.44, 12]} />
          </mesh>
        </group>
      </RoomObject>

      <RoomObject objectId="art" selected={selected} hovered={hovered} setHovered={setHovered} setSelected={setSelected} labelPosition={[-1.05, 2.55, -2.74]}>
        <group position={[-1.05, 1.95, -2.78]}>
          <RoundedBox args={[1.45, 1.1, 0.06]} radius={0.025} smoothness={4} castShadow material={materials.paper} />
          <mesh position={[-0.22, 0.06, 0.04]} material={materials.clay}>
            <circleGeometry args={[0.28, 32]} />
          </mesh>
          <mesh position={[0.25, -0.18, 0.05]} material={materials.charcoal}>
            <boxGeometry args={[0.55, 0.1, 0.02]} />
          </mesh>
        </group>
      </RoomObject>

      <RoomObject objectId="lamp" selected={selected} hovered={hovered} setHovered={setHovered} setSelected={setSelected} labelPosition={[1.9, 2.3, -1.1]}>
        <group position={[1.9, 0, -1.1]}>
          <mesh position={[0, 0.75, 0]} castShadow material={materials.charcoal}>
            <cylinderGeometry args={[0.035, 0.035, 1.5, 16]} />
          </mesh>
          <mesh position={[0, 1.58, 0]} castShadow material={materials.paper}>
            <coneGeometry args={[0.36, 0.5, 28]} />
          </mesh>
          <pointLight position={[0, 1.45, 0]} intensity={1.2} distance={3} color="#f6d9ac" />
        </group>
      </RoomObject>

      <RoomObject objectId="bed" selected={selected} hovered={hovered} setHovered={setHovered} setSelected={setSelected} labelPosition={[2.2, 0.95, 1.65]}>
        <group position={[2.15, 0.32, 1.55]} rotation={[0, -0.12, 0]}>
          <RoundedBox args={[1.65, 0.26, 1.1]} radius={0.1} smoothness={8} castShadow material={materials.wood} />
          <RoundedBox args={[1.48, 0.18, 0.94]} radius={0.08} smoothness={8} position={[0, 0.18, 0.05]} castShadow material={materials.linen} />
          <RoundedBox args={[0.62, 0.16, 0.34]} radius={0.07} smoothness={8} position={[-0.36, 0.36, -0.28]} castShadow material={materials.paper} />
        </group>
      </RoomObject>

      <RoomObject objectId="kitchen" selected={selected} hovered={hovered} setHovered={setHovered} setSelected={setSelected} labelPosition={[2.25, 1.45, -2.15]}>
        <group position={[2.35, 0.48, -2.18]}>
          <RoundedBox args={[1.1, 0.88, 0.55]} radius={0.08} smoothness={8} castShadow material={materials.paper} />
          <RoundedBox args={[0.52, 0.34, 0.42]} radius={0.08} smoothness={8} position={[0.06, 0.55, 0]} castShadow material={materials.charcoal} />
          <mesh position={[-0.24, 0.55, 0.24]} material={materials.clay}>
            <torusGeometry args={[0.18, 0.025, 8, 24, Math.PI]} />
          </mesh>
        </group>
      </RoomObject>
    </group>
  );
}

export default function ThreeRoomScene() {
  const [selected, setSelected] = useState(sceneObjects[0].id);
  const [hovered, setHovered] = useState<string | null>(null);
  const activeObject = sceneObjects.find((object) => object.id === selected) ?? sceneObjects[0];

  useEffect(() => {
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <WebGLSupportGuard>
      <div className="relative h-full w-full">
        <Canvas
          shadows
          dpr={[1, 1.6]}
          camera={{ position: [5.2, 3.2, 6], fov: 42 }}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          aria-label="Interactive 3D minimalist room showroom"
        >
          <color attach="background" args={['#f8f4ed']} />
          <ambientLight intensity={1.2} />
          <directionalLight position={[4, 6, 5]} intensity={1.8} castShadow shadow-mapSize={[1024, 1024]} />
          <Suspense fallback={<LoadingState />}>
            <CameraRig />
            <MinimalRoom selected={selected} hovered={hovered} setHovered={setHovered} setSelected={setSelected} />
            <ContactShadows position={[0, -0.03, 0]} opacity={0.28} scale={8} blur={2.4} far={2.8} />
          </Suspense>
          <OrbitControls
            enablePan={false}
            enableDamping
            dampingFactor={0.08}
            minDistance={4.5}
            maxDistance={8}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
        <aside className="scene-info" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood">Selected detail</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-charcoal">{activeObject.label}</h2>
          <p className="mt-2 text-sm leading-6 text-graphite">{activeObject.note}</p>
        </aside>
      </div>
    </WebGLSupportGuard>
  );
}
