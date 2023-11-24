'use client';

import HeaderNav from '../components/header_nav';
import Intro from '../components/intro';
import ControlsSection from '../components/controls_section';
import BorderDivider from '../components/border_divider';
import AboutMe from '../components/about_me';
import ProjectsList from '../components/projects_list';
import Skills from '../components/skills';
import Experience from '../components/experience';
import Contact from '../components/contact';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 px-5 ">
      <HeaderNav />
      <Intro />
      <ControlsSection />
      <BorderDivider />
      <AboutMe />
      <ProjectsList />
      <Skills />
      <Experience />
      <Contact />
      <Toaster position="bottom-right" reverseOrder={false} />
    </main>
  );
}
