import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AdminCategories from '../views/Category/AdminCategories.vue'
// import AddCategory from '../views/Category/AddCategory.vue'
// import EditCategory from '../views/Category/EditCategory.vue'
// import AdminProducts from '../views/Products/AdminProducts.vue'
// import AddProduct from '../views/Products/AddProduct.vue'
// import EditProduct from '../views/Products/EditProduct.vue'
import SeeAllProducts from '../views/Products/SeeAllProducts.vue'
import SeeAllCategories from '../views/Category/SeeAllCategories.vue'
import ShowDetails from '../views/Products/ShowDetails.vue'
import ListProducts from '../views/Category/ListProducts.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
// import AdminView from '../views/AdminView.vue'
import CartView from '../views/CartView.vue'
import ContactView from '../views/ContactView.vue'


const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/categories/show/',
        name: 'SeeAllCategories',
        component: SeeAllCategories
    },
    {
        path: '/product/show/:id',
        name: 'ShowDetails',
        component: ShowDetails
    },
    {
        path: '/products/show/',
        name: 'SeeAllProducts',
        component: SeeAllProducts
    },
    {
        path: '/category/show/:id',
        name: 'ListProducts',
        component: ListProducts
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/cart',
        name: 'CartView',
        component: CartView
    },
    {
        path: '/contact',
        name: 'ContactView',
        component: ContactView
    },
    // {
    //     path: '/admin/category/add',
    //     name: 'AddCategory',
    //     component: AddCategory
    // },
    // {
    //     path: '/admin/category/:id',
    //     name: 'EditCategory',
    //     component: EditCategory
    // },
    // {
    //     path: '/admin/categories',
    //     name: 'AdminCategories',
    //     component: AdminCategories
    // },
    // {
    //     path: '/admin',
    //     name: 'AdminView',
    //     component: AdminView
    // },
    // {
    //     path: '/admin/products',
    //     name: 'AdminProducts',
    //     component: AdminProducts
    // },
    // {
    //     path: '/admin/product/add',
    //     name: 'AddProduct',
    //     component: AddProduct
    // },
    // {
    //     path: '/admin/product/:id',
    //     name: 'EditProduct',
    //     component: EditProduct
    // },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router