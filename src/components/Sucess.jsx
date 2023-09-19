import React from "react";
import success from "../assets/img/sucess_img.png";
import vipe from "../assets/img/sucess_small_img.png";
export const Success = () => {
  const vipeppc = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-3 xl:pt-12">
          <div className="relative  md:pb-48 pb-40">
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-1/2 lg:w-2/6">
                <img src={success} alt="men" className="w-full lg:pe-6" />
              </div>
              <div className="w-full lg:w-8/12 mt-4 mt-lg-0">
                <p className=" font-gilroyMedium font-normal text-base text-[#868687]">
                  HAVE YOU SEEN OUR MASCOT?
                </p>
                <h2 className=" font-KonexyPersonalUse font-normal lg:text-5xl md:text-[38px] sm:text-4xl text-[34px] text-black mb-2">
                  Success Guides
                </h2>
                <div className=" overflow-x-auto">
                  <div className="mb-2 w-[510px] ">
                    <button className="font-gilroyMedium font-semibold text-base text-[#6022EA] px-4 py-2 rounded-full border border-solid border-[#6022EA] hover:bg-[#6022EA] hover:text-white mt-2 mt-sm-0 transition-all duration-300 ease-linear">
                      Category-1
                    </button>
                    <button className="font-gilroyMedium font-semibold text-base text-[#6022EA] px-4 py-2 rounded-full border border-solid border-[#6022EA] hover:bg-[#6022EA] hover:text-white ms-2 mt-2 mt-sm-0 transition-all duration-300 ease-linear">
                      Category-2
                    </button>
                    <button className="font-gilroyMedium font-semibold text-base text-[#6022EA] px-4 py-2 rounded-full border border-solid border-[#6022EA] hover:bg-[#6022EA] hover:text-white ms-2 mt-2 mt-sm-0 transition-all duration-300 ease-linear">
                      Category-3
                    </button>
                    <button className="font-gilroyMedium font-semibold text-base text-[#6022EA] px-4 py-2 rounded-full border border-solid border-[#6022EA] hover:bg-[#6022EA] hover:text-white ms-2 mt-2 mt-sm-0 transition-all duration-300 ease-linear">
                      Category-4
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 justify-center">
                  {vipeppc.map((PPC) => {
                    return (
                      <div
                        sm={6}
                        md={4}
                        key={PPC.id}
                        className="sm:px-3 sm:w-1/2 md:w-4/12"
                      >
                        <div className="border border-solid border-[#E3E3E3] rounded-2xl bg-white shadow-[12px_48px_60px_0_#e5e9f666] p-4 mt-5">
                          <img src={vipe} alt="vipe PCP" className="w-full" />
                          <p className="font-gilroyMedium font-semibold text-2xl text-black mt-3 mb-2">
                            Sit diam metus
                          </p>
                          <p className="font-gilroyMedium font-normal text-base text-black mb-2">
                            Arcu amet, consectetur vel pellentesque mattis ipsum
                            sed mattis sed.
                          </p>
                          <p className="font-gilroyMedium font-semibold text-base text-[#6022EA] cursor-pointer">
                            Read More....
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r absolute bottom-[-5%] sm:bottom-[-7%] md:bottom-[-10%] lg:bottom-[-14%] w-full start-0  from-[#5F21E9] to-[#FA00FF] lg:flex justify-between items-center sm:pt-6 sm:pe-12 sm:pb-10 sm:ps-10 p-4 rounded-2xl">
              <div>
                <p className="text-center lg:text-start font-KonexyPersonalUse font-normal lg:text-5xl md:text-[38px] sm:text-4xl text-[34px] text-white mb-4">
                  Have you
                </p>
                <p className="text-center lg:text-start font-gilroyMedium font-semibold text-lg sm:text-xl md:text-2xl md:text-2xl text-white">
                  read our study about Speed and Performance in
                  <span className="lg:block"> WordPres?</span>
                </p>
              </div>
              <div className="text-center lg:text-start">
                <button className="font-inter font-semibold text-base text-[#6022EA] hover:text-[#FA00FF] transition-all duration-300 ease-linear  bg-white px-5 py-3 md:px-12 md:py-4 rounded-full lg:mt-0 mt-4">
                  Check It Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};