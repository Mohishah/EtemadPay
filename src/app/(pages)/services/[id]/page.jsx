
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import PageBanner from "@components/PageBanner";
import ContactSection from "@components/sections/Contact";
import Faq from "@/src/app/_components/Faq";

const FullImageSlider = dynamic( () => import("@components/sliders/FullImage"), { ssr: false } );


export async function generateMetadata({ params }) {
    const service = await getSingleServices(params.id);

    return {
        title: service.title + " | خدمات ما",
    }
}

async function ServiceDetail( { params } ) {
    const {id} = params  
    const service = await getSingleServices(id);
    const faq = await getFaq();
    const data = await getSidebar();
    const counter = await getCounter()

  return (
    <>
      <PageBanner pageTitle={service.title} breadTitle={service.title} bgImage={"/img/image/12-4.png"} />

      {/* service */}
      <section>
        <div className="container mil-p-120-60">
            <div className="mil-background-grid mil-softened"></div>
            <div className="row justify-content-between">
                <div className="col-lg-7">

                                <h2 className="mil-upper mil-up mil-mb-60">{service.descriptions.title}</h2>
                                <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html: service.descriptions.body}} />


                                <h2 className="mil-upper mil-up mil-mb-60">{service.descriptions.title2}</h2>
                                <div className="row justify-content-between">
                                    <div className="col-lg-6">
                                        <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: service.descriptions.body2}} />
                                    </div>
                                    <div className="col-lg-5">
                                        <ul className="mil-icon-list mil-mb-60">
                                            {service.listItems.map((list_item, list_key) => (
                                            <li className="mil-up" key={`service-description--list-${list_key}`}><img src="/img/icons/11.svg" alt="icon" />{list_item.title}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                </div>
                <div className="col-lg-5">
                    <div className="mil-sidebar-frame mil-mb-60">
                        <h3 className="mil-upper mil-up mil-mb-60">اطلاعات بیشتر </h3>

                        {data.map((item, key) => (
                        <React.Fragment key={`service-sidebar-${key}`}>
                            <>
                                <h6 className="mil-upper mil-up mil-mb-30">{item.title}</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    {item.contents.map((list_item, list_key) => (
                                    <li key={`service-sidebar-${key}-values-${list_key}`}>{list_item.label}</li>
                                    ))}
                                </ul>
                            </>
                        </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <Suspense fallback={<div>Loading...</div>}>
        <FullImageSlider items={service.images} />
      </Suspense>

      <section>
        <div className="container mil-p-120-60">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between">
                <div className="col-lg-7">


                                <h2 className="mil-upper mil-up mil-mb-60">{service.descriptions2.title}</h2>
                                <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html: service.descriptions2.body}} />

                                <h2 className="mil-upper mil-up mil-mb-60">{service.descriptions2.title2}</h2>
                                <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: service.descriptions2.body2}} />

                            <div className="mil-divider-lg mil-up mil-mb-60" />



                        <Faq faq={faq}/>

                </div>
                <div className="col-lg-5">

                    <div className="mil-sidebar-frame mil-mb-60">

                        <h3 className="mil-upper mil-up mil-mb-60">اطلاعات بیشتر :</h3>

                                <div className="row">

                                        <div className="mil-counter-frame mil-up mil-mb-30 col-5 ms-1">
                                            <h5 className="mil-mb-5"><span className="mil-counter" data-number={counter.counter1}>0</span>+</h5>
                                            <p className="mil-dark" dangerouslySetInnerHTML={{__html: counter.label1}} />
                                        </div>
                                
                                        <div className="mil-counter-frame mil-up mil-mb-30 col-5 ms-1">
                                            <h5 className="mil-mb-5"><span className="mil-counter" data-number={counter.counter2}>0</span>+</h5>
                                            <p className="mil-dark" dangerouslySetInnerHTML={{__html: counter.label2}} />
                                        </div>

                                        <div className="mil-counter-frame mil-up mil-mb-30 col-5 ms-1">
                                            <h5 className="mil-mb-5"><span className="mil-counter" data-number={counter.counter3}>0</span>+</h5>
                                            <p className="mil-dark" dangerouslySetInnerHTML={{__html: counter.label3}} />
                                        </div>

                                        <div className="mil-counter-frame mil-up mil-mb-30 col-5 ms-1">
                                            <h5 className="mil-mb-5"><span className="mil-counter" data-number={counter.counter4}>0</span>+</h5>
                                            <p className="mil-dark" dangerouslySetInnerHTML={{__html: counter.label4}} />
                                        </div>

                                </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* service end */}
      
    <ContactSection />
      
    </>
  );
};
export default ServiceDetail;

export async function generateStaticParams() {
    return [
        {id:'1'},
        {id:'2'},
        {id:'3'}
    ]
}

const getSingleServices = async (id)=>{
    const res = await fetch(`http://127.0.0.1:8000/service/${id}`, {
      next:{
        revalidate:10
      }
    })
    const service = await res.json()
    return service
}

const getFaq = async ()=>{
    const res = await fetch('http://127.0.0.1:8000/service/faq', {
      next:{
        revalidate:10
      }
    })
    const faq = await res.json()
    return faq
}

const getSidebar = async ()=>{
    const res = await fetch('http://127.0.0.1:8000/service/sidebar', {
      next:{
        revalidate:10
      }
    })
    const data = await res.json()
    return data
}

const getCounter = async ()=>{
    const res = await fetch('http://127.0.0.1:8000/service/counter', {
      next:{
        revalidate:10
      }
    })
    const counter = await res.json()
    return counter
}