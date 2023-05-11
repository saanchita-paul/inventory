
import axios from "axios";


export default {

    category: async () =>  {
       return await axios.get('http://127.0.0.1:8000/api/product/categories');
    },

}
