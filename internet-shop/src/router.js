import { createRouter, createWebHashHistory } from 'vue-router'

import Main from "@/pages/Main"
import Product from "@/pages/Product"
import About from "@/pages/About"
import Cart from "@/pages/Cart"
import EditProduct from "@/components/EditProduct"

const routes =[
    {
        path: '/',
        component: Main,
        name: 'main'
    },
    {
        path: '/product/:id?',
        component: Product,
        name: 'product'
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    },
    {
        path: '/cart',
        component: Cart,
        name: 'cart',
    },
    { 
        path: '/edit/:id?',
       component: EditProduct,
        name: 'edit' 
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router