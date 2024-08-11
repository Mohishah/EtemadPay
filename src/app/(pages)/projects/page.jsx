import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";

const ProjectsMasonry = dynamic( () => import("@components/ProjectsMasonry"), { ssr: false } );


export const metadata = {
  title: {
		default: "نمونه کارها",
	},
  description: AppData.settings.siteDescription,
}

const Projects = async ()=> {
  const project = await getProjectService();
  const category = await getCategoryService();


  return (
    <>
      <PageBanner pageTitle={"مشاهده نمونه کارها"} breadTitle={"نمونه کارها"} bgImage={"/img/image/11-3.png"} />

      {/* portfolio */}
      <section>
        <div className="container mil-p-120-120">
          <div className="mil-background-grid mil-softened" />
          
          <div className="mil-center">
            <p className="mil-text-lg mil-up mil-mb-90">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <ProjectsMasonry project={project} categories={category} />
          </Suspense>
        </div>
      </section>
      {/* portfolio end */}
      
    </>
  );
};
export default Projects;

const getProjectService = async ()=>{
  const res = await fetch("http://127.0.0.1:8000/projects/" , {
    next:{
      revalidate:10
    }
  })
  const project = await res.json()
  return project
}

const getCategoryService = async ()=>{
  const res = await fetch("http://127.0.0.1:8000/projects/category",{
    next:{
      revalidate:10
    }
  })
  const category = await res.json()
  return category
}