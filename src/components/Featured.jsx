import React from "react";
import yahooNews from "../assets/img/yahooNews.png";
import yahooNews2 from "../assets/img/yahoo2.png";
import yahooNews4 from "../assets/img/yahoo4.png";
import yahooNews5 from "../assets/img/yahoo5.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export const Featured = () => {
  return (
    <div className=" bg-[#F6F6F6] pt-[105px] pb-[92px]">
      <div className="container mx-auto px-3">
        <p className="font-KonexyPersonalUse text-black text-[48px] font-normal mb-5">
          Featured on
        </p>
        <div className="2xl:pt-[50px]">
          <Splide
            options={{
              type: "loop",
              perPage: 6,
              autoplay: true,
              arrows: false,
              dots: false,
              breakpoints: {
                1280: {
                  perPage: 5,
                },
                1024: {
                  perPage: 3,
                },
                768: {
                  perPage: 2,
                },
                500: {
                  perPage: 1,
                },
              },
            }}
            className="!p-0"
          >
            <SplideSlide>
              <img src={yahooNews} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={yahooNews2} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={yahooNews} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={yahooNews4} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={yahooNews5} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={yahooNews4} alt="" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};
