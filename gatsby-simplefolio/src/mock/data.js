/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Martin Schvartz',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'fotoDePerfil',
  paragraphOne: "Hi I'm Martin Schvartz, currently I'm studying systems engineering in Argentina at UTN (Universidad Tecnologica Nacional)",
  paragraphTwo: 'I started learning about programming a few years ago in high school where I had computer orientated subjects. During that time i got quite interested in programming with lenguajes like C++ wich was the first lenguage I learned, Java for develop mobile apps in Android Studio, C# for developing in .NET, etc. After learning the basics in high school I went to college with a lot of expectations in learning new technologies and understand how they work.',
  paragraphThree: 'If you wanna se my resume (in spanish) just click down below',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'homeFoodApp.png',
    title: 'Where can i eat?',
    info: 'This is project that I used to learn the fundamentals about react native, the use of different hooks like useState,useEffect and useReducer. Also I learned to create my own personalized hooks, manage api async request and handle that data with styling',
    info2: 'Made with Expo',
    url: '',
    repo: 'https://github.com/MartinSchvartz/foodApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mining.jpg',
    title: 'My Blockchain',
    info: 'This was just a project to understand the basics of how mining cryptocurrencies works. You can mine blocks that are added to the blockchain, create wallets and send money between them',
    info2: 'Made with TypeScript',
    url: '',
    repo: 'https://github.com/MartinSchvartz/my_blockchain', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'rocket.jpg',
    title: 'The rocket game',
    info: 'Game developed by me during a game development curse',
    info2: 'Made with Unity and C#. (.exe inside Builds folder)',
    repo: 'https://github.com/MartinSchvartz/theRocketGame/tree/master/ProyectoFinalCursoLITE', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'taskapp.jpg',
    title: 'TODO app',
    info: 'To-Do list app',
    info2: 'Made it with the goal of start learning TypeScript',
    url: '',
    repo: 'https://github.com/MartinSchvartz/task-app-react-ts/tree/main/task-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'martinschvartz@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/martinschvartz/',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/martin-schvartz-367b08198/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MartinSchvartz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
