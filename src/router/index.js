import Vue from 'vue'
import VueRouter from 'vue-router'
import customerDetails from '@/views/customerDetails.vue'
import homePage from '@/views/homePage.vue'
import loginCustomer from '@/views/loginCustomer.vue'
import orderDetails from '@/views/orderDetails.vue'
import payment from '@/views/payment.vue'
import register from '@/views/register.vue'
import product from '@/views/product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/login',
    name: 'loginCustomer',
    component: loginCustomer
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/custDetails',
    name: 'customerDetails',
    component: customerDetails
  },
  {
    path: '/product/:userid',
    name: 'product',
    component: product
  },
  {
    path: '/payment/:userid',
    name: 'payment',
    component: payment
  },
  {
    path: '/orderDetails/:userid',
    name: 'orderDetails',
    component: orderDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
