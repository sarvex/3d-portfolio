import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Sky from '../models/Sky';
import Island from '../models/Island';
import Bird from '../models/Bird';
import Plane from '../models/Plane';

const Home = () => {
  const islandScale = window.width < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
  const islandPosition = [0, -6.5, -43];
  const islandRotation = [0.1, 4.7, 0];

  const [rotating, setRotating] = useState(false);

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div> */}

      <Canvas className='w-full h-screen bg-transparent' camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

          <Bird />
          <Sky />
          <Island position={islandPosition} scale={islandScale} rotation={islandRotation} />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
