import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue"
import Login from "../components/Login.vue";
import DashBoard from "../components/DashBoard.vue";
import ProductList from "../components/ProductList.vue";
import CreateProduct from "../components/CreateProduct.vue";
import PurchaseList from "../components/PurchaseList.vue";
import AddNewPurchase from "../components/AddNewPurchase.vue";


const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard,
        children: [
            {
                path: 'product-list',
                name: 'ProductList',
                component: ProductList
            },
            {
                path: 'product-add',
                name: 'CreateProduct',
                component: CreateProduct
            },
            {
                path: 'purchase-list',
                name: 'PurchaseList',
                component: PurchaseList
            },
            {
                path: 'purchase-add',
                name: 'AddNewPurchase',
                component: AddNewPurchase
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router