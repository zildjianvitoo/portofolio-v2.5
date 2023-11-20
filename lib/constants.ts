import { IoPersonSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaClipboard } from "react-icons/fa";

export const skills = [
  {
    name: "Html 5",
    image: "/assets/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    image: "/assets/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    image: "/assets/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    image: "/assets/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    image: "/assets/react.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    image: "/assets/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 14",
    image: "/assets/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    image: "/assets/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    image: "/assets/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    image: "/assets/node-js.png",
    width: 80,
    height: 80,
  },
];

export const socials = [
  {
    name: "linkedin",
    icon: FaLinkedin,
    navigateTo: "https://www.linkedin.com/in/zildjianvito/",
  },
  {
    name: "instagram",
    icon: RiInstagramFill,
    navigateTo: "https://www.instagram.com/zildjianvitoo/",
  },
  {
    name: "Whatsapp",
    icon: IoLogoWhatsapp,
    navigateTo: "https://wa.me/6285176734655",
  },
];
export const projects = [
  {
    title: "Modern Nextjs Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/NextWebsite.png",
  },
  {
    title: "Space Themed Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/SpaceWebsite.png",
  },
  {
    title: "Modern Nextjs Portfolio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/WebPortfolio.png",
  },
  {
    title: "Matrix themed Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/Matrix.png",
  },
];

export const navLinks = [
  {
    name: "/",
    icon: AiFillHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: IoPersonSharp,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: MdDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: FaClipboard,
    link: "/contact-me",
  },
];
