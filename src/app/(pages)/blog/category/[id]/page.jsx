import Link from "next/link";

import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";
import PaginatedBlog from '@components/PaginatedBlog';

export async function generateMetadata({ params }) {
  const categoryData = await getPosts(params.id);

  return {
    title: categoryData.category.title + " | وبلاگ",
  }
}

async function BlogCategory( { params } ) {
  const {id} = params  
  const categories = await getCategory();
  const posts = await getPosts(id);

  return (
    <>
      
      <PageBanner pageTitle={posts.category.title} breadTitle={posts.category.title} bgImage={"/img/image/13-3.png"} />
      
      {/* blog */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened"></div>
              <div className="row justify-content-between">
                  <div className="col-lg-7">
                      {/* filter */}
                      <div className="mil-filter mil-up mil-mb-90">
                          <div className="mil-filter-links">
                              <Link href="/blog">همه</Link>
                              {categories.map((item, key) => (
                              <Link key={`categories-item-${key}`} href={`/blog/category/${item.id}`} className={item.id == posts.category.id ? "mil-current": ""}><p>{item.title}</p></Link>
                              ))}
                          </div>
                      </div>
                      {/* filter end */}
                      
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
export default BlogCategory;

export async function generateStaticParams() {
    return [
        {id:'1'},
        {id:'2'},
        {id:'3'}
    ]
}

const getCategory = async ()=>{
    const res = await fetch("http://127.0.0.1:8000/blog/category", {
      next:{
        revalidate:10
      }
    })
    const categories = await res.json()
    return categories
}

const getPosts = async ( id ) => {
    const res = await fetch(`http://127.0.0.1:8000/blog/category/${id}`, {
        next:{
          revalidate:10
        }
    })
    const posts = await res.json()
    return posts
}