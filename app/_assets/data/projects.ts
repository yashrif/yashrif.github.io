// 🖼️ Import project images
import {
  iitJuImage,
  roamanceImage,
  studySyncImage,
  ecoSyncImage,
  flourishImage,
  docLabImage,
} from '@/app/_assets/images';

export const title = 'Featured Projects';
export const description =
  'Some of my recent work showcasing different technologies and problem-solving approaches';

export const projects = [
  {
    id: 1,
    title: 'IIT-JU Website',
    category: 'Institutional Website',
    description:
      'Dynamic, SEO-optimized website for Institute of Information Technology, Jahangirnagar University. Achieved 100% SEO compliance and utilized modern CMS.',
    technologies: ['Next.js', 'Strapi', 'GraphQL', 'Trello'],
    image: iitJuImage,
    liveUrl: 'https://iitju.edu.bd/',
    githubUrl: null,
    featured: true,
    year: '2023-2024',
  },
  {
    id: 2,
    title: 'Roamance',
    category: 'AI-Powered Travel App',
    description:
      'AI-powered travel companion application with smart itinerary generation, AI-enriched travel journals, and multimodal search. Built as part of Geeky Solutions Learnathon 3.0 using modern development practices.',
    technologies: [
      'Next.js',
      'Spring Boot',
      'AI/ML',
      'TypeScript',
      'Git Flow',
      'Scrum',
    ],
    image: roamanceImage,
    liveUrl: 'http://roamance.vercel.app/',
    githubUrl: 'https://github.com/Learnathon-By-Geeky-Solutions/devs',
    featured: true,
    year: '2024-2025',
  },
  {
    id: 3,
    title: 'StudySync',
    category: 'AI Learning Platform',
    description:
      'Champion project at Therap Javafest 2024. AI-powered digital learning platform that enhances educational experiences through intelligent features and modern UI/UX design.',
    technologies: [
      'Next.js',
      'Django',
      'AI/ML',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
    ],
    image: studySyncImage,
    liveUrl: 'https://study-sync-pi.vercel.app/',
    githubUrl: 'https://github.com/BrickedSoft/Studysync',
    featured: true,
    year: '2024',
  },
  {
    id: 4,
    title: 'EcoSync',
    category: 'Waste Management Solution',
    description:
      'Comprehensive waste management solution for Dhaka North City Corporation. Developed during Code Samurai BD 2024 hackathon, reaching top 40 finalist position.',
    technologies: ['Next.js', 'Spring Boot', 'SQLite', 'React'],
    image: ecoSyncImage,
    liveUrl: 'https://cs24-p2-ju-amadeus.vercel.app/',
    githubUrl: 'https://github.com/BrickedSoft/cs24-p2-ju_amadeus',
    featured: false,
    year: '2024',
  },
  {
    id: 5,
    title: 'Flourish',
    category: 'Mental Health Platform',
    description:
      'Web application enhancing mental health support for students in Bangladesh. Features dynamic page rendering, centralized state management, and responsive design.',
    technologies: ['React.js', 'Django', 'Redux Toolkit', 'PostgreSQL'],
    image: flourishImage,
    liveUrl: 'https://flourish-six.vercel.app/',
    githubUrl: 'https://github.com/BrickedSoft/flourish',
    featured: false,
    year: '2023',
  },
  {
    id: 6,
    title: 'DocLab',
    category: 'Healthcare Booking',
    description:
      'Responsive web application for seamless doctor appointment bookings. Features real-time data rendering, dynamic routing, and RESTful API integration.',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'REST API'],
    image: docLabImage,
    liveUrl: 'https://github.com/yashrif/doclab-frontend',
    githubUrl: 'https://doclab-yashrif.vercel.app/',
    featured: false,
    year: '2023',
  },
];

export const categories = [
  'All',
  'AI-Powered',
  'Web Applications',
  'Mobile Apps',
  'Healthcare',
  'Education',
];
