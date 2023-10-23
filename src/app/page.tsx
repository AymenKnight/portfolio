import Image from 'next/image';
import HeaderNav from '../components/header_nav';
import Intro from '../components/intro';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <HeaderNav />
      <Intro />
    </main>
  );
}
