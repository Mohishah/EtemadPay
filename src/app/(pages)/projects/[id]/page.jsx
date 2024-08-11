import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import PageBannerTwo from "@components/PageBannerTwo";
import BenefitsSection from "@components/sections/Benefits";
const FullImageSlider = dynamic( () => import("@components/sliders/FullImage"), { ssr: false } );

import Link from "next/link";

export async function generateMetadata({ params }) {
  const projectData = await getProjectService(params.id);
  
  return {
      title: projectData.title + " | نمونه کارها",
  }
}

const ProjectDetail = async ({ params })=> {
  const {id} = params  
  const projectData = await getProjectService(id);
  const allProject = await getAllProjectService();

  //prev next navigation
  let prev = { "id": 0, "key": 0 }
  let next = { "id": 0, "key": 0 }
  let first = { "id": 0 }
  let last = { "id": 0 }

  allProject.forEach(function(item, key){
    if ( item.id == projectData.id ) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  })

  allProject.forEach(function(item, key){
    if ( key == prev.key ) { prev.id = item.id; }
    if ( key == next.key ) { next.id = item.id; }
    if ( key == 0 ) { first.id = item.id; }
    if ( key == allProject.length-1 ) { last.id = item.id; }
  });

  if ( prev.key == -1 ) { prev.id = last.id; }
  if ( next.key == allProject.length ) { next.id = first.id; }

  return (
    <>
      <PageBannerTwo subTitle={projectData.intro.subtitle} title={projectData.intro.title} bgImage={projectData.intro.bgImage} />

      {/* description */}
      <section>
          <div className="container mil-p-120-90">
              <div className="mil-background-grid mil-softened" />

              <div className="row justify-content-between">
                  <div className="col-lg-4">

                      <div className="mil-mb-60">
                          <span className="mil-suptitle mil-upper mil-up mil-mb-90" dangerouslySetInnerHTML={{__html: projectData.description.title}} />
                          <h3 className="mil-upper mil-up mt-5 mil-mb-30" dangerouslySetInnerHTML={{__html: projectData.description.subtitle}} />
                      </div>

                  </div>
                  <div className="col-lg-7 mil-mt-suptitle-offset">
                      <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: projectData.description.content}} />
                      
                      {projectData.avatar != undefined &&
                      <div className="row">
                          <div className="col-lg-4">

                              <div className="mil-item-frame mil-up mil-mb-30">
                                  <div className="mil-about-counter mil-center">
                                      <div className="mil-avatar mil-mb-30">
                                          <img src={projectData.avatar.image} alt={projectData.avatar.name} />
                                      </div>
                                      <h5 className="mil-upper mil-mb-10">{projectData.avatar.name}</h5>
                                      <p className="mil-text-sm mil-dark-soft">{projectData.avatar.role}</p>
                                  </div>
                              </div>

                          </div>
                          <div className="col-lg-8">

                              <div className="mil-text mil-up mt-5 pt-5 mil-mb-30" dangerouslySetInnerHTML={{__html: projectData.avatar.text}} />
                              
                          </div>
                      </div>
                      }

                  </div>
              </div>
          </div>
      </section>
      {/* description end */}

      <div className="container">
          <div className="mil-divider-lg" />
      </div>

      {/* info */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened" />

              <div className="mil-mb-90">
                  <h2 className="mil-upper mil-up">معرفی</h2>
              </div>
              <div className="row mil-mb-30">
                  {projectData.details.map((item, key) => (
                  <div className="col-lg-3" key={`project-details-item-${key}`}>

                      <h6 className="mil-upper mil-up mil-mb-30">{item.label}</h6>
                      <ul className="mil-list mil-dark mil-up mil-mb-60">
                          <li>{item.value}</li>
                      </ul>

                  </div>
                  ))}
              </div>
          </div>
      </section>
      {/* info end */}

      <Suspense fallback={<div>Loading...</div>}>
        <FullImageSlider items={projectData.images} />
      </Suspense>
      
      <BenefitsSection />

      <div className="container">
          <div className="mil-divider-lg" />
      </div>

      {/* resume */}
      <section>
          <div className="container mil-p-120-90">
              <div className="row justify-content-between">
                  <div className="col-lg-6">

                      <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: projectData.resume.title}} />
                      <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html: projectData.resume.content}} />
                      
                      <div className="row align-items-center mil-up">
                          <div className="col-lg-4 mil-mb-30">
                              <h5 className="mil-upper mil-mb-10">{projectData.resume.name}</h5>
                              <p>{projectData.resume.role}</p>
                          </div>
                          <div className="col-lg-6 mil-mb-30">
                              <h6 className="mil-font-1 mil-thin">{projectData.resume.text}</h6>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-5 mil-mt-suptitle-offset">

                      <div className="mil-review-frame mil-mb-30" data-swiper-parallax-x="-200" data-swiper-parallax-opacity="0">
                          <div className="mil-reviev-head mil-up">
                              <div className="mil-left">
                                  <div className="mil-quote">
                                      <img src="/img/icons/12.svg" alt="icon" />
                                  </div>
                              </div>
                          </div>
                          <div className="mil-up">
                              <div className="mil-review-text">
                                  <h5 className="mil-font-1 mil-mb-30" dangerouslySetInnerHTML={{__html: projectData.resume.quote}} />
                                  {/* <h5 className="mil-font-1">{projectData.resume.author}</h5> */}
                              </div>

                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>
      {/* resume end */}

      <div className="container">
          <div className="mil-divider-lg" />
      </div>

      {/* next/prev project */}
      <section>
          <div className="container mil-p-120-60">
              <div className="row">
                  <div className="col-md-6 col-lg-6">
                      {prev.id != 0 &&
                      <div className="mil-prev-project mil-mb-60">
                          <h4 className="mil-upper mil-up mil-mb-30">نمونه کار قبلی</h4>
                          <Link href={`/projects/${prev.id}`} className="mil-link mil-left-link mil-upper mil-up">قبلی<span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                      </div>
                      }
                  </div>
                  <div className="col-md-6 col-lg-6">
                      {next.id != 0 &&
                      <div className="mil-next-project mil-mb-60">
                          <h4 className="mil-upper mil-up mil-mb-30">نمونه کار بعدی</h4>
                          <Link href={`/projects/${next.id}`} className="mil-link mil-upper mil-up">بعدی <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                      </div>
                      }
                  </div>
              </div>
          </div>
      </section>
      {/* next/prev project end */}

    </>
  );
};
export default ProjectDetail;

export async function generateStaticParams() {
    return [
        {id:'1'},
        {id:'2'},
        {id:'3'}
    ]
}

const getProjectService = async (id)=> {
    const res = await fetch(`http://127.0.0.1:8000/projects/${id}`,{
        next:{
            revalidate:10
        }
    })
    const projectData = await res.json();
    return projectData
}

const getAllProjectService = async ()=>{
    const res = await fetch("http://127.0.0.1:8000/projects/" , {
      next:{
        revalidate:10
      }
    })
    const allProject = await res.json()
    return allProject
}