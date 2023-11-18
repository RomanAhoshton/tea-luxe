import Burger from "../images/Burger.png";
import Logo from "../images/Logo.svg";
import Banner from "../images/Banner.jpeg";
import BlackTea from "../images/Black.png";
import GreenTea from "../images/Green.png";
import WhiteTea from "../images/White.png";
import OolongTea from "../images/Oolong.png";
import PuErhTea from "../images/Pu-erh.png";


export const headerLogo = Logo;
export const BurgerIcon = Burger;
export const MainImage = Banner;

export const menuLinks = [
  { link: "Black", href: "#" },
  { link: "Green", href: "#" },
  { link: "White", href: "#" },
  { link: "Oolong", href: "#" },
  { link: "Pu-erh", href: "#" },
];

export const mobileLinks = [
  { link: "Contact Us", href: "#" },
  { link: "Our Blog", href: "#" },
  { link: "Shipping and Delivery", href: "#" },
];

export const teaCollection = [
  {
    image: BlackTea,
    title: "Black",
  },
  {
    image: GreenTea,
    title: "Green",
  },
  {
    image: WhiteTea,
    title: "White",
  },
  {
    image: OolongTea,
    title: "Oolong",
  },
  {
    image: PuErhTea,
    title: "Pu-erh",
  },
];
