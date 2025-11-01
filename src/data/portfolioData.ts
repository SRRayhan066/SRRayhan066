import { BiLogoCss3, BiLogoTypescript } from "react-icons/bi";
import { FaCogs, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import {
  FaHtml5,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
  FaSquareGithub,
} from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";
import { PiShareNetwork } from "react-icons/pi";
import {
  SiCodechef,
  SiCodeforces,
  SiExpress,
  SiLeetcode,
  SiNextdotjs,
  SiStopstalk,
} from "react-icons/si";

export const aboutMe = {
  name: "S R Rayhan",
  tagLine: "Code. Design. Build. Inspire.",
  growth: {
    title: "System Booting...",
    progressBar: "████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
  },
  infoTags: [
    "Associate Software Engineer",
    "Dhaka, Bangladesh",
    "English & Bangla",
    "Curious Mind",
    "Growth > Perfection",
  ],
  socialTags: [
    { name: "Linked In", icon: FaLinkedin },
    { name: "Facebook", icon: FaFacebookSquare },
    { name: "Medium", icon: IoLogoMedium },
    { name: "Github", icon: FaSquareGithub },
  ],
};

export const programmingProfiles = [
  { name: "Codeforces", icon: SiCodeforces },
  { name: "Codechef", icon: SiCodechef },
  { name: "LeetCode", icon: SiLeetcode },
  { name: "StopsTalk", icon: SiStopstalk },
];

export const experiences = [
  {
    title: "Associate Software Engineer",
    company: "ShellBeeHaken Ltd",
    duration: "June, 2025 - Present",
  },
  {
    title: "Intern Software Engineer",
    company: "ShellBeeHaken Ltd",
    duration: "December, 2024 - May, 2025",
  },
];

export const skillSet = [
  {
    title: {
      icon: FaLaptopCode,
      name: "Frontend Development",
    },
    skills: [
      {
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        icon: FaReact,
        name: "React.js",
      },
      {
        icon: BiLogoTypescript,
        name: "TypeScript",
      },
      {
        icon: FaHtml5,
        name: "HTML5",
      },
      {
        icon: BiLogoCss3,
        name: "CSS3",
      },
    ],
  },
  {
    title: {
      icon: FaCogs,
      name: "Backend Development",
    },
    skills: [
      {
        icon: FaNodeJs,
        name: "Node.js",
      },
      {
        icon: SiExpress,
        name: "Express.js",
      },
      {
        icon: PiShareNetwork,
        name: "REST APIs",
      },
    ],
  },
];
