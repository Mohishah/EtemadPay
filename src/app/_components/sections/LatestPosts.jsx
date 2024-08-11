import Link from "next/link";
import Date from "../../_lib/date";

const LatestPostsSection = ( { posts, paddingTop } ) => {
    
    return (
        <>
            {/* blog */}
            <section>
                <div className={paddingTop ? "container mil-p-120-60" : "container mil-p-0-60"}>
                    <div className="mil-background-grid mil-softened" />

                    <div className="row">
                        <div className="col-12">

                            <div className="mil-center mil-mb-90">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : "وبلاگ"}} />
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : "آخرین مقالات"}} />
                            </div>

                        </div>
                        {posts.posts.slice(0, 2).map((item, key) => (
                        <div className="col-lg-6" key={`blog-post-${key}`}>

                            <Link href={`/blog/${item.id}`} className="mil-blog-card mil-mb-60">
                                <div className="mil-cover mil-up mil-long">
                                    <img src={item.image} alt={item.title} />
                                    <div className="mil-date"><Date dateString={item.date} /></div>
                                </div>
                                <div className="mil-description">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">{item.categories[0].title}</span>
                                    <h4 className="mil-upper mil-up mil-mb-30">{item.title}</h4>
                                    <p className="mil-up">{item.quote}</p>
                                </div>
                            </Link>

                        </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* blog end */}
        </>
    );
};

export default LatestPostsSection;