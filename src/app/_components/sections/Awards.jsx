"use client";

import { useEffect } from "react";
import { HoverImages } from "@common/hoverImages";

const AwardsSection = ({about}) => {

  useEffect(() => {
    HoverImages();
  }, []);

  return (
    <>
        {/* awards */}
        <section>
            <div className="container mil-p-120-90">
                <div className="mil-background-grid mil-softened"></div>

                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : about.award.title}} />
                            <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : about.award.description}} />
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <div className="mil-hover-images mil-up">
                            <ul>
                                {about.award.items.map((item, key) => (
                                <li className="mil-up" key={`awards-item-${key}`}>
                                    <a className="mil-hover-item" href="#." onClick={(e) => {e.preventDefault();}} data-src={item.image}>
                                        <p className="ps-4">{item.year}</p>
                                        <span className="mil-h4">{item.title}</span>
                                    </a>
                                </li>
                                ))}
                            </ul>
                            <div className="mil-img-wrapper mil-mb-30">
                                <img src={about.award.image} alt="awards" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        {/* advantages end */}
    </>
  );
};

export default AwardsSection;