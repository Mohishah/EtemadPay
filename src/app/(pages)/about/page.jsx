import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import AwardsSection from "@components/sections/Awards";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import ContactInfoSection from "@components/sections/ContactInfo";
import ServicesTwoSection from "@components/sections/ServicesTwo";

const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );
const CompanySlider = dynamic( () => import("@components/sliders/Company"), { ssr: false } );
const ProcessSlider = dynamic( () => import("@components/sliders/Process"), { ssr: false } );
const CompanyTwoSlider = dynamic( () => import("@components/sliders/CompanyTwo"), { ssr: false } );

export const metadata = {
  title: { 
		default: "درباره ما",
	},
  description: AppData.settings.siteDescription,
}

const About = async () => {
  const about = await getAboutService()  
  const process = await getProcessService()
  const partner = await getPartnerService()

  return (
    <>
      <PageBanner pageTitle={"درباره ما"} breadTitle={"درباره ما"} bgImage={"/img/image/10-1.png"} />
      <ServicesTwoSection about={about} />
      <ContactInfoSection about={about} />
      <CompanyTwoSlider about={about}/>
      <ProcessSlider process={process} paddingTop={"0"} />
      <CompanySlider about={about} />
      <PartnersSlider partner={partner} />
      <AwardsSection about={about}/>
      <TestimonialSlider about={about} />
      <CallToActionTwoSection />
    </>
  );
};
export default About;

const getAboutService = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/about" , {
    next:{
      revalidate: 10
    }
  })
  const about =await res.json()
  return about
}

const getProcessService = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/about/process" , {
    next:{
      revalidate: 10
    }
  })
  const process =await res.json()
  return process
}

const getPartnerService = async ()=>{
  const res = await fetch("http://127.0.0.1:8000/about/partner" , {
    next:{
      revalidate: 10
    }
  })
  const partner =await res.json()
  return partner
}

