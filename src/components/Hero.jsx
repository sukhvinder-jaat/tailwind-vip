import React from "react";
import {Header} from '../components/Header'
import play_icon from "../assets/img/playWhiteHerro.svg";
import hero_img from "../assets/img/heroImg.svg";
export const Hero = () => {
  return (
    <>
      <div className="flex flex-col xl:h-screen bg-black">
    <Header/>
        <section className="flex-grow-1 h-full flex items-center py-12 xl:py-0">
          <div className="container mx-auto px-3 lg:py-12 xl:py-0">
            <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center xl:items-start">
              <div className="lg:w-1/2 sm:px-3">
                <h1 className="text-white font-KonexyPersonalUse font-normal text-3xl sm:text-4xl lg:text-6xl xl:text-7xl  mt-9  relative leading-[107%] before:['*'] before:absolute before:h-[92%] before:w-[5px] before:bg-[#6022ea]  lg:before:top-[10px] before:top-[2px] before:left-[-12px]">
                  WordPress Development Agency
                </h1>
                <h4 className="text-white text-2xl font-gilroyBold font-bold pt-[30px] pb-5">
                  for Enterprise + Friendly Team
                </h4>
                <p className="text-white text-base font-gilroyMedium font-normal opacity-70 pb-7">
                  Vipe Studio is a WordPress Agency for development - a
                  long-term partner for any WordPress service. Websites
                  and,online shops development, maintenance and customization is
                  what we do best.
                </p>
                <div className="flex items-center">
                  <button className="bg-[#6022EA] hover:bg-transparent border-[1px] border-transparent hover:border-[1px] hover:border-[#6022ea] transition-all duration-300 border-solid shadow-[0px 4px 20px 0px rgba(96, 34, 234, 0.20);] sm:py-3 py-2 sm:px-10 px-4 rounded-[80px] text-white font-gilroymedium font-semibold text-base">
                    Get Started
                  </button>
                  <div className="sm:px-8 px-2">
                    <img src={play_icon} alt="icon" />
                  </div>
                  <p className="text-white text-base font-gilroyMedium font-normal opacity-70">
                    What is Vipe? (1min)
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 sm:w-3/4  relative sm:px-3">
                <div className="absolute h-[200px] w-[200px] hidden md:block bg-gradient-to-r blur-[90px] from-[#6022EA] to-[#FA00FF] rounded-full  opacity-50 md:top-[-100px] lg:top-[240px] xl:top-[350px]  left-[-8%] z-10"></div>
                <div className="absolute h-[200px] w-[200px] hidden md:block bg-gradient-to-r blur-[90px] from-[#6022EA] to-[#FA00FF]  rounded-full  opacity-50 xl:bottom-[-85px] md:top-[280px] md:right-[-10%] lg:top-[-50px] lg:right-0 xl:right-[-40%] z-[1]"></div>
                <div className="xl:absolute lg:end-[-24%] lg:top-[-10%] ps-3 xl:ps-0">
                  <img
                    className="w-full relative xl:z-10"
                    src={hero_img}
                    alt="men and women"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};