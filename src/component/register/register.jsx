import React, { Fragment, useRef, useState } from 'react'
import simplereactvalidator from 'simple-react-validator'
import { toast } from 'react-toastify';
import { userregister } from '../../services/userservice';


const Register = () => {
    const validator = useRef(new simplereactvalidator({
        messages: {
            required: "لطفا  اسمتو وارد کن",
            email: "ایمیل وارد شده صحیح نیس",
            min: "کاراکتر  وارد شده کمتر از 5تا نباشد"
        },
        element: messages => <div style={{ color: "red" }}>{messages}</div>
    }))


    const [fullname, setfullname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [policy, setpolicy] = useState();
    const [, forceUpdate] = useState();


    const reset = () => {
        setfullname("");
        setemail("");
        setpassword("");
        setpolicy("");
    }

    const handelsubmit = async event => {
        event.preventDefault();

        const user = {
            fullname,
            email,
            password
        }
        console.log(user);


        try {

            const { status } = await userregister(user);
            if (status === 201) {
                toast.success("کاربر با موفقیت ثبت شد", {
                    position: "top-right",
                    closeOnClick: "true"
                })
                reset();
            }

        }

        catch (ex) {
            toast.error("ثبت ناموفق یود", {
                position: "top-right",
                closeOnClick: "true"
            })
            console.log(ex)
        }
    }



    return (
        <Fragment>
            <main className="client-page">
                <div className="container-content">
                    <header>
                        <h2> عضویت در سایت </h2>
                    </header>

                    <div className="form-layer">
                        <form onSubmit={handelsubmit}>
                            <div className="input-group">
                                {validator.current.message("fullname", fullname, "required|min:5")}
                                <input
                                    type="text"
                                    name="fullname"
                                    className="form-control"
                                    placeholder="نام و نام خانوادگی"
                                    aria-describedby="username"
                                    value={fullname}
                                    onChange={e => {
                                        setfullname(e.target.value)
                                        validator.current.showMessageFor("fullname")
                                    }}
                                />
                                <span className="input-group-addon" id="username">
                                    <i className="fa fa-user-o" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="input-group">
                                {validator.current.message("email", email, "required|email")}
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="ایمیل"
                                    aria-describedby="email-address"
                                    value={email}
                                    onChange={e => {
                                        setemail(e.target.value)
                                        validator.current.showMessageFor("email")
                                    }}
                                />
                                <span
                                    className="input-group-addon"
                                    id="email-address"
                                >
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                </span>

                            </div>

                            <div className="input-group">
                                {validator.current.message("password", password, "required|min:5")}
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="رمز عبور "
                                    aria-describedby="password"
                                    value={password}
                                    onChange={e => {
                                        setpassword(e.target.value)
                                        validator.current.showMessageFor("password")
                                    }}
                                />
                                <span className="input-group-addon" id="password">
                                    <i classNmae="fa fa-key" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="accept-rules">
                                <label>
                                    قوانین و مقررات سایت را میپذیرم{" "}
                                    <input
                                        type="checkbox"
                                        value={policy}
                                        onChange={e => {
                                            setpolicy(e.target.checked)
                                            validator.current.showMessageFor("policy")
                                        }}

                                    />{" "}
                                    {validator.current.message("policy",policy,"required")}
                                </label>

                            </div>

                            <div className="link">
                                <a href="">
                                    {" "}
                                    <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت!
                                </a>
                                <a href="">
                                    {" "}
                                    <i className="zmdi zmdi-account"></i> ورود به
                                    سایت{" "}
                                </a>
                            </div>

                            <button className="btn btn-success btn-register">
                                {" "}
                                عضویت در سایت{" "}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

export default Register;