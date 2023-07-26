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
