"use client";

import Link from "next/link";
import Date from '@library/date';

import { useSearchParams } from 'next/navigation'

async function FilteredBlogPosts( { posts } ) {
    const searchParams = useSearchParams()
    const query = searchParams.get('key')


    let searchResults = posts.filter((post) => {
        if (post.title.includes(query)) {
            return post;
        } else if (post.tag[0].title.includes(query)) {
            return post;
        } else if (post.categories[0].title.includes(query)) {
            return post;
        } else if (post.quote.includes(query)) {
            return post;
        } else if (post.text1.includes(query)) {
            return post;
        } else if (post.text2.includes(query)) {
            return post;
        }
    });

    return (
        <>
            { searchResults.length > 0 ? (
                <>
                    {searchResults.map((item, index) => (
                    <Link href={`/blog/${item.id}`} className="mil-blog-card mil-mb-60" key={`blog-post-${index}`}>
                        <div className="mil-cover mil-square mil-up">
                            <img src={item.image} alt={item.title} />
                            <div className="mil-date"><Date dateString={item.date}/></div>
                        </div>
                        <div className="mil-description">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30">{item.categories[0].title}</span>
                            <h4 className="mil-upper mil-up mil-mb-30">{item.title}</h4>
                            <p className="mil-up mil-mb-30">{item.quote}</p>
                            <span className="mil-link mil-upper mil-up">مشاهده<span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></span>
                        </div>
                    </Link>
                    ))}
                </> ) : 
                (<h4 className="mil-upper mil-up mil-mb-30">چیزی یافت نشد</h4>)
            }
        </>
    );
};
export default FilteredBlogPosts;