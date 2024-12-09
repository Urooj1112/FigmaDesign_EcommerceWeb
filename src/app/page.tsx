import Footer from "@/components/Footer1";
import FirstHeader from "@/components/FirstHeader"
import SecondHeader from "@/components/SecondHeader";
import HeroSection from "@/components/HeroSection";
import EditorPick from "@/components/Editor";
import Vite from "@/components/Vite";
import PartNeuralPage from "@/components/PartNeuralPage";
import BestProducts from "@/components/BestProducts.tsx";
import FeaturedPosts from "@/components/FeaturedPost";
export default function Home() {
  return (
    <div>
      <FirstHeader/>
      <SecondHeader/>
      <HeroSection/>
      <EditorPick/>
     <BestProducts/>
      <Vite/>
      <PartNeuralPage/>
      <FeaturedPosts/>
      <Footer/>
    </div>
  );
}
