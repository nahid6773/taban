import http from "./httpservice";
import config from './config.json';

export const userregister=user=>{
    return http.post(`${config.fibatoapi}/api/Register`,JSON.stringify(user));
}

export const userlogin=user=>{
    return http.post(`${config.fibatoapi}/api/login`,JSON.stringify(user));
}