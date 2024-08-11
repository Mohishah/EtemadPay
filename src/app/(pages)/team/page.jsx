import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import RecruitSection from "@components/sections/Recruit";

const TeamMasonry = dynamic( () => import("@components/TeamMasonry"), { ssr: false } );

export const metadata = {
  title: {
		default: "تیم ما",
	},
  description: AppData.settings.siteDescription,
}

const  Team = async ()=> {
  const team = await getTeamsService();
  const recruit = await getRecruitService();
  const category = await getCategoryService();
  
  return (
    <>
      <PageBanner pageTitle={"تیم ما"} breadTitle={"تیم ما"} bgImage={"/img/image/10-3.png"} />
         
      {/* team */}
      <section>
        <div className="container mil-p-120-60">
            <div className="mil-background-grid mil-softened" />

            <div className="mil-center">
                <p className="mil-text-lg mil-up mil-mb-90">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک </p>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <TeamMasonry team={team} categories={category} />
            </Suspense>
        </div>
      </section>
      {/* team end */}

      <RecruitSection recruit={recruit} />
    </>
  );
};
export default Team;

const getTeamsService = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/team" , {
    next:{
      revalidate: 10
    }
  })
  const team =await res.json()
  return team
}

const getRecruitService = async ()=>{
  const res = await fetch("http://127.0.0.1:8000/team/recruit",{
    next:{
      revalidate:10
    }
  })
  const recruit = await res.json()
  return recruit
}

const getCategoryService = async ()=>{
  const res = await fetch("http://127.0.0.1:8000/team/category",{
    next:{
      revalidate:10
    }
  })
  const category = await res.json()
  return category
}









