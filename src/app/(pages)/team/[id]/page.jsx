
import React from "react";

export async function generateMetadata({ params }) {
    const teamData = await getTeamsService(params.id);

    return {
        title: teamData.name + " | تیم ما",
    }
}

const TeamDetail = async ( { params } )=> {
  const {id} = params  
  const teamData = await getTeamsService(id);

  return (
    <>
      {/* team member */}
      <section className="mil-soft-bg mil-team-member-wrapper">
        <div className="container mil-p-0-120">
            <div className="mil-team-member-frame">
                <div className="mil-left-side">
                    <div className="mil-member-portrait">
                        <img src={teamData.fullImage} alt={teamData.name} />
                    </div>
                </div>
                <div className="mil-left-side">

                    <div className="mil-p-30-30">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">{teamData.role}</span>
                        <h3 className="mil-upper mil-up mil-mb-30">{teamData.name}</h3>

                        <ul className="mil-list mil-dark mil-up mil-mb-30">
                            {teamData.info.map((item, key) => (
                            <li key={`team-membre-info-item-${key}`}>{item.name}</li>
                            ))}
                        </ul>

                        <ul className="mil-hori-list mil-dark mil-up mil-mb-30">
                            {teamData.social.map((item, key) => (
                            <li key={`team-social-item-${key}`}><a href={item.link} target="_blank">{item.name}</a></li>
                            ))}
                        </ul>
                        <div className="mil-divider-lg mil-up mil-mb-30" />
                        <div className="mil-up mil-text mil-text-sm mil-mb-30" dangerouslySetInnerHTML={{__html: teamData.description}} />
                        <h2 className="mil-font-2 mil-thin mil-up">{teamData.signature}</h2>
                    </div>

                </div>
            </div>

        </div>
      </section>
      {/* team member end */}
    </>
  );
};
export default TeamDetail;

export async function generateStaticParams() {
    return [
        {id:'1'},
        {id:'2'},
        {id:'3'}
    ]
}


const getTeamsService = async (id)=> {
    const res = await fetch(`http://127.0.0.1:8000/team/${id}`,{
        next:{
            revalidate:10
        }
    })
    const teamData = await res.json();
    return teamData
}


