import HeaderNav from '../components/header_nav';
import Intro from '../components/intro';
import ControlsSection from '../components/controls_section';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center  ">
      <HeaderNav />
      <Intro />
      <ControlsSection />
    </main>
  );
}
