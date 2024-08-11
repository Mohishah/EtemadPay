import React from "react";

import AppData from "@data/app.json";

import Timer from "@layouts/timer/Index";

export const metadata = {
    title: {
        default: "به زودی",
    },
    description: AppData.settings.siteDescription,
}

const ComingSoon = () => {
  return (
    <>
        {/* banner */}
        <section className="mil-banner mil-relative">
            <img src="img/photo/15.jpg" className="mil-bg-img mil-scale" data-value-1=".4" data-value-2="1.4" alt="image" />

            <div className="mil-overlay" />

            <div className="container">
                <div className="mil-background-grid mil-top-space" />

                <div className="mil-banner-content">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-xl-5">

                            <div className="mil-sm-center mil-mb-90">
                                <span className="mil-suptitle mil-light mil-upper mil-mb-60"><span className="mil-accent">تجربه ای</span> خارق العاده</span>
                                <h1 className="mil-upper mil-light mil-mb-60"> به زودی...</h1>
                                <p className="mil-light-soft">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            </div>

                        </div>
                        <div className="col-xl-5">
                            
                            <h3 className="mil-light-soft mil-timer-text mil-mb-30">زمان باقی مانده تا شروع :</h3>

                            <Timer />

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* banner end */}
    </>
  );
};
export default ComingSoon;
