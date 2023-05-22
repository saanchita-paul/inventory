
import ProductAPI from "../api/product/ProductAPI.js";
import router from "../router/index.js";


export const category = async ()  => {
    try {
        console.log('category');
        return await ProductAPI.category()

    } catch (e) {
        console.log('CATEGORY FAILED', e)
        return false;
    }
}

export const insertProduct = async (product) => {
    try {
        const response = await ProductAPI.insertProduct(product)
        router.push({ name: 'ProductList' });
        return response.data;

    } catch (e) {
        console.log('Create Product Failed', e)
        return false;
    }
}

export const listProduct = async (page, per_page, search) => {
    try {
        const response = await ProductAPI.listProduct(page, per_page, search)
        console.log('lll',response.data)
        return response.data;

    } catch (e) {
        console.log('Product List Failed', e)
        return false;
    }
}

export default {
    category,
    insertProduct,
    listProduct
}



