
import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";
import PaginatedBlog from '@components/PaginatedBlog';


export async function generateMetadata({ params }) {
  const tagData = await getPosts(params.id);
  
  return {
    title: tagData.tag.title + " | وبلاگ",
  }
}

async function BlogTag( { params } ) {
  const {id} = params  
  const posts = await getPosts(id);

  return (
    <>
      
      <PageBanner pageTitle={posts.tag.title} breadTitle={posts.tag.title} bgImage={"/img/image/13-3.png"} />
      
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
export default BlogTag;

export async function generateStaticParams() {
  return [
      {id:'1'},
      {id:'2'},
      {id:'3'}
  ]
}

const getPosts = async ( id ) => {
  const res = await fetch(`http://127.0.0.1:8000/blog/tag/${id}`, {
      next:{
        revalidate:10
      }
  })
  const posts = await res.json()
  return posts
}