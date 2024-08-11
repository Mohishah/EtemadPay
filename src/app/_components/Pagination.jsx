import Link from "next/link";
import usePagination from '@library/usePagination.js'

export const dotts = '...'

const Pagination = ({ currentPage, totalItems, perPage, renderPageLink }) => {
    const pages = usePagination(totalItems, currentPage, perPage)
    console.log(pages)

    return (
        <>
        {/* pagination */}
        <div className="mil-pagination mil-up">
            <div className="mil-nav-buttons">
                {currentPage > 1 &&
                <Link key="pagination-item-prev" href={currentPage > 1 ? renderPageLink( currentPage - 1 ) : renderPageLink( currentPage )} className="mil-slider-button mil-banner-prev">قبلی</Link>
                }
                {currentPage <= 1 &&
                <div key="pagination-item-prev" className="mil-slider-button mil-banner-prev swiper-button-disabled">قبلی</div>
                }

                {currentPage < pages.length &&
                <Link key="pagination-item-next" href={currentPage < pages.length ? renderPageLink( parseInt(currentPage,10) + 1 ) : renderPageLink( currentPage )} className="mil-slider-button mil-banner-next">بعدی</Link>
                }
                {currentPage == pages.length &&
                <div key="pagination-item-next" className="mil-slider-button mil-banner-next swiper-button-disabled">بعدی</div>
                }
            </div>
            <ul className="mil-page-numbers">
                {pages.map((pageNumber, i) =>
                    pageNumber === dotts ? (
                    <li key={`pagination-item-${i}`}>
                        <span className="mil-pagination-text">
                            {pageNumber}
                        </span>
                    </li>
                    ) : (
                    <li key={`pagination-item-${i}`} className={`${pageNumber == currentPage ? 'mil-active' : ''}`}>
                        <Link href={renderPageLink(pageNumber)}>
                            {pageNumber}
                        </Link>
                    </li>
                    )
                )}
            </ul>
        </div>
        {/* pagination end */}
        </>
    );
};
export default Pagination;