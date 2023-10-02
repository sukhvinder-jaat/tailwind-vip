import React from "react";
import { Header } from "../components/Header";
// import play_icon from "../assets/img/playWhiteHerro.svg";
import hero_img from "../assets/img/heroImg.svg";
import { useTheme } from "../components/ThemeContext";
export const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div
        className={`flex flex-col xl:h-screen ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <Header />
        {/* <button onClick={toggleTheme} className=" bg-red-700">adsv</button> */}
        <section className="flex-grow-1 h-full flex items-center py-12 xl:py-0">
          <div className="container mx-auto px-3 lg:py-12 xl:py-0">
            <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center xl:items-start">
              <div className="lg:w-1/2 sm:px-3">
                <h1
                  className={`font-KonexyPersonalUse font-normal text-3xl sm:text-4xl lg:text-6xl xl:text-7xl  mt-9  relative leading-[107%] before:['*'] before:absolute before:h-[92%] before:w-[5px] before:bg-[#6022ea]  lg:before:top-[10px] before:top-[2px] before:left-[-12px] ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  WordPress Development Agency
                </h1>
                <h4
                  className={`text-2xl font-gilroyBold font-bold pt-[30px] pb-5 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  for Enterprise + Friendly Team
                </h4>
                <p
                  className={`text-base font-gilroyMedium font-normal opacity-70 pb-7 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
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
                    {/* <img src={play_icon} alt="icon" /> */}
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M16 0C7.16429 0 0 7.16429 0 16C0 24.8357 7.16429 32 16 32C24.8357 32 32 24.8357 32 16C32 7.16429 24.8357 0 16 0ZM21.1464 16.2464L13.3464 21.9214C13.3037 21.9522 13.2533 21.9705 13.2008 21.9744C13.1482 21.9784 13.0957 21.9678 13.0488 21.9438C13.0019 21.9198 12.9626 21.8834 12.9351 21.8385C12.9075 21.7936 12.8929 21.7419 12.8929 21.6893V10.3464C12.8927 10.2937 12.9071 10.2419 12.9346 10.1968C12.962 10.1518 13.0014 10.1152 13.0484 10.0912C13.0954 10.0671 13.1481 10.0566 13.2007 10.0606C13.2533 10.0647 13.3037 10.0833 13.3464 10.1143L21.1464 15.7857C21.1833 15.8118 21.2133 15.8463 21.2341 15.8864C21.2548 15.9265 21.2657 15.9709 21.2657 16.0161C21.2657 16.0612 21.2548 16.1057 21.2341 16.1458C21.2133 16.1858 21.1833 16.2204 21.1464 16.2464Z"
                        fill={theme === "dark" ? "white" : "black"}
                      />
                    </svg>
                  </div>
                  <p
                    className={`text-base font-gilroyMedium font-normal opacity-70 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
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
