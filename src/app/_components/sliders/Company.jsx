"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const CompanySlider = ({about}) => { 
  return (
    <>
    {/* company slider */}
    <section>
        <div className="container mil-p-0-30">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">

                    <div className="mil-mb-60">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : about.company.title}} />
                        <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : about.company.subtitle}} />
                        <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : about.company.description}} />
                        
                        {about.company.signature != undefined &&
                        <div className="row align-items-center mil-up">
                            <div className="col-lg-5 mil-mb-30">
                                <h5 className="mil-upper mil-mb-10">{about.company.signature.name}</h5>
                                <p>{about.company.signature.subname}</p>
                            </div>
                            <div className="col-lg-6 mil-mb-30">
                                <h2 className="mil-font-2 mil-thin">{about.company.signature.text}</h2>
                            </div>
                        </div>
                        }
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                        <Swiper
                            {...SliderProps.milIllustrationSlider}
                            className="swiper-container mil-illustration-slider"
                        >
                                {about.company.images.map((item, key) => (
                                <SwiperSlide className="swiper-slide" key={`illustration-slider-item-${key}`}>
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src={item.image} alt={item.alt} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                ))}
                        </Swiper>
                        <div className="mil-illustration-slider-nav mil-up">
                            <div className="mil-nav-buttons">
                                <div className="mil-slider-button mil-illustration-prev">قبلی</div>
                                <div className="mil-slider-button mil-illustration-next">بعدی</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/* company slider end */}
    </>
  );
};
export default CompanySlider;
