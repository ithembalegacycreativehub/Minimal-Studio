import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import InteractiveStudio from './components/InteractiveStudio';
import JapandiLiving from './components/JapandiLiving';
import Principles from './components/Principles';
import SpaceJourney from './components/SpaceJourney';
import RoomInspiration from './components/RoomInspiration';
import ProductInspiration from './components/ProductInspiration';
import MotionStory from './components/MotionStory';
import Journal from './components/Journal';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const ThreeRoomScene = lazy(() => import('./components/ThreeRoomScene'));

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Navbar />
      <main>
        <Hero
          scene={
            <Suspense fallback={<div className="scene-fallback">Preparing the showroom...</div>}>
              <ThreeRoomScene />
            </Suspense>
          }
        />
        <InteractiveStudio />
        <JapandiLiving />
        <SpaceJourney />
        <CategoryGrid />
        <Principles />
        <RoomInspiration />
        <ProductInspiration />
        <MotionStory />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
