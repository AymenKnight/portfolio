import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import doctorIO from '@/public/pictures/doctorIO.jpeg';
import rmtdevImg from '@/public/rmtdev.png';

//TODO change the description with yours
//TODO change the images with your projects images

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Software Developer',
    description:
      'I worked as a full-stack developer on this startup company for 2 years.',
    tags: [
      'React',
      'TypeScript',
      'Nest js',
      'SCSS',
      'Prisma',
      'PostgreSQL',
      'JAVAFX',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    imageUrl: doctorIO,
  },
  {
    title: 'Graduated Software Engineer',
    location: 'Blida, Algeria',
    description: 'I graduated after 2 years of studying.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
] as const;

export const projectsData = [
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Redux',
  'Express',
  'PostgreSQL',
  'Framer Motion',
] as const;
