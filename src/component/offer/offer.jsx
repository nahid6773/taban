import { Fragment, React, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';


const Offer = () => {
    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "مقداری را وارد کنید",
            email: "ایمیل وارد شده صحیح نیس",
            min: "کاراکتر وارد شده کمتر از 5تا نباشه"
        },
        element: message => <div style={{ color: "red" }}>{message}</div>
    }))


    const [fullname, setfullname] = useState();
    const [name, setname] = useState();
    const [number, setnumber] = useState();
    const [image, setimage] = useState();
    const [decription, setdescription] = useState();
    const [, forceUpdate] = useState();

    const reset = () => {
        setfullname("");
        setname("");
        setnumber("");
        setimage("");
        setdescription("");
    }

    const handelsubmit = event => {
        event.preventDefault();

        const formplug = {
            fullname,
            name,
            number,
            image,
            decription
        }
        if (validator.current.allValid()) {
            toast.success("ثبت موفقیت امیز بود", {
                position: "top-right",
                closeOnClick: true
            })
            console.log(formplug);
            reset();
        }
        else {
            validator.current.showMessages();
            forceUpdate(1);
        }

    }
    return (
        <Fragment>
            <div className=' container offer-container'>
                <h5 className='form-agahi'>فرم ارسال آگهی</h5>
                <p className="description">در صورتی که مناقصه یا مزایده ای برای اطلاع رسانی دارید فرم زیر را تکمیل کنید.</p>
                <form className="form-offer row m-0" onSubmit={handelsubmit}>
                    <input type="text"
                        className=" col-12 col-md-5 form-control input-offer"
                        placeholder='*نام و نام خانوادگی/نام شرکت'
                        name='fullname'
                        value={fullname}
                        onChange={e => {
                            setfullname(e.target.value)
                            validator.current.showMessageFor("fullname")
                        }}
                    />
                    {validator.current.message("fullname", fullname, "required|min:5")}

                    <input type="text"
                        className="col-12 col-md-5 form-control input-offer"
                        placeholder='*نام خانوادگی مسول هماهنگی آگهی'
                        name='name'
                        value={name}
                        onChange={e => {
                            setname(e.target.value)
                            validator.current.showMessageFor("name")
                        }}
                    />
                    {validator.current.message("name", name, "required|min:5")}

                    <input type="text"
                        className="col-12 col-md-5 form-control input-offer"
                        placeholder='*شماره تلفن هماهنگی قبل از انتشار آگهی'
                        name="number"
                        value={number}
                        onChange={e => {
                            setnumber(e.target.value)
                            validator.current.showMessageFor("number")
                        }}
                    />
                    {validator.current.message("number", number, "required|number")}
                    <input type="file"
                        className="col-12 col-md-5 form-control input-offer"
                        placeholder='فایل نامه یا تصویر آگهی'
                        value={image}
                        onChange={e => setimage(e.target.value)}
                    />

                    <textarea type="text"
                        className="col-12 col-md-5 form-control input-offer text-area"
                        placeholder='*متن آگهی خود را درج کنید'
                        value={decription}
                        onChange={e => {
                            setdescription(e.target.value)
                            
                        }}
                    />

                    <button className="btn btn-success col-12 col-md-1 btn-send-agahi">ثبت</button>
                </form>
            </div>
        </Fragment>
    )
}

export default Offer;