import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled } from "react-icons/tb";
import { TbClockHour4Filled } from "react-icons/tb";
import Footer from "@/components/Footer1";
import SecondHeader from "@/components/SecondHeader";
export default function Contact() {
     return (
          <><SecondHeader />
               <div className="relative">
                    <Image
                         src="/images/contact.png"
                         alt="Contact us"
                         height={716}
                         width={1440}
                         className="w-full  h-[500px] object-cover"
                    />
                    <div className="absolute top-[50%] left-[50%]  mt-[-80px] ml-[-100px] flex justify-center flex-col items-center ">
                         <h3 className="font-bold text-[40px] ">Contact</h3>
                         <div className="flex items-center text-[30px]">
                              <h3>Home</h3>
                              <IoIosArrowForward />
                              <h3>contact</h3>
                         </div>
                    </div>
                    {/* <div> */}
                    {/* </div> */}
               </div>
               <div className="text-center w-15 mt-[90px] mb-[90px]">
                    <h2 className="font-extrabold text-[2rem] text-[#23A6F0] mb-[20px]">Get In Touch With Us</h2>
                    <p className="text-[#9F9F9F] text-[16px]">
                         For More Information About Our Product & Services. Please Feel Free To Drop Us<br /> An Email. Our Staff Always Be There To Help You Out. Do Not
                         Hesitate!
                    </p>
               </div>
               <div className="flex justify-evenly leading-8  ">
                    <div className="w-[14rem] mt-6  ">
                         <div className="flex  ">
                              <div>


                                   <FaLocationDot />
                              </div>
                              <div>

                                   <h2 className="font-bold ml-[20px]">Address</h2>
                                   <p>236 5th SE Avenue, New York NY10000, United States</p>
                              </div>

                         </div>
                         <div className="flex">
                              <div>

                                   <TbPhoneFilled />
                              </div>
                              <div>

                                   <h2 className="font-bold ml-[20px]">Phone</h2>
                                   <p>Mobile: +(84) 546-6789 </p>
                                   <p>Hotline: +(84) 456-6789</p>
                              </div>
                         </div>
                         <div className="flex">
                              <div>

                                   <TbClockHour4Filled />
                              </div>
                              <div>

                                   <h2 className="font-bold ml-[20px]">Working Time</h2>
                                   <p>Monday-Friday: 9:00 - 22:00 </p>
                                   <p>Saturday-Sunday: 9:00 - 21:00</p>
                              </div>

                         </div>

                    </div>

                    <div className="mt-6 mb-[30px] ">
                         <form className="flex  flex-col ... " action="" >
                              <label htmlFor="" className="mb-[10px]">Your name</label>
                              <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[400px]" placeholder="Abc" />
                              <label htmlFor="" className="mb-[10px] mt-[10px]">Email address</label>
                              <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[400px]" placeholder="Abc@def.com" />
                              <label htmlFor="" className="mb-[10px] mt-[10px]">Subject</label>
                              <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[400px]" placeholder=" This is an optional" />
                              <label htmlFor="" className="mb-[10px] mt-[10px]" >Message</label>
                              <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[400px]" placeholder="Hi! i’d like to ask about" />
                              <button className="self-start bg-[#23A6F0] text-white mt-6 p-3 w-[7rem] rounded-sm">Submit</button>
                         </form>
                    </div>

               </div>



               <Footer />
          </>
     );
}
