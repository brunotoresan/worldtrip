import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { ChooseYourContinent } from "../components/ChooseYourContinent";
import ContinentCarousel from "../components/ContinentCarousel";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <ChooseYourContinent />
      <ContinentCarousel />
    </>
  )
}
