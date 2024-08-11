import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
    title: {
        default: "تماس با ما",
    },
    description: AppData.settings.siteDescription,
}

const Contact = async() => {
    const contact = await getContactService ()  
    const social = await getSocialService ()  


  return (
    <>
        <PageBanner pageTitle={"راه های ارتباطی با ما"} breadTitle={"تماس با ما"} bgImage={"/img/image/10-4.png"} />

        {/* about */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between">
                    <div className="col-lg-6">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">{contact.title}</h2>
                            <p className="mil-up mil-mb-40">{contact.content}</p>
                        </div>

                    </div>
                    <div className="col-lg-4 mil-relative">

                        <div className="mil-contact-sidebar">

                            <img src="img/image/12-4.png" alt="img" style={{"width": "100%", "height": "200px", "objectFit": "cover", "borderRadius":"10px" , "objectPosition": "0 -60px"}} className="mil-mb-30" />

                            <div className="mil-sidebar-info">

                                <h6 className="mil-upper mil-up mil-mb-30">ارتباط با ما</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    {social.socials.map((items , key) => (
                                        <li className="mil-text-sm" key={`sidebar-social-item-${key}`}><a href={items.link} target="_blank">{items.name}</a></li>
                                    ))}
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">تلفن :</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    {contact.phones.map((items , key) => (
                                        <li key={`awardss${key}`}>{items.phone}</li>
                                    ))}
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">ایمیل :</h6>
                                <ul className="mil-list mil-dark mil-up">
                                    {contact.emails.map((items , key) => (
                                        <li key={`awas${key}`}>{items.email}</li>
                                    ))}
                                </ul>
                                
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            {contact.addresses.map((items , key) => (
                            <div className="col-lg-4" key={`aadresswas${key}`}>
                                <div className="mil-up mil-mb-60">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">تهران</span>
                                    <p className="mil-up">{items.address}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about end */}

        {/* map */}
        <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua" 
                    style={{"border": "0"}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
        {/* map end */}

        {/* contact */}
        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h3 className="mil-upper mil-up mil-mb-30">درخواست برقراری تماس</h3>
                            <p className="mil-up mil-mb-30">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            <p className="mil-up mil-mb-30">استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله </p>
                            <div className="mil-up">
                                <Link href="/team" className="mil-link mil-upper">تیم ما<span className="mil-arrow"><img src="/img/icons/11.svg" alt="arrow" /></span></Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <ContactForm />

                    </div>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};

export default Contact;

const getContactService = async ()=>{
    const res =await fetch("http://127.0.0.1:8000/contact/" , {
      next:{
        revalidate: 10
      }
    })
    const contact =await res.json()
    return contact
}

const getSocialService = async ()=>{
    const res =await fetch("http://127.0.0.1:8000/blog/social" , {
      next:{
        revalidate: 10
      }
    })
    const social =await res.json()
    return social
}
