import React, { Fragment, useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';
import { userlogin } from '../../services/userservice';


const Login = () => {
    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "لطفا اسمتو وارد کن",
            email: "ایمیل وارد شده صحیح نیس",
            min: "کاراکتر وارد شده کمتر از 5تا نباشه"
        },
        element: message => <div style={{ color: "red" }}>{message}</div>
    }))

    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [,forceUpdate]=useState();

    const reset = () => {
        setemail("");
        setpassword("");
    }


    const handelsubmit = async event => {
        event.preventDefault();

        const user = {
            email,
            password
        }
        try {
            if(validator.current.allValid()){
                const { status, data } = await userlogin(user);
                if (status === 200) {
                    toast.success("وارد سایت شدید", {
                        position: "top-right",
                        closeOnClick:true
                    }) 
                    reset();
                }
                console.log(data);
            }else{
                validator.current.showMessages();
                forceUpdate(1);
            }
          
        }
        catch (ex) {
            toast.error("کاربر واردنشد", {
                position: "top-right",
                closeOnClick: true
            })
            console.log(ex);
        }
    }
    return (
        <Fragment>
            <main className="client-page">
                <div className="container-content">
                    <header>
                        <h2> ورود به سایت </h2>
                    </header>

                    <div className="form-layer">
                        <form onSubmit={handelsubmit}>
                            <div className="input-group">
                            {validator.current.message("email", email, "required|email")}
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="ایمیل"
                                    aria-describedby="email-address"
                                    value={email}
                                    onChange={e =>{
                                        setemail(e.target.value)
                                        validator.current.showMessageFor("email")
                                    }}
                                />
                                <span
                                    className="input-group-addon"
                                    id="email-address"
                                >
                                    <i classNmae="fa fa-paper-plane" aria-hidden="true"></i>
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
                                    onChange={e =>{
                                        setpassword(e.target.value)
                                        validator.current.showMessageFor("password")
                                    }}
                                />
                                <span className="input-group-addon" id="password">
                                    {/* <i className="zmdi zmdi-lock"></i> */}
                                    <i className="fa fa-key" aria-hidden="true"></i>
                                </span>

                            </div>
                            {/* یکم برنامه های باز رو ببند انق */}

                            <div className="remember-me">
                                <label>
                                    مرا بخاطر
                                    بسپار{" "}
                                    <input type="checkbox" name="" />
                                </label>
                            </div>

                            <div className="link">
                                <a href="">
                                    {" "}
                                    <i className="zmdi zmdi-lock"></i> رمز عبور خود
                                    را فراموش کرده ام !
                                </a>
                                <a href="">
                                    {" "}
                                    <i className="zmdi zmdi-account"></i> عضویت در
                                    سایت{" "}
                                </a>
                            </div>

                            <button className="btn btn-success btn-login">
                                {" "}
                                ورود به سایت{" "}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

export default Login; 