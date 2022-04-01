import axiosMethods from './httpservice';
import config from './config.json';

export const userregister=user=>{
    return axiosMethods.post(`${config.fibatoapi}/api/Register`,JSON.stringify(user));
}

export const userlogin=user=>{
    return axiosMethods.post(`${config.fibatoapi}/api/login`,JSON.stringify(user));
}