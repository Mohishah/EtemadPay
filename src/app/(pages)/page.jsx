import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

const HeroOneSlider = dynamic( () => import("@components/sliders/HeroOne"), { ssr: false } );

import AboutTwoSection from "@components/sections/AboutTwo";
import IdeasSection from "@components/sections/Ideas";
import ServicesSection from "@components/sections/Services";
import AdvantagesSection from "@components/sections/Advantages";
import LatestProjectsSection from "@components/sections/LatestProjects";
import HowWeWorkSection from "@components/sections/HowWeWork";
import LatestPostsSection from "@components/sections/LatestPosts";
import CoresSection from "@components/sections/Cores";


export const metadata = {
  title: {
		default: AppData.settings.siteName,
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home1() {
  const posts = await getPost();
  const projects = await getProjectService();
  const hero = await getHero();
  const about = await getAbout();
  const Idea = await getIdea();
  const service = await getService();
  const advantage = await getAdvantage();
  const work = await getWork();
  const core = await getCore();

  return (
    <>
      <HeroOneSlider hero={hero} />
      <AboutTwoSection about={about} />
      <IdeasSection Idea={Idea} />
      <ServicesSection service={service} />
      <AdvantagesSection advantage={advantage} />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestProjectsSection projects={projects} />
      </Suspense>
      <HowWeWorkSection work={work} />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <CoresSection core={core} />
    </>
  );
};
export default Home1;

const getPost = async ()=>{
  const res = await fetch("http://127.0.0.1:8000/blog", {
    next:{
      revalidate:10
    }
  })
  const posts = await res.json()
  return posts
}

const getProjectService = async ()=>{
  const res = await fetch("http://127.0.0.1:8000/projects/" , {
    next:{
      revalidate:10
    }
  })
  const projects = await res.json()
  return projects
}

const getHero = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/home/hero" , {
    next:{
      revalidate: 10
    }
  })
  const hero =await res.json()
  return hero
}

const getAbout = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/home/about" , {
    next:{
      revalidate: 10
    }
  })
  const about =await res.json()
  return about
}

const getIdea = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/home/idea" , {
    next:{
      revalidate: 10
    }
  })
  const Idea =await res.json()
  return Idea
}

const getService = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/home/service" , {
    next:{
      revalidate: 10
    }
  })
  const service =await res.json()
  return service
}

const getAdvantage = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/home/advantage" , {
    next:{
      revalidate: 10
    }
  })
  const advantage =await res.json()
  return advantage
}

const getWork = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/home/work" , {
    next:{
      revalidate: 10
    }
  })
  const work =await res.json()
  return work
}

const getCore = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/home/core" , {
    next:{
      revalidate: 10
    }
  })
  const core =await res.json()
  return core
}





