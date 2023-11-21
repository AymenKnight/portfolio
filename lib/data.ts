import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import doctorIO from '@/public/pictures/doctorIo.png';
import pisri from '@/public/pictures/pisri.png';
import lotusLauncher from '@/public/pictures/lotusLauncher.png';
import drJarvis from '@/public/pictures/drJarvis.jpg';
import commerce from '@/public/pictures/commerce.png';
import walid from '@/public/pictures/walid.png';
import realtor from '@/public/pictures/realtor.png';
import nft from '@/public/pictures/nft.png';
import { FaCode } from 'react-icons/fa6';

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
    title: 'Computer Science graduated',
    location: 'University of saad dahleb - Blida',
    description: 'I graduated with a Bachelors degree in Computer Science.',
    icon: React.createElement(LuGraduationCap),
    date: '2020',
  },
  {
    title: 'Network engineering graduated',
    location: 'University of saad dahleb - Blida',
    description: 'I graduated with a Master degree in Network Engineering.',
    icon: React.createElement(LuGraduationCap),
    date: '2022',
  },
  {
    title: 'Software Developer',
    location: 'Blida',
    description:
      'I worked as a full-stack developer on Dzbracket company for 2 years on part time.',
    date: '2020-2022',
    icon: React.createElement(FaCode),
  },
  {
    title: 'Freelance Developer',
    location: 'Remote',
    description: 'Working as a freelance software developer.',
    date: '2023-Now',
    icon: React.createElement(FaCode),
  },
] as const;

export const projectsData = [
  {
    title: 'Dr-jarvis',
    description: 'A doctor management app built using Java.',
    tags: ['Java', 'JAVAFX', 'CSS'],
    imageUrl: drJarvis,
  },
  {
    title: 'Clothes Store',
    description:
      'The app showcases various clothing items and provides features such as authentication with Firebase, persistence of chosen clothes by the user, and the ability to checkout using Stripe.',
    tags: ['React', 'JavaScript', 'CSS', 'SCSS', 'Firebase', 'Stripe'],
    imageUrl: commerce,
  },
  {
    title: 'Pisri',
    description:
      'Pisri is a mobile application built using React Native framework. It serves as a convenient online store where users can browse and purchase products. The app also provides features such as checkout and the ability to request a delivery person. Users are required to sign up or log in to access the app functionalities. Additionally, users can check the status of their deliveries from a specific screen.',
    tags: ['React Native', 'Expo', 'TypeScript', 'JavaScript', 'Firebase'],
    imageUrl: pisri,
  },
  {
    title: 'DoctorIO',
    description:
      'Clinicord is a Medical practice management software/system tend to improve healthcare services. It is a platform that allows doctors to manage their patients, appointments, and medical records. It build for the interest of creating a secure and safe way to store and exchange medical records',
    tags: [
      'React',
      'TypeScript',
      'CSS',
      'SCSS',
      'Electron.js',
      'Nest.js',
      'PostgreSQL',
      'Prisma',
    ],
    imageUrl: doctorIO,
  },

  {
    title: 'Lotus Launcher',
    description:
      'Lotus Launcher is a simple utility app for launching the Clinicord server. It provides a convenient way to launch the server and access its features.',
    tags: ['React', 'Tauri', 'TypeScript', 'JavaScript', 'Rust'],
    imageUrl: lotusLauncher,
  },
  {
    title: 'Image Gallery Store',
    description:
      'The app showcases various images with the modern design and provides features such as persistence of chosen images by the user, and the ability to checkout.',
    tags: ['React', 'TypeScript', 'JavaScript', 'CSS', 'SCSS'],
    imageUrl: nft,
  },

  // {
  //   title: 'MADRASATI',
  //   description:
  //     '"MADRASATI: the digital school notebook" of school support to help and assist students in primary school and improve their results.',
  //   tags: ['Android Studio', 'Java', 'XML', 'Gradle'],
  //   imageUrl: commerce,
  // },
  {
    title: 'Realtor app api',
    description:
      'Crafted a high-performance Realtor App API using NestJS, Prisma, and PostgreSQL, empowering real estate professionals with seamless data access and management.',
    tags: ['JavaScript', 'TypeScript', 'Nest.js', 'Prisma', 'PostgreSQL'],
    imageUrl: realtor,
  },
  {
    title: 'E-learning platform',
    description:
      'Built a feature-rich E-Learning Platform from the ground up, leveraging technologies like NestJS, Prisma, and PostgreSQL for the backend API. Deployed on AWS EC2 for high performance, and developed an intuitive Admin Dashboard using React, TypeScript, JavaScript, CSS, and SCSS. ensuring a user-friendly experience for students and administrators.',
    tags: [
      'React',
      'JavaScript',
      'CSS',
      'SCSS',
      'TypeScript',
      'Supabase',
      'Nest.js',
      'Prisma',
      'PostgreSQL',
      'AWS EC2',
    ],
    imageUrl: walid,
  },
];

export const skillsData = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Redux',
  'PostgreSQL',
  'Framer Motion',
  'JAVAFX',
  'Electron.js',
  'Nest.js',
  'Prisma',
  'PostgreSQL',
  'AWS EC2',
  'React Native',
  'Tauri',
  'Java',
  'Supabase',
] as const;
