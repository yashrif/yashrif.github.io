import {
  IoDesktopOutline,
  IoPhonePortrait,
  IoCodeSlashOutline,
  IoServerOutline,
  IoBulbOutline,
  IoCloudOutline,
} from "react-icons/io5";

export const title = "What I Do";
export const description =
  "I specialize in full-stack development, creating modern web applications, mobile apps, and AI-powered solutions";

export const services = [
  {
    icon: <IoCodeSlashOutline />,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript"
  },
  {
    icon: <IoServerOutline />,
    title: "Backend Development",
    description: "Django, Spring Boot, APIs",
  },
  {
    icon: <IoPhonePortrait />,
    title: "Mobile Development",
    description: "React Native, Flutter",
  },
  {
    icon: <IoBulbOutline />,
    title: "AI/ML Solutions",
    description: "Machine Learning, AI Integration",
  },
  {
    icon: <IoDesktopOutline />,
    title: "Desktop Applications",
    description: "Electron.js, Cross-platform",
  },
  {
    icon: <IoCloudOutline />,
    title: "DevOps & Deployment",
    description: "Docker, Git, CI/CD",
  },
];
