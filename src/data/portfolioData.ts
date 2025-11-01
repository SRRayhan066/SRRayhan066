import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";
import {
  SiCodechef,
  SiCodeforces,
  SiLeetcode,
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
