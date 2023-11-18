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


export const Clients=[
  {
    text:`${"As a tea enthusiast, I have tried teas from all over the world, but this tea store truly stands out. Their teas are of the highest quality and the variety is impressive. This is definitely a tea store that every tea lover should visit."}`,
    name:"Alice",
  },
  {
    text:`${"This tea store is my go-to for all my tea needs. Their selection is unbeatable and the quality of their teas is exceptional."}`,
    name:"Mad-Hatter",
  },
  {
    text:`${"If you're a tea lover, you must visit this tea store. The selection is vast and the quality is outstanding. I guarantee you won't be disappointed."}`,
    name:"Dormouse",
  },
  {
    text:`${"I am not a big tea drinker, but this tea store has converted me. I highly recommend this tea store to anyone looking for a high-quality tea experience."}`,
    name:"March Hare",
  }
]
