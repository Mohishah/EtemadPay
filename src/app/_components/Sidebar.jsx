import { Suspense } from "react";

import Link from "next/link";
import Date from '@library/date';

import SearchBarModule from '@components/SearchBar';

async function Sidebar() {
  const posts = await getPost();
  const tags = await getTag();
  const author = await getAuthor();
  const social = await getSocial();


  return (
    <>
        {/* sidebar */}
        <div className="mil-sidebar-frame">

            <h6 className="mil-upper mil-up mil-mb-30">ایمیل ما :</h6>

            <ul className="mil-list mil-dark mil-up mil-mb-30">
            {social.email.map((item, key) => (
              <li className="mil-text-sm" key={`sidebar-social-item-${key}`}>{item.email}</li>
            ))}
            </ul>

            <Suspense fallback={<div>Loading...</div>}>
                <SearchBarModule />
            </Suspense>
            
            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <h6 className="mil-upper mil-up mil-mb-30"> آخرین مطالب :</h6>
            <ul className="mil-list mil-list-type-2 mil-dark mil-up mil-mb-30">
                {posts.posts.slice(0, 4).map((item, key) => (
                <li key={`sidebar-posts-item-${key}`}>
                    <div className="mil-text-sm mil-mb-10"><Link href={`/blog/${item.id}`}>{item.title}</Link></div>
                    <div className="mil-additional-text mil-text-xs mil-upper mil-mb-15"><Date dateString={item.date} /></div>
                </li>
                ))}
            </ul>

            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <h6 className="mil-upper mil-up mil-mb-30">کلمات کلیدی :</h6>
            <ul className="mil-list mil-dark mil-up mil-mb-30">
                {tags.map((item, key) => (
                <li className="mil-text-sm" key={`sidebar-tags-item-${key}`}>
                    <Link href={`/blog/tag/${item.id}`}>{item.title}</Link>
                </li>
                ))}
            </ul>

            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <h6 className="mil-upper mil-up mil-mb-30">نویسندگان :</h6>
            <ul className="mil-list mil-dark mil-mb-30">
                {author.map((item, key) => (
                <li className="mil-text-sm mil-up mil-mb-10" key={`sidebar-author-item-${key}`}>
                    <img src={item.avatar} alt={item.fullname} className="mil-pub-author" />
                    <Link href={`/blog/author/${item.user}`}>{item.fullname}</Link>
                </li>
                ))}
            </ul>

            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <h6 className="mil-upper mil-up mil-mb-30">شبکه های اجتماعی :</h6>

            <ul className="mil-list mil-dark mil-up">
                {social.socials.map((item, key) => (
                <li className="mil-text-sm" key={`sidebar-social-item-${key}`}><a href={item.link} target="_blank">{item.name}</a></li>
                ))}
            </ul>

        </div>
        {/* sidebar end */}
    </>
  );
};
export default Sidebar;

const getTag = async ()=>{
    const res = await fetch("http://127.0.0.1:8000/blog/tag", {
      next:{
        revalidate:10
      }
    })
    const tags = await res.json()
    return tags
}

const getAuthor = async ()=>{
    const res = await fetch("http://127.0.0.1:8000/blog/author", {
      next:{
        revalidate:10
      }
    })
    const author = await res.json()
    return author
}

const getPost = async ()=>{
    const res = await fetch("http://127.0.0.1:8000/blog", {
      next:{
        revalidate:10
      }
    })
    const posts = await res.json()
    return posts
}

const getSocial = async ()=>{
  const res = await fetch("http://127.0.0.1:8000/blog/social", {
    next:{
      revalidate:10
    }
  })
  const social = await res.json()
  return social
}
