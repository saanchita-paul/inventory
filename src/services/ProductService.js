
import ProductAPI from "../api/product/ProductAPI.js";


export const category = async ()  => {
    try {
        console.log('category');
        return await ProductAPI.category()

    } catch (e) {
        console.log('CATEGORY FAILED', e)
        return false;
    }
}

export default {
    category,
}



