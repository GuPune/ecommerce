
import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/auth';
import user from './modules/user'
import CategoryShell from './modules/category.module'
import ProductShell from './modules/product.module'
import Cart from './modules/cart.module'
import Profile from './modules/profile.module'
import Ads from './modules/ads.module'
import Shipping from './modules/shipping.module'
import Shopping from './modules/shop.module'
import Menu from './modules/menu.module'
import Bank from './modules/bank.module'
import Abount from './modules/about.module'
import Salepage from './modules/salepage.module'
import Order from './modules/order.module'
import Blog from './modules/blog.module'
import Contact from './modules/contact.module'
import { alert } from '../store/modules/alert.module';
import validations from '../store/modules/validation';
import Loader from './modules/loader.module'


Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    user,alert,validations,auth,CategoryShell,ProductShell,Ads,Cart,Shipping,Loader,Bank,Order,Menu,Abount,Blog,Contact,Salepage,Shopping
  }
})

export default store
