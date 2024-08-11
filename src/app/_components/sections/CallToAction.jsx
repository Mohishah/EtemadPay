import Link from "next/link";

const CallToActionSection = ( { bg } ) => {
  return (
    <>
        {/* call to action */}
        <section>
            <div className="container mil-p-90-90">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : "ارتباط با ما"}} />
                        <h2 className="mil-upper mil-up mt-3" dangerouslySetInnerHTML={{__html : "جهت ارتباط با مشاوران ما"}} />
                    </div>
                    <div className="col-lg-4 mil-mt-suptitle-offset">
                        <div className="mil-adaptive-right mil-up">
                            <Link href="/contact" className="mil-button">همین حالا تماس بگیرید</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* call to action end */}
    </>
  );
};

export default CallToActionSection;