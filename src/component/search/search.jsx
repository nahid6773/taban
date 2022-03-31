import React, { Fragment } from 'react';


const Search = () => {
    return ( 
        <Fragment>
             {/* <!-- search-container --> */}
    <div className="search-container ">
        <div className="searchbars container">
            <div className="search-title">:مناقصه های درحال برگزاری</div>
            <div className="search-btngroup">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-select">انتخاب مقصد</button>
                    <button type="button" className="btn select"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                            height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                            <path
                                d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                        </svg></button>
                </div>
            </div>
            <div className="search-kon"> <button className="btn btn-search">جستجو کن</button></div>
        </div>
    </div>

    <div className="baner">
        <img src="img/image1.png" alt=""/>
    </div>
        </Fragment>
     );
}
 
export default Search;