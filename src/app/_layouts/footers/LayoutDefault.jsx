"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';

const DefaultFooter = ({social , address}) => {
  const asPath = usePathname();

  return (
    <>
    {/* footer */}
    <footer className="mil-relative">
        <img src="/img/image/13-4.png" className="mil-bg-img mil-parallax" alt="image" style={{"objectPosition": "top"}} data-value-1="-25%" data-value-2="23%" />

        <div className="mil-overlay" />
        <div className="container mil-p-120-90">
            <div className="mil-background-grid" />

            <div className="row align-items-end">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-12">

                            <div className="mil-footer-navigation mil-up mil-mb-90">
                                <nav>
                                    <ul>
                                        {AppData.footer.menu.map((item, key) => (
                                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active" : ""}>
                                            <Link href={item.link}>{item.label}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                        </div>
                        {address.addresses.map((items , key) => (
                            <div className="col-md-16 col-lg-16 col-xl-6" key={`esswas${key}`}>
                                <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">تهران</span>
                                <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">{items.address}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="col-lg-4">
                    <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
                        <img src={AppData.footer.logo.image} alt={AppData.footer.logo.alt} style={{"width": "130px"}} />
                    </Link>
                </div>
            </div>
        </div>
        <div className="container-fluid">

            <div className="mil-footer-bottom">
                <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
                <ul className="mil-light-soft mil-mb-15">
                    {social.socials.map((item, key) => (
                    <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank">{item.name}</a></li>
                    ))}
                </ul>
                <ul className="mil-light-soft mil-mb-15">
                    <li><a href="https://alvandtechnology.com/">Alvand Technology</a></li>
                </ul>
            </div>

        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
