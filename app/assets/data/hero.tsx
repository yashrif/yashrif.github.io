import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoPaperPlaneOutline,
} from 'react-icons/io5';
import { BsArrowUp, BsSteam } from 'react-icons/bs';

import { ColorScheme } from '@/app/types/color-scheme';

export const title = (
  <>
    Hey There,
    <br />
    I&apos;m Yashrif
  </>
);

export const description = (
  <>
    Enthusiastic full-stack developer and recent graduate from IIT,
    Jahangirnagar University, passionate about building dynamic websites and
    applications. Actively engaged in multiple projects and deeply interested in
    Machine Learning.
  </>
);

export const buttons = [
  {
    title: "Let's Talk",
    href: 'mailto:yaswoccho@gmail.com',
    icon: <IoPaperPlaneOutline />,
    colorScheme: ColorScheme.PRIMARY,
    solid: true,
  },
  {
    title: 'View Projects',
    href: '#projects',
    icon: <BsArrowUp />,
    colorScheme: ColorScheme.SECONDARY,
    solid: false,
  },
];

export const profileTitle = 'Check Out My';

export const profileLinks = [
  {
    title: 'Github',
    href: 'https://github.com/yashrif',
    icon: <IoLogoGithub />,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yashrif',
    icon: <IoLogoLinkedin />,
  },
];
