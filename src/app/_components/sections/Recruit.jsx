
const RecruitSection = ({recruit}) => {
    return (
        <>
            {/* recruit */}
            <section>
                <div className="container mil-p-120-30">
                    <div className="mil-background-grid mil-softened"></div>
                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">

                            <div className="mil-mb-90">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : recruit.title}} />
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : recruit.subtitle}}/>
                                <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : recruit.description}} />
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-illustration mil-up mil-mb-90">
                                <div className="mil-image-frame">
                                    <img src={recruit.image} alt="team" className="mil-scale" data-value-1="1" data-value-2="1.3" />
                                </div>
                                <div className="mil-about-counter mil-center">
                                    <div className="mil-avatar mil-mb-30">
                                        <img src={recruit.avatar.image} alt="avatar" />
                                    </div>
                                    <h5 className="mil-upper mil-mb-10">{recruit.avatar.name}</h5>
                                    <p className="mil-text-sm mil-dark-soft">{recruit.avatar.subname}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* recruit end */}
        </>
    );
};

export default RecruitSection;