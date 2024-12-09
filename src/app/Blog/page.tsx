import Image from "next/image";
import Footer from "@/components/Footer1";
import SecondHeader from "@/components/SecondHeader";
import NavBar from "@/components/NavBar";
import Logo from "@/components/Lodo";
import FloatingPage from "@/components/FloatingPage";
const products = [
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p1.png",

  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p2.png",

  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p3.png",

  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p4.png",

  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p5.png",

  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p6.png",

  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p7.png",

  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p8.png",

  },
]

export default function Home() {
  return (
    <div>
      <NavBar />
      <SecondHeader />
      <FloatingPage />
      <section>
        <div>
          <div className="h-[91px] w-full bg-[#FFFFFF]">
            <h5 className="${montserrat.className} font-bold  text-center pt-[50px] text-[14px] text-[#737373]"><span className="mr-[60px]">Description</span><span className="mr-[60px]">Additional Information</span><span>Reviews<span className="text-[#23856D] ml-[10px]">(0)</span></span></h5>
          </div>
          <div className="flex flex-col lg:flex-row gap-[30px] px-8 py-12 items-center justify-center">
            {/* Image Section */}
            <div className="w-full lg:w-[323px] h-auto flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src="/images/Home.png"
                alt="Home"
                height={716}
                width={1000}
                className="w-[500px] h-[500px] mr-[100px]"
              />
            </div>

            {/* Content Section */}
            <div className="flex w-full lg:w-[65%] ">
              {/* Text Block */}
              <div className="w-[332px] space-y-4 flex flex-col gap-[30px]">
                <h2 className="text-[24px] font-Montserrat font-bold text-gray-800">
                  the quick fox jumps over
                </h2>
                <p className="text-[#737373] font-Montserrat font-normal text-[14px] leading-[20px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do
                  met sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-[#737373] font-Montserrat font-normal text-[14px] leading-[20px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do
                  met sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-[#737373] font-Montserrat font-normal text-[14px] leading-[20px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do
                  met sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>

              {/* List Section */}

              <div className=" flex flex-col justify-center ml-[40px]  gap-[30px]">
                {/* First List */}
                <div>
                  <h3 className="text-[24px] font-semibold font-Montserrat text-gray-800 mb-[20px]">
                    the quick fox jumps over
                  </h3>
                  <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      the quick fox jumps over the lazy dog
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      the quick fox jumps over the lazy dog
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      the quick fox jumps over the lazy dog
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      the quick fox jumps over the lazy dog
                    </li>
                  </ul>
                </div>

                {/* Second List */}
                <div>
                  <h3 className="text-[24px] font-bold text-gray-800">
                    the quick fox jumps over
                  </h3>
                  <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      the quick fox jumps over the lazy dog
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      the quick fox jumps over the lazy dog
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      the quick fox jumps over the lazy dog
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full ml-[30px]">
          <div className="w-[1000px]  ml-[150px] pt-[48px] pb-[48px]">
            <h3 className="${montserrat.className} font-bold text-[24px] pb-[20px] text-[#252B42]">BESTSELLER PRODUCTS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`product border rounded-lg p-4 shadow-lg hover:shadow-xl transition `}
                >
                  <div className="relative">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="object-cover rounded-md"
                    />

                  </div>

                  <h5 className="mt-4 text-lg font-semibold text-[#252B42] ${montserrat.className}">{product.name}</h5>
                  <p className="text-[#737373] ${montserrat.className}">{product.description}</p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[16px] font-bold  ${montserrat.className} text-[#BDBDBD]">
                      {product.discountPrice}</span> <span className="text-[16px] mr-[80px] font-bold ${montserrat.className} text-[#23856D]">    {product.price}</span>

                  </div>

                </div>
              ))}
            </div></div></div>
      </section>

      <Logo />
      <Footer />
    </div>
  );
}
