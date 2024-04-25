import Header from "@/app/common/Header";
import Image from "next/image";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Heading from "./common/Heading";
import MostPopular from "./components/MostPopular";
import Wicker from "./components/Wicker";
import ComboProducts from "./components/ComboProducts";
import GiftItems from "./components/GiftItems";
import YourWish from "./components/YourWish";
const images = [
  'https://thebrowncurves.com/wp-content/uploads/2021/09/BAR-CHAIR-1024x341.jpg',
  'https://thebrowncurves.com/wp-content/uploads/2021/08/BAR-CHAIR-1-1024x341.jpg',
  'https://thebrowncurves.com/wp-content/uploads/2021/08/SLIDER-TEXT-SMALL-1024x341.jpg',
];
export default function Home() {
  return (
    <>
      <Banner images={images} />
      <Heading headingText='Top Categories' />
      <Categories />
      <Heading headingText='Most Popular' />
      <MostPopular />
      <Heading headingText='Say HELLO to wicker...!!' />
      <Wicker />
      <Heading headingText='Combo Products' />
      <ComboProducts />
      <Heading headingText='Gift Items' />
      <GiftItems />
      <Heading headingText='YOUR WISH, OUR COMMAND' />
      <YourWish />
    </>
  );
}
