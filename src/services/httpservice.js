import axios from "axios"
import { toast } from "react-toastify";



axios.defaults.headers.post["Content-Type"]="application/json";

axios.interceptors.response.use(null,error=>{
    const expectederror=
        error.response &&
        error.response.status>=400
        && error.response.status<500
    if(!expectederror){
        toast.error("خطایی از سمت سرور رخ داده است",{
            position:"top-right",
            closeOnClick:true
        });
    }

    return Promise.reject(error);
})
const axiosMethods = {
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete
}

export default axiosMethods

// جاهایی که از این استفاده کردی و درست کن از این اسم استفاده نکردم بکن