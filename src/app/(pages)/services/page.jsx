import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import VisionSection from "@components/sections/Vision";
import FeaturesTwoSection from "@components/sections/FeaturesTwo";
import AboutFourSection from "@components/sections/AboutFour";
import CallToActionSection from "@components/sections/CallToAction";

import Link from "next/link";

export const metadata = {
  title: {
    default: "خدمات ما",
  },
  description: AppData.settings.siteDescription,
}

async function Services() {
  const service = await getServices();
  
  return (
    <>
      <PageBanner pageTitle={"خدمات ما"} breadTitle={"خدمات ما"} bgImage={"/img/image/12-1.png"} />
         
      {/* services */}
      <section>
          <div className="container mil-p-120-90">
              <div className="mil-background-grid mil-softened" />

              <div className="row justify-content-center">
                  <div className="col-lg-8">

                      <div className="mil-center mil-mb-120">
                          <span className="mil-suptitle mil-upper mil-up mil-mb-30">لورم ایپسوم</span>
                          <p className="mil-text-lg mil-up">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                      </div>

                  </div>
              </div>

              <div className="mil-center mil-mb-90">
                  <span className="mil-suptitle mil-upper mil-up mil-mb-30">مراحل کار</span>
                  <h2 className="mil-upper mil-up">لورم ایپسوم</h2>
              </div>

              <div className="row">
                  {service.map((item, key) => (
                  <div className="col-lg-4 mil-up" key={`services-item-${key}`}>

                      <Link href={`/services/${item.id}`} className="mil-service-card mil-mb-30">
                          <div className="mil-card-number">{key<10 ? "0" + (key+1) + "." : (key+1) + "."}</div>
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lg mil-mb-30">
                                  <img src={item.icon} alt={item.title} />
                              </div>
                              <h4 className="mil-upper mil-mb-20">{item.title}</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              <p className="mil-service-text">{item.short}</p>
                              <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg">
                                  <img src="/img/icons/1.svg" alt="icon" />
                              </div>
                          </div>
                      </Link>

                  </div>
                  ))}
              </div>
          </div>
      </section>
      {/* services end */}

      <VisionSection />

      <FeaturesTwoSection />

      <AboutFourSection />

      <CallToActionSection />
    </>
  );
};
export default Services;

const getServices = async ()=>{
  const res = await fetch('http://127.0.0.1:8000/service/', {
    next:{
      revalidate:10
    }
  })
  const service = await res.json()
  return service
}