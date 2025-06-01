import {
  FaRocket,
  FaUserTie,
  FaTrophy,
  FaBolt,
  FaRobot,
  FaGraduationCap,
} from 'react-icons/fa';

export const title = 'Experience & Education';
export const description =
  'My professional journey, education, and key milestones in my development career';

export const timelineData = [
  {
    organization: 'Geeky Solutions Learnathon 3.0',
    designation: 'Participant | Team Devs',
    duration: 'Dec 2024 - May 2025',
    description:
      "Collaborating in a real-world software development program focused on job readiness. Developing 'Roamance' - an AI-powered travel companion application with smart itinerary generation, AI-enriched travel journals, and multimodal search. Using Git Flow for version control and Scrum methodology with Azure DevOps for project management.",
    category: 'experience' as const,
    icon: FaRocket,
  },
  {
    organization: 'IIT - Jahangirnagar University',
    designation: 'Project Manager',
    duration: 'Jul 2023 - Oct 2024',
    description:
      'Led development of dynamic, SEO-optimized website using Next.js and Strapi. Achieved 100% SEO and best practices compliance. Implemented project workflows using Trello and utilized GraphQL for efficient data querying. Customized Strapi CMS for backend content management.',
    category: 'experience' as const,
    icon: FaUserTie,
  },
  {
    organization: 'Therap Javafest 2024',
    designation: 'Champion | Team AMADEUS',
    duration: '2024',
    description:
      "Won first place in Therap Javafest 2024 programming competition. Developed 'StudySync' - an AI-powered digital learning platform. Demonstrated exceptional problem-solving skills and teamwork in a competitive programming environment.",
    category: 'experience' as const,
    icon: FaTrophy,
  },
  {
    organization: 'Code Samurai BD 2024',
    designation: 'Finalist | Team JU_AMADEUS',
    duration: '2024',
    description:
      "Reached top 40 finalist position in Code Samurai BD 2024. Developed 'EcoSync' - a comprehensive waste management solution for Dhaka North City Corporation during this day-long hackathon competition.",
    category: 'experience' as const,
    icon: FaBolt,
  },
  {
    organization: 'Stanford University & DeepLearning.AI',
    designation: 'Machine Learning Specialization',
    duration: '2024',
    description:
      'Completed comprehensive Machine Learning Specialization course on Coursera. Gained deep understanding of supervised learning, unsupervised learning, and neural networks. Applied knowledge to real-world projects and AI-powered applications.',
    category: 'education' as const,
    icon: FaRobot,
  },
  {
    organization: 'Jahangirnagar University',
    designation: 'Bachelor in ICT',
    duration: 'Mar 2020 - Mar 2025',
    description:
      "Pursuing Bachelor's degree in Information and Communication Technology from the Institute of Information Technology (IIT), Jahangirnagar University. Focusing on software development, algorithms, data structures, and modern web technologies.",
    category: 'education' as const,
    icon: FaGraduationCap,
  },
];
