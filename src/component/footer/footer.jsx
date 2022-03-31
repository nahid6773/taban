import React, { Fragment } from 'react';


const Footer = () => {
    return ( 
        <Fragment>
             {/* <!-- footer-top --> */}
    <div className="footer-top">
        <div className="footer-container">
            <h4>از جدیدترین مناقصه ها مطلع شوید</h4>
            <p>با شروع هر مناقصه به شما اطلاع میدهم</p>
            <div className="Email">
                <input type="text" className="form-control input-email" placeholder="ایمیل خود را وارد نمایید"/>
                <a href="" className="btn btn-send-email"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path
                            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>ارسال ایمیل</a>
            </div>
        </div>
    </div>
    {/* <!-- footer-bottom --> */}
    <div className="footer-bottom">
        <div className="footer-container">
            <h2 className="title-footer">مراحل شرکت در مناقصه به چه صورت میباشد</h2>
            <div className="step-container container">
                {/* <!-- stap-item1 --> */}
                <div className="stap-item">
                    <span className="shap"><svg xmlns="http://www.w3.org/2000/svg" width="84.48" height="79.5"
                            viewBox="0 0 84.48 79.5">
                            <path id="Path_96" data-name="Path 96" d="M442.76,2308.5v-59h84.48V2329Z"
                                transform="translate(-442.76 -2249.5)" fill="#125eaa" />
                        </svg>
                        <i className="fa fa-search icon-shap" aria-hidden="true"></i>
                    </span>
                    <span className="number">3.</span>
                    <p className="text-footer">مناقصه مورد نظر خود را پیدا کنید</p>
                </div>
                {/* <!-- stap-item2 --> */}
                <div className="stap-item">
                    <span className="shap"><svg xmlns="http://www.w3.org/2000/svg" width="84.48" height="79.5"
                            viewBox="0 0 84.48 79.5">
                            <path id="Path_96" data-name="Path 96" d="M442.76,2308.5v-59h84.48V2329Z"
                                transform="translate(-442.76 -2249.5)" fill="#125eaa" />
                        </svg>
                        <i className="fa fa-key icon-shap" aria-hidden="true"></i>
                    </span>
                    <span className="number">2.</span>
                    <p className="text-footer">به حساب کاربری خود وارد شوید</p>
                </div>
                {/* <!-- stap-item3 --> */}
                <div className="stap-item">
                    <span className="shap"><svg xmlns="http://www.w3.org/2000/svg" width="84.48" height="79.5"
                            viewBox="0 0 84.48 79.5">
                            <path id="Path_96" data-name="Path 96" d="M442.76,2308.5v-59h84.48V2329Z"
                                transform="translate(-442.76 -2249.5)" fill="#125eaa" />
                        </svg>
                        <i className="fa fa-usd icon-shap" aria-hidden="true"></i>
                    </span>
                    <span className="number">1.</span>
                    <p className="text-footer">قیمت پیشنهادی خود را اعلام کنید</p>
                </div>

            </div>
        </div>

    </div>
    {/* <!-- subfooter --> */}
    <div className="subfooter">
        <div className="text-subfooter">تمامی حقوق مادی و معنوی این سایت مربوط به فی‌باتو می باشد</div>
        <div className="icon-footer">
            <a href="" className="icon-footer-item"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="" className="icon-footer-item"><i className="fa fa-telegram" aria-hidden="true"></i></a>
            <a href="" className="icon-footer-item"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
    </div>
        </Fragment>
     );
}
 
export default Footer;