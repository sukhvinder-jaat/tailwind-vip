import React from "react";
import check_img from "../assets/img/blueTick.svg";
import girl_img from "../assets/img/wipeGirl.png";
import cheked from "../assets/img/iconCheck.svg";
export const Allvipe = () => {
  return (
    <>
      <section className="bg-black py-12 overflow-hidden">
        <div className="container mx-auto xl:py-8">
          <div className="flex flex-wrap">
            <div className="xl:w-3/6 w-full px-3">
              <h2 className="text-white font-konexy md:text-4xl sm:text-[32px] text-3xl lg:text-[40px] font-normal">
                All Vipe Studio WordPress services include:
              </h2>
            </div>
            <div className="xl:w-3/12 sm:w-3/6 w-full px-3">
              <h3 className="text-white pb-3 sm:pb-6 font-gilroyMedium font-semibold text-2xl xl:pt-0 pt-6">
                By Industry
              </h3>
              <ul>
                <li className="text-white flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  Lorem in elementum pellentesque
                </li>
                <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  Molestie cursus praesent mi
                </li>
                <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  Leo sed viverra cras
                </li>
                <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  Laoreet feugiat ut at
                </li>
                <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  Risus aliquam molestie viverra
                </li>
                <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  LDiam enim pulvinar velit
                </li>
              </ul>
            </div>
            <div className="xl:w-3/12 sm:w-3/6 w-full px-3">
              <h3 className="text-white sm:pb-6 pb-3 font-gilroyMedium font-semibold text-2xl pt-6 xl:pt-0">
                By Services
              </h3>
              <ul>
                <li className="text-white flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  Accumsan, dui a semper
                </li>
                <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  Interdum malesuada vulputate
                </li>
                <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  Nullam non a, morbi
                </li>
                <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  Arcu morbi leo eu
                </li>
                <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  Viverra venenatis, in ornare
                </li>
                <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                  <img height={22} width={22} src={check_img} alt="check" />
                  Erat id aliquam habitant
                </li>
              </ul>
            </div>
          </div>
          <div className="relative z-10">
            <div className="absolute h-[200px] w-[200px] hidden xl:block bg-gradient-to-r blur-[90px] from-[#6022EA] to-[#FA00FF] rounded-full  opacity-50 top-[-22%] left-[-8%] z-10"></div>
            <div className="absolute h-[200px] w-[200px] hidden xl:block bg-gradient-to-r blur-[90px] from-[#6022EA] to-[#FA00FF]  rounded-full opacity-50 bottom-[-22%] right-[-8%] z-10"></div>
            <div className="flex flex-wrap lg:justify-between bg-black xl:py-7  xl:px-8  rounded-3xl mt-12 md:mt-20 xl:mt-40 z-20 relative">
              <div className="lg:w-4/12 w-full  md:w-1/2">
                <h2 className="text-white font-konexy md:text-3xl sm:text-[28px] text-[26px] lg:text-4xl font-normal sm:px-3">
                  Not Sure which service you need yet?
                </h2>
                <button className="bg-[#6022ea] text-white py-[10px] px-6 mt-9 rounded-[80px] font-gilroyMedium text-base font-semibold">
                  Schedule An Appointment
                </button>
              </div>
              <div className="lg:w-4/12 w-full  md:w-1/2 sm:px-3 pt-6 md:pt-0">
                <h3 className="text-white lg:pb-6 font-gilroyMedium font-bold text-2xl">
                  20-m free consultation that will help us identifyif you need{" "}
                </h3>
                <ul>
                  <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                    <img height={22} width={22} src={cheked} alt="check" />
                    Technical Description & Discovery
                  </li>
                  <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                    <img height={22} width={22} src={cheked} alt="check" />
                    Custom WordPress Development
                  </li>
                  <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                    <img height={22} width={22} src={cheked} alt="check" />
                    Support & Maintenance
                  </li>
                  <li className="text-white pt-3 flex font-gilroyMedium font-normal text-base gap-[10px]">
                    <img height={22} width={22} src={cheked} alt="check" />
                    Other WordPress Service{" "}
                  </li>
                </ul>
              </div>
              <div className="lg:w-4/12 w-full  md:w-1/2 pt-6 lg:pt-0">
                <div>
                  <img src={girl_img} alt="girl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
