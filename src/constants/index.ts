import Burger from "../images/Burger.png";
import Logo from "../images/Logo.svg";
import Banner from "../images/Banner.jpeg";
import BlackTea from "../images/Black.png";
import GreenTea from "../images/Green.png";
import WhiteTea from "../images/White.png";
import OolongTea from "../images/Oolong.png";
import PuErhTea from "../images/Pu-erh.png";
import TeaBlog1 from "../images/TeaBlog1.png";
import TeaBlog2 from "../images/TeaBlog2.png";
import TeaBlog3 from "../images/TeaBlog3.png";
import TeaBlog4 from "../images/TeaBlog4.png";

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

export const Clients = [
  {
    text: `${"As a tea enthusiast, I have tried teas from all over the world, but this tea store truly stands out. Their teas are of the highest quality and the variety is impressive. This is definitely a tea store that every tea lover should visit."}`,
    name: "Alice",
  },
  {
    text: `${"This tea store is my go-to for all my tea needs. Their selection is unbeatable and the quality of their teas is exceptional."}`,
    name: "Mad-Hatter",
  },
  {
    text: `${"If you're a tea lover, you must visit this tea store. The selection is vast and the quality is outstanding. I guarantee you won't be disappointed."}`,
    name: "Dormouse",
  },
  {
    text: `${"I am not a big tea drinker, but this tea store has converted me. I highly recommend this tea store to anyone looking for a high-quality tea experience."}`,
    name: "March Hare",
  },
];

export const teaBlog = [
  {
    image: TeaBlog1,
    text: "Tea Time Travels: Funny Moments from Around the World",
    author: "by Robinson Crusoe",
    read: "Read",
  },
  {
    image: TeaBlog2,
    text: "Tea-rific Tales: Hilarious Stories from Tea Lovers",
    author: "by Casper the Friendly Ghost",
    read: "Read",
  },
  {
    image: TeaBlog3,
    text: "The Role of Tea in Mental Health",
    author: "by Joker",
    read: "Read",
  },
  {
    image: TeaBlog4,
    text: "Tea and Caffeine: Effects on the Brain and Behavior",
    author: "by Author Authorius",
    read: "Read",
  },
];
