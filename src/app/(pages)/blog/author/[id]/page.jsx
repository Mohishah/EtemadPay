
import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";
import PaginatedBlog from '@components/PaginatedBlog';

export async function generateMetadata({ params }) {
  const authorData = await getPosts(params.id);
  
  return {
    title: authorData.author.fullname + " | نویسنده | وبلاگ",
  }
}

async function BlogAuthor( { params } ) {
  const {id} = params    
  const posts = await getPosts(id);

  return (
    <>
      
      <PageBanner pageTitle={posts.author.fullname} breadTitle={posts.author.fullname} bgImage={"/img/image/13-3.png"} />
      
      {/* blog */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened"></div>
              <div className="row justify-content-between">
                  <div className="col-lg-7">

                      
                      <PaginatedBlog
                        items={posts.posts}
                      />

                  </div>
                  <div className="col-lg-5">

                      <Sidebar />

                  </div>
              </div>
          </div>
      </section>
      {/* blog end */}

    </>
  );
};
export default BlogAuthor;

export async function generateStaticParams() {
    return [
        {id:'1'},
        {id:'2'},
        {id:'3'}
    ]
}

const getPosts = async ( id ) => {
    const res = await fetch(`http://127.0.0.1:8000/blog/author/${id}`, {
        next:{
          revalidate:10
        }
    })
    const posts = await res.json()
    return posts
}