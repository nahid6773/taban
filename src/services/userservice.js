import axiosMethods from './httpservice';
import config from './config.json';

export const userregister=user=>{
    return axiosMethods.post(`${config.fibatoapi}/api/Register`,JSON.stringify(user));
}

export const userlogin=user=>{
    return axiosMethods.post(`${config.fibatoapi}/api/login`,JSON.stringify(user));
}

// ببین چند تا ارور دیگه داری دونه دونه توی گوگل سرچشون کن برطرفشون کن بعد چند تا دستور گیت به ترتیب میزنی وقتی که کامل باگ هات و فیکس کردی
// git add .
// git commit -m "message"
// git push
// بعد دوباره برو توی اون سایته اگه مشکلی نداشته باشه deploy میشه اگه مشکل داشته باشه به
//الان ارورش چیه اونجا نوشته بخون سرچ کن