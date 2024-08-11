
const AboutFourSection = async () => {

    const about = await getAbout();

    return (
        <>
            {/* about four */}
            <section>
                <div className="container mil-p-120-30">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">

                            <div className="mil-mb-90">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : about.title}} />
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : about.subtitle}} />
                                <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : about.description}} />

                                <ul className="mil-icon-list mil-mb-60">
                                    {about.aboutLists.map((item, key) => (
                                    <li className="mil-up" key={`about-four-list-item-${key}`}><img src="/img/icons/11.svg" alt="icon" />{item.list}</li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-illustration mil-up mil-mb-90">
                                <div className="mil-image-frame">
                                    <img src={about.image_url} alt={about.image_alt} className="mil-scale" data-value-1="1" data-value-2="1.3" />
                                </div>
                                <div className="mil-about-counter mil-center">
                                    <div className="mil-avatar mil-mb-30">
                                        <img src={about.avatar_image} alt={about.avatar_name} />
                                    </div>
                                    <h5 className="mil-upper mil-mb-10">{about.name}</h5>
                                    <p className="mil-text-sm mil-dark-soft">{about.subname}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* about four end */}
        </>
    );
};

export default AboutFourSection;


const getAbout = async ()=>{
    const res = await fetch('http://127.0.0.1:8000/service/about', {
      next:{
        revalidate:10
      }
    })
    const about = await res.json()
    return about
  }