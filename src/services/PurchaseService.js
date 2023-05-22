
import router from "../router/index.js";
import PurchaseAPI from "../api/purchase/PurchaseAPI.js";


export const searchProducts = async (search) => {
    try {
        const response = await PurchaseAPI.searchProducts(search)
        console.log('searchProducts', response.data)
        return response.data;

    } catch (e) {
        console.log('Product Search Failed', e)
        return false;
    }
}

export const insertPurchase = async (purchase) => {
    try {
        const response = await PurchaseAPI.insertPurchase(purchase)
        router.push({ name: 'PurchaseList' });
        return response.data;


    } catch (e) {
        console.log('Create Purchase Failed', e)
        return false;
    }
}

export const listPurchase = async (page, per_page, search) => {
    try {
        const response = await PurchaseAPI.listPurchase(page, per_page, search)
        console.log('lll',response.data)
        return response.data;

    } catch (e) {
        console.log('Purchase List Failed', e)
        return false;
    }
}

export default {
    insertPurchase,
    listPurchase,
    searchProducts
}



