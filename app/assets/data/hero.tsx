import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoPinterest,
  IoLogoReddit,
  IoPaperPlaneOutline
} from "react-icons/io5";
import {BsArrowUp} from "react-icons/bs";

import { ColorScheme } from "@/app/Types/ColorScheme";

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
    title: "Pinterest",
    href: "https://www.pinterest.com/yaswoccho",
    icon: <IoLogoPinterest />,
  },
  {
    title: "Reddit",
    href: "https://www.reddit.com/user/Yashrif_Arifin",
    icon: <IoLogoReddit />,
  },
];
