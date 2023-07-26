import axios from "axios";


const baseURL = "https://cart-api.teamrabbil.com/api";

/**
 * Getting product list from API
 * 
 */
export async function getProducts() {
    let response = await axios.get(baseURL+"/product-list");
    if (response.status === 200) {
        return response.data.data.length > 0 ? response.data.data : [];
    } else {
        return [];
    }
}

export async function sendOTP(email) {
    let response = await axios({
        method: 'post',
        url: baseURL+'/user-login',
        data: {
            UserEmail: email
        }
    });

    if (response.status === 200) {
        return response.data.msg === "success";
    } else {
        return false;
    }
}

export async function checkLogin(email, otp) {
    let response = await axios({
        method: 'post',
        url: baseURL+'/verify-login',
        data: {
            UserEmail: email,
            OTP: otp
        }
    });

    if (response.status === 200) {
        return response.data.msg === "success" ? response.data : false;
    } else {
        return false;
    }
}


export async function addProductToCart(id) {
    let response = await axios({
        method: 'get',
        url: baseURL+'/create-cart/'+id,
        headers: {
            'token': localStorage.getItem('access_token') 
        }
    });

    if (response.status === 200) {
        return response.data.msg === "success";
    } else {
        return false;
    }
}