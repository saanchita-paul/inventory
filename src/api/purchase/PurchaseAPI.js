
import axios from "axios";


export default {

    searchProducts: async (search) => {
        return await axios.get('http://127.0.0.1:8000/api/product/list',{params:{search}})
    },

    insertPurchase: async (purchase) => {
        return await axios.post('http://127.0.0.1:8000/api/purchase/create', purchase)
    },

    listPurchase: async (page, per_page, search) => {
        return await axios.get('http://127.0.0.1:8000/api/purchase/list',{params: {page, per_page, search}})
    }
}
