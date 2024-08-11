import Link from "next/link";
import Header from "@layouts/headers/Index";

const NotFound = () => {
  return (
    <>
      <Header layout={"default"} />

      {/* content */}
      <div id="content">

        {/* 404 */}
        <section className="mil-banner mil-relative">
            <img src="/img/photo/16.jpg" className="mil-bg-img mil-scale" data-value-1=".4" data-value-2="1.4" alt="image" />
            
            <div className="mil-overlay" />
            
            <div className="container">
                <div className="mil-background-grid mil-top-space" />

                <div className="mil-banner-content">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-xl-5">

                            <div className="mil-sm-center mil-mb-90">
                                <span className="mil-suptitle mil-light mil-upper mil-mb-60">صفحه مورد نظر یافت نشد</span>
                                <h2 className="mil-upper mil-light mil-mb-60 ">مشکلی رخ داده است  <span className="mil-marker mil-dark">404</span></h2>
                                <Link href="/" className="mil-button">بازگشت به خانه</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* 404 end */}

      </div>
      {/* content */}
    </>
  );
};
export default NotFound;
