import React, { Fragment } from 'react'

const Content = () => {
    return ( 
        <Fragment>
                {/* <!-- contents --> */}
    <div className="title-content"><span>پیشنهاد ویژه</span></div>
    <div className="continer-content">
        <div className="content-left">
            <img src="img/content.png" alt=""/>
        </div>
        <div className="content-right">
            <div className="top-content">
                <div className="top-content-left">
                    <span className="timer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            className="bi bi-alarm" viewBox="0 0 16 16">
                            <path
                                d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                            <path
                                d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                        </svg>
                    </span>
                    <span>8ساعت</span>
                </div>
                <div className="top-content-right">
                    <h3 className="title">هتل رامسر</h3>
                    <p className="sub-title">رامسر،مازندران</p>
                </div>
            </div>
            <div className="content-body">
                <div className="hotl">
                    <span>5</span>
                    <span>هتل</span>
                </div>
                <span>3شب</span>
                <span>دسترسی آسان به فرودگاه</span>
                <span>همراه با امکانات جانبی</span>
                <p>فرودگاه‌های بزرگی که برای پروازهای بین‌المللی مورد استفاده قرار می‌گیرند معمولاً دارای باندهای
                    آسفالتی و بلندی هستند که طول آن‌ها به چند کیلومتر می‌رسد. فرودگاه‌های کوچک و فرودگاه‌های بزرگ
                    می‌توانند مجهز به برج کنترل ترافیک باشند یا در صورت لزوم فاقد آن باشند</p>
                <div className="price-content">
                    <span>700هزار تومن <br/> قیمت پایه</span>
                    <span></span>
                    <div>
                        <span><i className="fa fa-heart" aria-hidden="true"></i></span>
                        <span>افزودن <br/> به علاقه مندی ها</span>
                    </div>
                </div>
            </div>
            <div className="content-footer">
                <a href="" className="btn-more"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-caret-left-fill  icon-more" viewBox="0 0 16 16">
                        <path
                            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>توضیحات بیشتر</a>
                <a href="" className="btn btn-send"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-caret-left-fill " viewBox="0 0 16 16">
                        <path
                            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>ارسال پیشنهاد</a>
            </div>
        </div>
    </div>
        </Fragment>
     );
}
 
export default Content;