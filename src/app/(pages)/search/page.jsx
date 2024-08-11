import FilteredBlog from '@components/FilteredBlog';

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";


export const metadata = {
  title: {
		default: "جستجو",
	},
  description: AppData.settings.siteDescription,
}

async function Search() {

  const posts = await getPost()

  return (
    <>
      <PageBanner pageTitle={"جستجو : %s"} breadTitle={"نتایح جستجو"} bgImage={"/img/image/13-3.png"} />

      {/* blog */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened"></div>
              <div className="row justify-content-between">
                  <div className="col-lg-7">
                      
                      <FilteredBlog posts={posts} />

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
export default Search;

const getPost = async ()=>{
  const res = await fetch("http://127.0.0.1:8000/blog/liver", {
    next:{
      revalidate:10
    }
  })
  const posts = await res.json()
  return posts
}