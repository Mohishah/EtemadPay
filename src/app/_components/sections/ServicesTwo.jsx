import Link from "next/link";

const ServicesTwoSection = ({ about }) => {
  return (
    <> 
        {/* services two */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                    <div className="col-12">
                        <div className="mil-mb-90">
                            <h3 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : about.services.title}} />
                            <p className="mil-up" dangerouslySetInnerHTML={{__html : about.services.description}} />
                        </div>
                    </div>
                    
                    {about.services.serviceItems.map((item, key) => (
                    <div className="col-lg-4" key={`services-two-item-${key}`}>

                        <div className="mil-up mil-mb-60">
                            <h4 className="mil-upper mil-mb-30">{item.title}</h4>
                            <p className="mil-mb-30">{item.text}</p>
                            <Link href={"/services"} className="mil-link mil-upper">
                                اطلاعات بیشتر <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* services two end */}
    </>
  );
};

export default ServicesTwoSection;