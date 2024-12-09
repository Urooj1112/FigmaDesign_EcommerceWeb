import Image from "next/image";
import Footer from "@/components/Footer1";
import SecondHeader from "@/components/SecondHeader";
import About from "@/components/about";
import Logo from "@/components/Lodo";
export default function Home() {
  return (
    <div>
      <SecondHeader />


      <div className="relative flex flex-col gap-8">
        {/* First Section */}
        <div className="w-full max-w-[1050px] mx-auto flex flex-col   ml-[200px] items-start lg:gap-[80px] gap-[40px] py-[112px] sm:mb-[50px]">
          <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full lg:w-[1044px] lg:h-[321px]">
            {/* Column 1 */}
            <div className="flex flex-col lg:items-start items-center gap-[35px] w-full lg:w-[599px] h-auto lg:h-[321px]">
              <h5 className="text-[14px] sm:text-[14px] lg:w-[149px] font-semibold text-[#252B42] tracking-[0.1px]">
                ABOUT COMPANY
              </h5>
              <h1 className="text-[30px] sm:text-[30px] lg:text-[58px] font-bold text-[#252B42] tracking-[0.2px]">
                ABOUT US
              </h1>
              <h4 className="text-[12px] ${montserrat.className} font-bold sm:text-[18px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px]">
                We know how large objects will act, but things on a small scale
              </h4>
              <div className="flex flex-row items-start gap-[10px] w-[195px] h-[52px]">
                <div className="flex flex-col items-center px-[40px] py-[15px] gap-[10px] w-[195px] bg-[#23A6F0] rounded-[5px]">
                  <span className="font-bold text-[14px] sm:text-[16px] text-[#FFFFFF] whitespace-nowrap">
                    Get Quote Now
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <Image
              src="/images/about.png"
              alt="maingirl"
              height={716}
              width={1000}
              className="w-[500px]  h-[500px] mr-[100px] "
            />


          </div>
        </div>
        <div className=" grid grid-cols-2 gap-4 w-[1000px] h-[236px] pb-[5px]">
          <div className="w-[800px] h-[188px] gab-[60px]">
            <div className="w-[394px] h-[140px] gab-[24px]">
              <p className="${montserrat.className} font-400text-[14px] w-[600px] text-[#E74040] ml-[200px]">Problems trying</p>
              <h3 className="${montserrat.className} font-bold text-[24px] w-[350px] text-[#252B42] mt-[20px] ml-[200px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
            </div> </div>
          <div>
            <p className="${montserrat.className} font-400 text-[14px] w-[500px] text-[#737373] mt-[60px] ml-[150px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
          </div>

        </div>
        <About />
        <div> {/* Team Section */}
          <section className="relative bg-white py-16">
            <div className="container mx-auto flex flex-col items-center gap-16 px-4">
              {/* Heading */}
              <div className="text-center max-w-lg">
                <h2 className="text-4xl font-bold text-[#252B42]">
                  Meet Our Team
                </h2>
                <p className="text-base text-[#737373] mt-4">
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics
                </p>
              </div>

              {/* Team Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Card 1 */}
                <div className="flex flex-col items-center bg-white shadow-md overflow-hidden">
                  <div className="w-full h-[230px] relative">
                    <Image
                      src="/images/User1.jpg"
                      alt="maingirl"
                      height={716}
                      width={1440}
                      className="w-full  h-full "
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h5 className="text-xl font-bold text-[#252B42]">John Doe</h5>
                    <h6 className="text-sm font-semibold text-[#737373]">
                      Software Engineer
                    </h6>
                    {/* Social Media */}
                    <div className="flex justify-center gap-4 mt-4">
                      {/* Background Image */}
                      <Image
                        src="/images/fb.png"
                        alt="maingirl"
                        height={716}
                        width={1440}
                        className="w-full  h-full object-cover"
                      />
                      <Image
                        src="/images/insta.png"
                        alt="maingirl"
                        height={716}
                        width={1440}
                        className="w-full  h-full object-cover"
                      />
                      <Image
                        src="/images/twi.png"
                        alt="maingirl"
                        height={716}
                        width={1440}
                        className="w-full  h-full object-cover"
                      />

                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center bg-white shadow-md overflow-hidden">
                  <div className="w-full h-[230px] relative">
                    <Image
                      src="/images/User2.jpg"
                      alt="maingirl"
                      height={716}
                      width={1440}
                      className="w-full  h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h5 className="text-xl font-bold text-[#252B42]">
                      Jane Smith
                    </h5>
                    <h6 className="text-sm font-semibold text-[#737373]">
                      Marketing Head
                    </h6>
                    <div className="flex justify-center gap-4 mt-4">
                      {/* Background Image */}
                      <Image
                        src="/images/fb.png"
                        alt="maingirl"
                        height={716}
                        width={1440}
                        className="w-full  h-full object-cover"
                      />
                      <Image
                        src="/images/insta.png"
                        alt="maingirl"
                        height={716}
                        width={1440}
                        className="w-full  h-full object-cover"
                      />
                      <Image
                        src="/images/twi.png"
                        alt="maingirl"
                        height={716}
                        width={1440}
                        className="w-full  h-full object-cover"
                      />

                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center bg-white shadow-md overflow-hidden">
                  <div className="w-full h-[230px] relative">
                    <Image
                      src="/images/User3.jpg"
                      alt="maingirl"
                      height={716}
                      width={1440}
                      className="w-full  h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h5 className="text-xl font-bold text-[#252B42]">
                      Emily Rose
                    </h5>
                    <h6 className="text-sm font-semibold text-[#737373]">
                      UI/UX Designer
                    </h6>
                    <div className="flex justify-center gap-4 mt-4">
                      {/* Background Image */}
                      <Image
                        src="/images/fb.png"
                        alt="maingirl"
                        height={716}
                        width={1440}
                        className="w-full  h-full object-cover"
                      />
                      <Image
                        src="/images/insta.png"
                        alt="maingirl"
                        height={716}
                        width={1440}
                        className="w-full  h-full object-cover"
                      />
                      <Image
                        src="/images/twi.png"
                        alt="maingirl"
                        height={716}
                        width={1440}
                        className="w-full  h-full object-cover"
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="h-[300px]   w-[100%] bg-[#FAFAFA]">
          <div ><div className=" h-[120px] w-[864px]">
            <h2 className="font-bold text-[40px] ${montserrat.className} text-[#252B42]   pt-[60px] w-[1300px] h-[50px] text-center">Big Companies Are Here</h2>
            <p className="font-[400] text-[14px] ${montserrat.className} text-[#737373]  ml-[350px] text-center  pt-[90px] w-[574px]  ">Problems trying to resolve the conflict between
              the two major realms of Classical physics: Newtonian mechanics </p><div className="mt-[30px]=">  <Logo /></div>
          </div>

          </div>

        </div>
        {/* groW */}
        <section className="relative w-full h-[636px]  flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">

          {/* Right Side Blue Section */}
          <div className="w-[1440px] md:w-1/2 h-full bg-[#2A7CC7] lg:px-[250px] lg:ml-[0px] ml-[50px] py-16  flex flex-col justify-center">
            <div className="w-[438px] flex flex-col gap-[24px]">
              <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
              <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">
                Now Let’s grow Yours
              </h2>
              <p className="text-white lg:text-sm text-[12px] lg:w-auto w-[350px] leading-[20px] tracking-[0.2px]">
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
              </p>
              <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
                <span className="text-white text-sm font-bold">Button</span>
              </button>
            </div>
          </div>
          {/* Left Side Image */}
          <div className="w-[540px] md:w-1/2 h-full relative">
            <Image
              src="/images/Girl2.png"
              alt="maingirl"
              height={716}
              width={1440}
              className="w-full  h-full object-cover"
            />
          </div>
        </section>
        <div className="mt-[-35px]"><Footer /></div>

      </div>  </div>

  );
}
