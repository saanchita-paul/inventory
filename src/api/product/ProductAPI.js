
import axios from "axios";


export default {

    category: async () =>  {
       return await axios.get('http://127.0.0.1:8000/api/product/categories');
    },

    insertProduct: async (product) => {
        return await axios.post('http://127.0.0.1:8000/api/product/create', product)
    },

    listProduct: async (page, per_page, search) => {
        return await axios.get('http://127.0.0.1:8000/api/product/list',{params: {page, per_page, search}})
    }

}
