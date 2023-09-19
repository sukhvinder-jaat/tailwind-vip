import React from "react";
import search from "../assets/img/search_icon.svg";
import circle from "../assets/img/tellus_circle.svg";
export const TellUs = () => {
  return (
    <>
      <section className="bg-[#0D0D0D] py-12 mt-[-2px]">
        <div className="container mx-auto px-3">
          <div className="flex justify-center md:justify-between flex-wrap">
            <div className="md:w-1/2 lg:w-2/5 sm:px-3">
              <h3 className=" font-KonexyPersonalUse text-white font-normal lg:text-4xl md:text-3xl sm:text-[28px] text-[26px]">
                Tell us more
              </h3>
              <p className="font-gilroyMedium text-white text-base font-normal pt-4">
                Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                augue in quis. Magna vel orci sem neque fringilla et lectus
                laoreet.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5 sm:px-3 pt-5">
              <div className="bg-[#252525] sm:py-5 py-3 sm:px-7 px-4 rounded-[80px] flex justify-between">
                <input
                  className="bg-transparent w-full"
                  type="text"
                  placeholder="What do you need assistance with?"
                />
                <img src={search} alt="search_icon" />
              </div>

              <div className="flex justify-between pt-3">
                <p className="font-gilroyMedium text-white text-base font-normal flex">
                  <img
                    className="pe-2"
                    height={16}
                    width={18}
                    src={circle}
                    alt="circle"
                  />
                  or send us an inquire?
                </p>
                <p className="font-gilroyMedium text-white text-base font-normal">
                  Learn more about...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
