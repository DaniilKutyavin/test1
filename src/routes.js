import { Component } from "react"
import { ADMIN_ROUTER, SHOP_ROUTER, LOGIN_ROUTER, REGISTRATION_ROUTER, PRODUCT_ROUTER, NEWS_ROUTER, CONTACTS_ROUTER, DELIVERY_ROUTER, BUY_ROUTER} from "./utils/consts"
import Admin from './page/Admin'
import Shop from './page/Shop'
import ProductPage from './page/ProductPage'
import Prod from './page/Prod'
import Buy from './page/Buy'

export const authRoutes = [
    {
        path: ADMIN_ROUTER,
        Component: Admin
    },
   
]

export const publicRoutes = [
    {
        path: SHOP_ROUTER,
        Component: Shop
    },
    {
        path: LOGIN_ROUTER,
        Component: Shop
    },
    {
        path: REGISTRATION_ROUTER,
        Component: Shop
    },
    {
        path: PRODUCT_ROUTER + '/:id',
        Component: ProductPage
    },
    {
        path: PRODUCT_ROUTER,
        Component: Prod
    },
    {
        path: NEWS_ROUTER + '/:id',
        Component: Shop
    },
    {
        path: NEWS_ROUTER,
        Component: Shop
    },
    {
        path: CONTACTS_ROUTER,
        Component: Shop
    },
    {
        path: DELIVERY_ROUTER,
        Component: Shop
    },
    {
        path:BUY_ROUTER,
        Component: Buy
    }
]