import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue"
import Login from "../components/Login.vue";
import DashBoard from "../components/DashBoard.vue";
import ProductList from "../components/ProductList.vue";
import CreateProduct from "../components/CreateProduct.vue";
import PurchaseList from "../components/PurchaseList.vue";
import AddNewPurchase from "../components/AddNewPurchase.vue";
import ProductDetails from "../components/ProductDetails.vue";
import Test from "../components/Test.vue";
import {checkRouteAuthentication} from "../services/AuthService.js";

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
            isProtected: false
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            isProtected: false
        }
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard,
        meta: {
            isProtected: true
        },
        children: [
            {
                path: 'product-list',
                name: 'ProductList',
                component: ProductList,
                meta: {
                    isProtected: true,
                }
            },
            {
                path: 'product-add',
                name: 'CreateProduct',
                component: CreateProduct,
                meta: {
                    isProtected: true,
                }
            },
            {
                path: 'product/:id',
                name: 'ProductDetails',
                component: ProductDetails,
                meta: {
                    isProtected: true,
                }
            },
            {
                path: 'purchase-list',
                name: 'PurchaseList',
                component: PurchaseList,
                meta: {
                    isProtected: true,
                }
            },
            {
                path: 'purchhase-add',
                name: 'AddNewPurchase',
                component: AddNewPurchase,
                meta: {
                    isProtected: true,
                }
            },
            {
                path: 'test',
                name: 'Test',
                component: Test
            },
        ],
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(checkRouteAuthentication)


export default router