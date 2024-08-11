import ContactForm from "@components/ContactForm";

const ContactSection = async () => {

  const service = await getServices();

  return (
    <>
        {/* contact */}
        <section className="mil-soft-bg mil-relative">
            <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />

            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-60">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : service.title}} />
                            <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : service.subtitle}} />
                            <div className="mil-divider-lg mil-up mil-mb-30" />

                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                {service.phones.map((list, list_key) => (
                                <li key={`item--list-${list_key}`}>{list.phone}</li>
                                ))}
                            </ul>

                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                {service.emails.map((list, list_key) => (
                                <li key={`contact--list-${list_key}`}>{list.email}</li>
                                ))}
                            </ul>

                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                {service.addresses.map((list, list_key) => (
                                <li key={`contact-it-list-${list_key}`}>{list.address}</li>
                                ))}
                            </ul>

                        </div>

                    </div>
                    <div className="col-lg-7">
                        <ContactForm subtitleOffset={1} />
                    </div>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default ContactSection;

const getServices = async ()=>{
    const res = await fetch('http://127.0.0.1:8000/service/contact', {
      next:{
        revalidate:10
      }
    })
    const service = await res.json()
    return service
}