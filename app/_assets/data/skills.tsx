import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiKotlin,
  SiDart,
  SiDjango,
  SiSpringboot,
  SiFlutter,
  SiElectron,
  SiDocker,
  SiGit,
  SiLinux,
  SiFigma,
  SiAdobeillustrator,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiC,
  SiCplusplus,
  SiMarkdown,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { TbMathFunction } from 'react-icons/tb';
import { DiJava } from 'react-icons/di';

export const title = 'Technical Skills';
export const description =
  'Technologies and tools I work with to bring ideas to life';

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C/C++', icon: <SiCplusplus /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Java', icon: <DiJava /> },
      { name: 'Kotlin', icon: <SiKotlin /> },
      { name: 'Dart', icon: <SiDart /> },
    ],
  },
  {
    title: 'Frontend Frameworks',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'React Native', icon: <SiReact /> },
      { name: 'Flutter', icon: <SiFlutter /> },
    ],
  },
  {
    title: 'Backend Frameworks',
    skills: [
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Linux', icon: <SiLinux /> },
    ],
  },
  {
    title: 'Design & Others',
    skills: [
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'Adobe Illustrator', icon: <SiAdobeillustrator /> },
      { name: 'Electron.js', icon: <SiElectron /> },
      { name: 'Markdown', icon: <SiMarkdown /> },
      { name: 'MATLAB', icon: <TbMathFunction /> },
    ],
  },
];
