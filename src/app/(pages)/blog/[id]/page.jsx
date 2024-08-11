
import Date from '@library/date';
import Link from "next/link";

import PageBannerTwo from "@components/PageBannerTwo";
import Sidebar from "@components/Sidebar";
import Share from '@/src/app/_components/share';
import ReplyForm from '@/src/app/_components/ReplyForm';


export async function generateMetadata({ params }) {
    const postData = await getSinglePost(params.id);
    
    return {
      title: postData.posts.title,
    }
}

async function PostsDetail( { params } ) {
  const {id} = params  
  const singlePost = await getSinglePost(id);

  return (
    <>
      <PageBannerTwo title={singlePost.posts.title} subTitle={singlePost.posts.categories[0].title} bgImage={singlePost.posts.image} />
      
      {/* blog */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened" />

              <div className="row justify-content-between">
                  <div className="col-lg-7">

                      <div className="mil-publication">
                          <ul className="mil-post-top mil-list mil-dark mil-mb-30">
                              <li className="mil-text-sm mil-up mil-mb-10"><img src={singlePost.posts.author.avatar} alt={singlePost.posts.author.fullname} className="mil-pub-author" /> {singlePost.posts.author.fullname}</li>
                              <li className="mil-text-sm mil-up mil-mb-10">
                                <span className="mil-additional-text mil-text-sm mil-upper"><Date dateString={singlePost.posts.date} /></span>
                              </li>
                          </ul>
                        
                          <span className="mil-suptitle mil-upper mil-up mil-mb-30">{singlePost.posts.categories[0].title}</span>
                          <h4 className="mil-upper mil-up mil-mb-30">{singlePost.posts.title}</h4>


                          <div className="mil-text mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : singlePost.posts.text1}} />

                          <div className="mil-blog-card mil-lg-card mil-mb-60">
                            <div className="mil-cover mil-long mil-up">
                                <img src={singlePost.posts.image} alt={singlePost.posts.title} />
                            </div>
                          </div>  
                          
                          <div className="mil-text mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : singlePost.posts.text2}} />

                          
                          <div className="mil-divider-lg mil-mb-40"></div>

                          <div className="row">
                              {typeof singlePost.posts.tag != "undefined" &&
                              <div className="col-lg-6">
                                  <div className="row">
                                      <div className="col-lg-4">
                                          <h6 className="mil-upper mil-up mil-mb-30">کلمات کلیدی :</h6>
                                      </div>
                                      <div className="col-lg-8">
                                          <ul className="mil-list mil-dark mil-up mil-mb-30">
                                            {singlePost.posts.tag.map((item, key) => (
                                              <li className="mil-text-sm" key={`post-tag-item-${key}`}><Link href={`/blog/tag/${item.title}`}>{item.title}</Link></li>
                                            ))}
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              }
                              <div className="col-lg-6">
                                  <div className="row">
                                      <div className="col-lg-4">
                                          <h6 className="mil-upper mil-up mil-mb-30">اشتراک گذاری :</h6>
                                      </div>
                                      <div className="col-lg-8">
                                          <ul className="mil-list mil-dark mil-up mil-mb-30 ">
                                            <Share myId={id} title={singlePost.posts.title}/>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>


                      </div>

                  </div>
                  <div className="col-lg-5">

                    <Sidebar />

                  </div>
              </div>
          </div>
      </section>
      {/* blog end */}

      {/* reply form */}
      <section className="mil-soft-bg mil-relative">
        <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />

        <div className="container mil-p-120-90">
            <div className="mil-background-grid mil-softened" />
      
            <ReplyForm id={id}/>
        </div>

      </section>


      {/* reply form end */}

      {/* comments */}
      <section>
          <div className="container mil-p-120-90">
              <div className="mil-background-grid mil-softened" />

              <div className="row">
                  <div className="col-lg-7">
                      
                      <h3 className="mil-upper mil-mb-60">نظرات شما</h3>

                      <ul className="mil-comments">
                        {singlePost.comment.map((item, key) => (
                        <li key={`comments${key}`}>
                            <div className={`mil-comment ${item.parent == null  ? '' : 'me-5'}`}>
                                <div className="mil-comment-head">
                                    <div className="mil-user-info">
                                        <img src="/img/image/11-1.png" alt="portrait" className="mil-user-avatar" />
                                        <div>
                                            <h6 className="mil-upper mil-mb-5 me-4">{item.name}</h6>
                                            <span className="mil-text-sm mil-dark-soft me-4"><Date dateString={item.created}/></span>
                                        </div>
                                    </div>
                                </div>
                                <p className="me-4">{item.body}</p>
                            </div>
                        </li>
                        ))}
                      </ul>

                  </div>
              </div>
          </div>
      </section>
      {/* comments end */}
    </>
  );
};
export default PostsDetail;

export async function generateStaticParams() {
    return [
        {id:'1'},
        {id:'2'},
        {id:'3'}
    ]
}

const getSinglePost = async (id)=> {
    const res = await fetch(`http://127.0.0.1:8000/blog/${id}`,{
        next:{
            revalidate:10
        }
    })
    const singlePost = await res.json();
    return singlePost
}
