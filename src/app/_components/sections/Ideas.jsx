import Link from "next/link";

const IdeasSection = ({Idea}) => {
    return (
        <>
            {/* ideas */}
            <section>
                <div className="container mil-p-0-90">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-6">

                            <div>
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Idea.title}} />
                                <h2 className="mil-upper mil-up mil-mb-40 mt-5" dangerouslySetInnerHTML={{__html : Idea.subtitle}} />
                            </div>

                        </div>
                        <div className="col-lg-5 mil-mt-suptitle-offset">

                            <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Idea.description}} />

                            <div className="row">
                                {Idea.ideaItems.map((item, key) => (
                                <div className="col-sm-4" key={`ideas-item-${key}`}>

                                    <Link href='/about' className="mil-icon-box mil-sm-center mil-mb-30">
                                        <div className="mil-icon mil-icon-accent-bg mil-up mil-mb-30">
                                            <img src={item.icon} alt="icon" />
                                        </div>
                                        <h6 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : item.label}} />
                                    </Link>

                                </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* ideas end */}
        </>
    );
};
export default IdeasSection;