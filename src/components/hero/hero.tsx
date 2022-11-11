import React from "react";
import HeroSlide from "../heroSlides/heroSlides";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

type heroType = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}[];
const heroData: heroType = [
  {
    id: 1,
    title: "The new phones are here take a look.",
    description:
      "A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail",
    imgUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-im…d=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660744859508",
  },
  {
    id: 2,
    title: "Apple Watch Series 7.",
    description:
      "Apple Watch Series 7 features the largest, most advanced display yet, breakthrough health innovations, and is the most durable Apple Watch ever.",
    imgUrl:
      "https://www.apple.com/newsroom/images/product/watc…ple_watch-series7_hero_09142021_big.jpg.large.jpg",
  },
  {
    id: 3,
    title: "The new M2 MacBook Air are available.",
    description:
      "It’s the ultra-fast, ultra-capable laptop that lets you work, play, or create just about anything — anywhere.",
    imgUrl: "",
  },
];

const Hero = () => {
  return (
    <HeroWrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        {heroData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <HeroSlide
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  padding: 0px 40px 20px 40px;
`;
