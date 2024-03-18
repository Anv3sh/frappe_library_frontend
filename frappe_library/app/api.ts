import axios from 'axios';  

let baseURL;

if (process.env.NEXT_PUBLIC_PROD === 'True') {  
    baseURL = process.env.NEXT_PUBLIC_PROD_FRAPPE_ENDPOINT;  
} else {  
    baseURL = process.env.NEXT_PUBLIC_DEV_FRAPPE_ENDPOINT;  
}

const instance = axios.create({  

    baseURL: baseURL, 
});  

export default instance;  
