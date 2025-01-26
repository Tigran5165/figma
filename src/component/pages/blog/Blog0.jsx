import { blog1Array } from "../../../entities/blog1Array";
import { blogArray } from "../../../entities/blogArray";
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
export default function Blog0() {
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = blog1Array.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blog1Array.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blog1Array.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    }
    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item, i) => (
                        <div key={i} className="flex flex-row gap-10">
                            <img src={item.img} alt="" />
                            <div className="flex flex-col gap-3">
                                <div>
                                    <p className="font-inter text-[24px]">{item.name}</p>
                                    <p className="font-inter opacity-[60%]">{item.desc}</p>
                                </div>
                                <div className="flex flex-row items-center gap-5 w-full ">
                                    <div className="flex flex-row items-center gap-3">
                                        <img src={item.profImg} alt="" />
                                        <p className="font-inter">{item.prof}</p>
                                    </div>
                                    <hr className="w-[1px] h-full bg-[#0000001A]" />
                                    <p className="font-inter opacity-[60%] w-max">{item.date}</p>

                                </div>
                            </div>

                        </div>
                    ))}
            </>
        );
    }

    return (
        <main>
            <div className="grid grid-cols-[1fr_32.5%] gap-20 py-10 px-20 ">
                <div className="flex flex-col gap-7">
                    <Items currentItems={currentItems} />
                </div>
                <div className={'flex flex-col justify-start gap-10'}>
                    <div className="flex flex-col gap-7">
                        <p className=" text-[32px] font-inter">Other Recipe</p>
                        {blogArray.map((item, i) => (
                            <div key={i} className="flex flex-row gap-4">
                                <img src={item.img} alt="" className="rounded-lg " />
                                <div className="flex flex-col gap-2">
                                    <p className="text-[20px]  font-inter">{item.name}</p>
                                    <p className="text-[14px] font-inter opacity-[60%]">{item.categories}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img src="/images/img9.svg" alt="" />
                </div>
            </div>
            <ReactPaginate
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel={<button>{'<'}</button>}
                nextLabel={<button>{'>'}</button>}
                breakLabel="..."
                pageRangeDisplayed={5}
                renderOnZeroPageCount={null}
                className="pagination"
                pageClassName="pagination__item"
                pageLinkClassName="pagination__link"
                activeLinkClassName="pagination__link--active"
                previousClassName="pagination__previous"
                nextClassName="pagination__next"
            />

        </main>
    )
}