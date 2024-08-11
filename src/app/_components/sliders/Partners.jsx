"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";


const PartnersSlider = ( {partner} ) => { 
  return (
    <>
    {/* partners */}
    <div className={'mil-soft-bg mil-partners mil-relative'}>
        <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />
        
        <div className="container mil-p-90-90">
            <div className="mil-background-grid mil-softened" />
            
            <Swiper
                {...SliderProps.milInfiniteSlider}
                className="swiper-container mil-infinite-show mil-up"
            >
                {partner.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`partnerssss-slider-item-${key}`}>
                    <a target="_blank" className="mil-partner-frame" style={{"width": "60px"}}><img src={item.image} alt={item.title} /></a>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
    {/* partners end */}
    </>
  );
};
export default PartnersSlider;