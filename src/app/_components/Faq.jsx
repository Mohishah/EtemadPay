"use client";


import { useEffect } from "react";
import { Accordion } from "@common/utilits";

const Faq = ({faq}) => {
  useEffect(() => {
    Accordion();
  }, []);

  return (
    <>
        <span className="mil-suptitle mil-upper mil-dark mil-up mil-mb-30">{faq.title}</span>
                        <h2 className="mil-upper mil-up mil-mb-60">{faq.subtitle}</h2>

        <div className="mil-mb-60">
            {faq.faqItems.map((item, key) => (
                <div className="mil-accordion-group mil-dark mil-up" key={`faq-item-${key}`}>
                    <div className="mil-accordion-menu">

                        <div className="mil-symbol mil-dark mil-thin mil-h3">
                            <div className="mil-plus">+</div>
                            <div className="mil-minus">-</div>
                        </div>

                        <h6 className="mil-upper">{item.label}</h6>

                    </div>
                <div className="mil-accordion-content">
                    <div className="mil-dark-soft" dangerouslySetInnerHTML={{__html: item.content}} />
                </div>
            </div>
            ))}
        </div>
    </>
  );
};
export default Faq;