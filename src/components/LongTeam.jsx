import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../assets/img/long_team_1.png";
import logo2 from "../assets/img/long_team_2.png";
import logo3 from "../assets/img/long_team_3.png";
import logo4 from "../assets/img/long_team_4.png";
import logo5 from "../assets/img/long_team_5.png";
import logo6 from "../assets/img/long_team_6.png";
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  gap: "50px",
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const LongTeam = () => {
  return (
    <>
      <section className="py-12 bg-[#F6F6F6]">
        <div className="container xl:py-12 mx-auto px-3">
          <div className="lg:w-1/2">
            <h2 className=" font-KonexyPersonalUse lg:text-5xl md:text-[38px] sm:text-4xl text-[34px] text-black font-normal">
              Long Term WordPress Partner
            </h2>
            <p className="pt-5 pb-9 font-gilroyMedium font-normal text-base text-black">
              Our motto is the long-term partnership – we will not only develop
              your perfect website, but will be behind you through the whole
              process. They already trusted us:
            </p>
          </div>
          <Slider {...settings}>
            <div className="me-6">
              <img className="w-3/4" src={logo1} alt="logo" />
            </div>
            <div className="me-6">
              <img className="w-3/4" src={logo2} alt="logo" />
            </div>
            <div className="me-6">
              <img className="w-3/4" src={logo3} alt="logo" />
            </div>
            <div className="me-6">
              <img className="w-3/4" src={logo4} alt="logo" />
            </div>
            <div className="me-6">
              <img className="w-3/4" src={logo5} alt="logo" />
            </div>
            <div className="me-6">
              <img className="w-3/4" src={logo6} alt="logo" />
            </div>
            <div className="me-6">
              <img className="w-3/4" src={logo3} alt="logo" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};
