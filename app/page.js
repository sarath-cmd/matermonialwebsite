import Hero from '@/app/ui/homepage/Hero'
import Steps from '@/app/ui/homepage/Steps'
import LatestProfile from './ui/homepage/LatestProfile';

export default function Home() {
  return (
    <main>
      <Hero />
      <Steps />
      <LatestProfile />
    </main>
  );
}
