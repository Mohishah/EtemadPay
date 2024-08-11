import PaginatedBlog from '@components/PaginatedBlog';
import Pagination from '@components/Pagination';

import Link from "next/link";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";
import PopularPosts from "@components/sections/PopularPosts";

export const metadata = {
  title: {
		default: "وبلاگ",
	},
  description: AppData.settings.siteDescription,
}

const Blog = async ()=> {
  const categories = await getCategory();
  const post = await getPost();

  return (
    <>
      <PageBanner pageTitle={"وبلاگ"} breadTitle={"وبلاگ"} bgImage={"/img/image/13-3.png"} />

      {/* blog */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened"></div>
              <div className="row justify-content-between">
                  <div className="col-lg-7">
                      <PopularPosts />

                      {/* filter */}
                      <div className="mil-filter mil-up mil-mb-90">
                          <div className="mil-filter-links">
                              <Link href="/blog" className="mil-current">همه</Link>
                              {categories.map((item, key) => (
                              <Link key={`categories-item-${key}`} href={`/blog/category/${item.id}`}><p>{item.title}</p></Link>
                              ))}
                          </div>
                      </div>
                      {/* filter end */}
                      
                      <PaginatedBlog
                        items={post.posts}
                      />

                  </div>
                  <div className="col-lg-5">

                      <Sidebar />

                  </div>
              </div>
          </div>
      </section>
      {/* blog end */}

      {/* pagination */}
      <div className="container mil-p-0-120">
          <div className="mil-background-grid mil-softened" />
          
          <Pagination
            currentPage={1}
            totalItems={post.total}
            perPage={3}
            renderPageLink={(id) => `/blog/page/${id}`}
          />
      </div>
      {/* pagination end */}
    </>
  );
};
export default Blog;

const getPost = async ()=>{
  const res = await fetch("http://127.0.0.1:8000/blog", {
    next:{
      revalidate:10
    }
  })
  const posts = await res.json()
  return posts
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

