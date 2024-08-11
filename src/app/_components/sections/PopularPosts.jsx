import Date from '@library/date';
import Link from "next/link";

const PopularPostsSection = async ( ) => {

    const popular = await getPopularPost()

    const text1 = popular.text1
    const short = text1.slice(0,80)
    
    return (
        <>
            {/* popular */}
            <Link href={`/blog/${popular.id}`} className="mil-blog-card mil-lg-card mil-mb-60">
                <div className="mil-cover mil-long mil-up">
                    <img src={popular.image} alt={popular.title} />
                    <div className="mil-date"><Date dateString={popular.date} /></div>
                </div>
                <div className="mil-description">
                    <div className="mil-right-side">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">{popular.categories[0].title}</span>
                        <h4 className="mil-upper mil-up mil-mb-30">{popular.title}</h4>
                    </div>
                    <div className="mil-left-side mil-mt-suptitle-offset">
                        <p className="mil-up mil-mb-30">{short} ...</p>
                        <span className="mil-link mil-upper mil-up">مشاهده بیشتر<span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></span>
                    </div>
                </div>
            </Link>
            {/* popular end */}
        </>
    );
};

export default PopularPostsSection;


const getPopularPost = async ()=>{
  const res = await fetch("http://127.0.0.1:8000/blog/popular", {
    next:{
      revalidate:10
    }
  })
  const popular = await res.json()
  return popular
}