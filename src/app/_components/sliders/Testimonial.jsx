"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const TestimonialSlider = ( { about } ) => {
  useEffect(() => {
    ScrollAnimation();
  }, []);


  return (
    <>
      {/* reviews */}
      <section className="mil-soft-bg mil-relative">
          <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />

          <div className="container mil-p-120-120">

              <div className="row justify-content-between">
                  <div className="col-lg-4">

                      <div className="mil-mb-60">
                          <span className="mil-suptitle mil-upper mil-up mil-mb-90" dangerouslySetInnerHTML={{__html : about.testimonial.subtitle}} />
                          <h2 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : about.testimonial.title}} />
                      </div>

                  </div>
                  <div className="col-lg-7 mil-mt-suptitle-offset">

                      <Swiper
                        {...SliderProps.milReviewsSlider}
                        className="swiper-container mil-reviews-slider"
                      >
                            {about.testimonial.testItems.map((item, key) => (
                            <SwiperSlide className="swiper-slide" key={`testimonial-slider-item-${key}`}>

                              <div className="mil-review-frame mil-mb-30" data-swiper-parallax-x="-200" data-swiper-parallax-opacity="0">
                                  <div className="mil-reviev-head mil-up">
                                      <div className="mil-left">
                                          <div className="mil-quote">
                                              <img src="/img/icons/12.svg" alt="icon" />
                                          </div>
                                          <div className="mil-review-avatar me-2">
                                              <img src={item.image} alt={item.name} />
                                          </div>
                                      </div>
                                      <div className="mil-name">
                                          <h6 className="mil-upper me-5">{item.name}</h6>
                                          <p className="mil-text-sm mil-dark-soft me-5">{item.role}</p>
                                      </div>
                                  </div>
                                  <div className="mil-up">
                                      <p className="mil-review-text" data-swiper-parallax="-60">{item.text}</p>
                                  </div>
                              </div>

                            </SwiperSlide>
                            ))}
                      </Swiper>

                      <div className="mil-nav-buttons mil-reviews-nav mil-up">
                          <div className="mil-slider-button mil-process-prev">بعدی</div>
                          <div className="mil-slider-button mil-process-next">قبلی</div>
                      </div>

                  </div>

              </div>
          </div>
      </section>
      {/* reviews end */}
    </>
  );
};
export default TestimonialSlider;
