import Footer from "@/components/Footer1";
import SecondHeader from "@/components/SecondHeader";
import NavBar from "@/components/NavBar";
import ShopCard from "@/components/ShopCard";
import ResultsHeader from "@/components/ResultsHeader";
import Logo from "@/components/Lodo";
import ShopProduct from "@/components/ShopProduct";


export default function Home() {
return (
    <div>
    <div>
   <NavBar/>
    <SecondHeader/>
    <ShopCard/>
    <ResultsHeader/>
    <Logo/>
    <Footer/>
   <ShopProduct/>

    </div>

    <div className="flex  items-center  justify-center space-x-2 mb-[40px]">
    <div className="bg-[#F3F3F3] text-[#737373]   font-extrabold py-6 px-8 border border-[#d5d5d5] rounded-l-md shadow-md cursor-pointer">
      
   First
    </div>
    <div className="bg-white text-[#1D4ED8] py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
      1
    </div>
    <div className="bg-[#1D4ED8] text-white py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
      2
    </div>
    <div className="bg-white text-[#1D4ED8] py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
      3
    </div>
    <div className="bg-white text-[#1D4ED8] py-6 px-8 border border-[#d5d5d5] rounded-r-md shadow-md cursor-pointer">
      Next
    </div>
  </div></div>
  );
}
