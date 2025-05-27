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
      { name: 'C/C++', icon: <SiCplusplus />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
      { name: 'Python', icon: <SiPython />, level: 80 },
      { name: 'Java', icon: <DiJava />, level: 75 },
      { name: 'Kotlin', icon: <SiKotlin />, level: 70 },
      { name: 'Dart', icon: <SiDart />, level: 75 },
    ],
  },
  {
    title: 'Frontend Frameworks',
    skills: [
      { name: 'React', icon: <SiReact />, level: 90 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
      { name: 'React Native', icon: <SiReact />, level: 80 },
      { name: 'Flutter', icon: <SiFlutter />, level: 75 },
    ],
  },
  {
    title: 'Backend Frameworks',
    skills: [
      { name: 'Django', icon: <SiDjango />, level: 80 },
      { name: 'Spring Boot', icon: <SiSpringboot />, level: 75 },
      { name: 'Node.js', icon: <SiNodedotjs />, level: 70 },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75 },
      { name: 'MySQL', icon: <SiMysql />, level: 70 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 65 },
      { name: 'SQL', icon: <FaDatabase />, level: 80 },
      { name: 'Git', icon: <SiGit />, level: 85 },
      { name: 'Docker', icon: <SiDocker />, level: 70 },
      { name: 'Linux', icon: <SiLinux />, level: 75 },
    ],
  },
  {
    title: 'Design & Others',
    skills: [
      { name: 'Figma', icon: <SiFigma />, level: 70 },
      { name: 'Adobe Illustrator', icon: <SiAdobeillustrator />, level: 65 },
      { name: 'Electron.js', icon: <SiElectron />, level: 70 },
      { name: 'Markdown', icon: <SiMarkdown />, level: 85 },
      { name: 'MATLAB', icon: <TbMathFunction />, level: 60 },
    ],
  },
];
