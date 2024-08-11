import Link from "next/link";

const CallToActionTwoSection = ( { bg } ) => {
  return (
    <>
        {/* call to action two */}
        <section className="mil-dark-bg mil-relative mil-o-hidden">
            <img src={"/img/image/10-2.png"} className="mil-bg-img mil-scale" alt="image" style={{"objectPosition": "top"}} data-value-1="1" data-value-2="1.2" />

            <div className="mil-overlay" />
            
            <div className="container mil-p-120-120">
                <div className="mil-background-grid" />

                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="mil-center">
                            <span className="mil-suptitle mil-upper mil-light mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : "مشاوره رایگان"}} />
                            <h2 className="mil-upper mil-light mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : "جهت برقراری ارتباط با ما"}} />
                            <div className="mil-complex-actions">
                                <Link href={'/contact'} className="mil-button mil-up">تماس با ما</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* call to action two end */}
    </>
  );
};

export default CallToActionTwoSection;