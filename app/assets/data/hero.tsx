import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoPaperPlaneOutline,
} from "react-icons/io5";
import { BsArrowUp, BsSteam } from "react-icons/bs";

import { ColorScheme } from "@/app/types/color-scheme";

export const title = (
  <>
    Hey There,
    <br />
    I&apos;m Yashrif
  </>
);

export const description = (
  <>
    I&apos;m a UX/UI Designer &mdash; creating bold & brave interface design for
    companies all across the world
  </>
);

export const buttons = [
  {
    title: "Lets Talk",
    href: "mailto:yaswoccho@gmail.com",
    icon: <IoPaperPlaneOutline />,
    colorScheme: ColorScheme.PRIMARY,
    solid: true,
  },
  {
    title: "Portfolio",
    href: "#",
    icon: <BsArrowUp />,
    colorScheme: ColorScheme.SECONDARY,
    solid: false,
  },
];

export const profileTitle = "Check Out My";

export const profileLinks = [
  {
    title: "Github",
    href: "https://github.com/Yashrif",
    icon: <IoLogoGithub />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/yashrif",
    icon: <IoLogoLinkedin />,
  },
  {
    title: "Steam",
    href: "https://steamcommunity.com/profiles/76561198175046383/",
    icon: <BsSteam />,
  },
];
