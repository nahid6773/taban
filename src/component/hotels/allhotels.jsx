import React, { Fragment } from 'react'

const Allhotels = () => {
    return (  
        <Fragment>
                    
            {/* <!-- offers --> */}
    <div className="offer-title">
        <p>مناقصه های در حال برگزاری</p>
    </div>
    <div className="container">
        <div className="Hotel-containers">
            {/* <!-- hotel-item1 --> */}
            <div className="hotel-item">
                <div className="hotel-title">
                    <div className="hotel-subtitle">
                        <h3 className="title"> اسپیناس پالاس</h3>
                        <p className="sub-title">تهران</p>
                    </div>
                    <div className="hotel-timer">
                        <span className="timer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-alarm" viewBox="0 0 16 16">
                                <path
                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path
                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                        </span>
                        <span>ساعت 5</span>
                    </div>
                </div>
                <div className="hotel-img">
                    <img src="img/Path1.png" alt=""/>
                </div>
                <span className="price-hotel">3 میلیون <br/>قیمت پایه</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-caret-down-fill icon-arrow" viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>

                <div className="hotel-footer">
                    <a href="" className="btn-more-H"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill  icon-more" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>توضیحات بیشتر</a>
                    <a href="" className="btn btn-send-H"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>ارسال پیشنهاد</a>
                </div>
            </div>
            {/* <!-- hotel-item2 --> */}
            <div className="hotel-item">
                <div className="hotel-title">
                    <div className="hotel-subtitle">
                        <h3 className="title">داریوش </h3>
                        <p className="sub-title">کیش</p>
                    </div>
                    <div className="hotel-timer">
                        <span className="timer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-alarm" viewBox="0 0 16 16">
                                <path
                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path
                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                        </span>
                        <span>ساعت 5</span>
                    </div>
                </div>
                <div className="hotel-img">
                    <img src="img/path6.png" alt=""/>
                </div>
                <span className="price-hotel">3 میلیون <br/>قیمت پایه</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-caret-down-fill icon-arrow" viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                <div className="hotel-footer">
                    <a href="" className="btn-more-H"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill  icon-more" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>توضیحات بیشتر</a>
                    <a href="" className="btn btn-send-H"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>ارسال پیشنهاد</a>
                </div>
            </div>
            {/* <!-- hotel-item3 --> */}
            <div className="hotel-item">
                <div className="hotel-title">
                    <div className="hotel-subtitle">
                        <h3 className="title">درویشی </h3>
                        <p className="sub-title">مشهد</p>
                    </div>
                    <div className="hotel-timer">
                        <span className="timer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-alarm" viewBox="0 0 16 16">
                                <path
                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path
                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                        </span>
                        <span>ساعت 5</span>
                    </div>
                </div>
                <div className="hotel-img">
                    <img src="img/path2.png" alt=""/>
                </div>
                <span className="price-hotel">3 میلیون <br/>قیمت پایه</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-caret-down-fill icon-arrow" viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                <div className="hotel-footer">
                    <a href="" className="btn-more-H"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill  icon-more" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>توضیحات بیشتر</a>
                    <a href="" className="btn btn-send-H"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>ارسال پیشنهاد</a>
                </div>
            </div>
            {/* <!-- hotel-item4 --> */}
            <div className="hotel-item">
                <div className="hotel-title">
                    <div className="hotel-subtitle">
                        <h3 className="title">متل قو </h3>
                        <p className="sub-title">چالوس</p>
                    </div>
                    <div className="hotel-timer">
                        <span className="timer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-alarm" viewBox="0 0 16 16">
                                <path
                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path
                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                        </span>
                        <span>ساعت 5</span>
                    </div>
                </div>
                <div className="hotel-img">
                    <img src="img/path 3.png" alt=""/>
                </div>
                <span className="price-hotel">3 میلیون <br/>قیمت پایه</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-caret-down-fill icon-arrow" viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                <div className="hotel-footer">
                    <a href="" className="btn-more-H"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill  icon-more" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>توضیحات بیشتر</a>
                    <a href="" className="btn btn-send-H"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>ارسال پیشنهاد</a>
                </div>
            </div>
            {/* <!-- hotel-item5 --> */}
            <div className="hotel-item">
                <div className="hotel-title">
                    <div className="hotel-subtitle">
                        <h3 className="title"> ترنج</h3>
                        <p className="sub-title">کیش</p>
                    </div>
                    <div className="hotel-timer">
                        <span className="timer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-alarm" viewBox="0 0 16 16">
                                <path
                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path
                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                        </span>
                        <span>ساعت 5</span>
                    </div>
                </div>
                <div className="hotel-img">
                    <img src="img/path4.png" alt=""/>
                </div>
                <span className="price-hotel">3 میلیون <br/>قیمت پایه</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-caret-down-fill icon-arrow" viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                <div className="hotel-footer">
                    <a href="" className="btn-more-H"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi  bi-caret-left-fill  icon-more" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>توضیحات بیشتر</a>
                    <a href="" className="btn btn-send-H"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>ارسال پیشنهاد</a>
                </div>
            </div>
            {/* <!-- hotel-item6 --> */}
            <div className="hotel-item">
                <div className="hotel-title">
                    <div className="hotel-subtitle">
                        <h3 className="title"> قصر</h3>
                        <p className="sub-title">شاهرود</p>
                    </div>
                    <div className="hotel-timer">
                        <span className="timer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-alarm" viewBox="0 0 16 16">
                                <path
                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path
                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                        </span>
                        <span>ساعت 5</span>
                    </div>
                </div>
                <div className="hotel-img">
                    <img src="img/path5.png" alt=""/>
                </div>
                <span className="price-hotel">3 میلیون <br/>قیمت پایه</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-caret-down-fill icon-arrow" viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                <div className="hotel-footer">
                    <a href="" className="btn-more-H"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill icon-more" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>توضیحات بیشتر</a>
                    <a href="" className="btn btn-send-H"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>ارسال پیشنهاد</a>
                </div>
            </div>
            {/* <!-- hotel-item7--> */}
            <div className="hotel-item">
                <div className="hotel-title">
                    <div className="hotel-subtitle">
                        <h3 className="title"> قصر</h3>
                        <p className="sub-title">شاهرود</p>
                    </div>
                    <div className="hotel-timer">
                        <span className="timer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-alarm" viewBox="0 0 16 16">
                                <path
                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path
                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                        </span>
                        <span>ساعت 5</span>
                    </div>
                </div>
                <div className="hotel-img">
                    <img src="img/path5.png" alt=""/>
                </div>
                <span className="price-hotel">3 میلیون <br/>قیمت پایه</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-caret-down-fill icon-arrow" viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                <div className="hotel-footer">
                    <a href="" className="btn-more-H"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill icon-more" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>توضیحات بیشتر</a>
                    <a href="" className="btn btn-send-H"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>ارسال پیشنهاد</a>
                </div>
            </div>
            {/* <!-- hotel-item8--> */}
            <div className="hotel-item">
                <div className="hotel-title">
                    <div className="hotel-subtitle">
                        <h3 className="title"> قصر</h3>
                        <p className="sub-title">شاهرود</p>
                    </div>
                    <div className="hotel-timer">
                        <span className="timer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-alarm" viewBox="0 0 16 16">
                                <path
                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path
                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                        </span>
                        <span>ساعت 5</span>
                    </div>
                </div>
                <div className="hotel-img">
                    <img src="img/path5.png" alt=""/>
                </div>
                <span className="price-hotel">3 میلیون <br/>قیمت پایه</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-caret-down-fill icon-arrow" viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                <div className="hotel-footer">
                    <a href="" className="btn-more-H"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill icon-more" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>توضیحات بیشتر</a>
                    <a href="" className="btn btn-send-H"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>ارسال پیشنهاد</a>
                </div>
            </div>
            {/* <!-- hotel-item9 --> */}
            <div className="hotel-item">
                <div className="hotel-title">
                    <div className="hotel-subtitle">
                        <h3 className="title"> قصر</h3>
                        <p className="sub-title">شاهرود</p>
                    </div>
                    <div className="hotel-timer">
                        <span className="timer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-alarm" viewBox="0 0 16 16">
                                <path
                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path
                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                        </span>
                        <span>ساعت 5</span>
                    </div>
                </div>
                <div className="hotel-img">
                    <img src="img/path5.png" alt=""/>
                </div>
                <span className="price-hotel">3 میلیون <br/>قیمت پایه</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-caret-down-fill icon-arrow" viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                <div className="hotel-footer">
                    <a href="" className="btn-more-H"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill icon-more" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>توضیحات بیشتر</a>
                    <a href="" className="btn btn-send-H"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>ارسال پیشنهاد</a>
                </div>
            </div>
        </div>
    </div>
        </Fragment>
    );
}
 
export default Allhotels;