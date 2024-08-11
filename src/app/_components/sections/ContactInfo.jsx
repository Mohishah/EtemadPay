import Link from "next/link";

const ContactInfoSection = ({about}) => {
  return (
    <> 
        {/* contact info */}
        <section>
            <div className="container mil-p-0-120">
                <div className="mil-background-grid mil-softened" />

                <div className="mil-contact-frame mil-up">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-4 mil-mb-30">
                            <p className="mil-dark mil-up mil-mb-10">ایمیل :</p>
                            <h4 className="mil-thin mil-up">{about.contactInfo.email}</h4>
                        </div>
                        <div className="col-lg-4 mil-mb-30">
                            <p className="mil-dark mil-up mil-mb-10">تلفن :</p>
                            <h4 className="mil-thin mil-up">{about.contactInfo.phone}</h4>
                        </div>
                        <div className="col-lg-3 mil-mb-30">
                            <Link href={"/contact"} className="mil-button mil-up mil-fw">ارتباط با ما</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* contact info end */}
    </>
  );
};

export default ContactInfoSection;