import Vue from 'vue';
import VueRouter from  'vue-router';

import  App from "./app.vue";
import Home from './pages/home/home.vue';
import Member from './pages/member/member.vue';
import Class from './pages/class/class.vue';
import Shop from './pages/shop/shop.vue';
import My from './pages/my/my.vue';
import My_login from './pages/my/my_login.vue';
import My_message from './pages/my/my_message.vue';
import My_order from './pages/my/my_order.vue';
import My_collection from './pages/my/my_collection.vue';
import My_purse from './pages/my/my_purse.vue';
import My_address from './pages/my/my_address.vue';
import My_leaguer from './pages/my/my_leaguer.vue';
import My_more from './pages/my/my_more.vue';
import Mes_name from './pages/my/mes_name.vue';
import Mes_contact from './pages/my/mes_contact.vue';
import Contact_edit from './pages/my/contact_edit.vue';
import Mes_changepass from './pages/my/mes_changepass.vue';
import Mes_changepurse from './pages/my/mes_changepurse.vue';
import Offer from './pages/my/mes_offer.vue';
import Bill from './pages/my/purse_bill.vue';
import Zhi_add from './pages/my/zhi_addmoney.vue';
import Leag_pay from './pages/my/leag_pay.vue';
import Leag_ok from './pages/my/leag_ok.vue';
import About from './pages/my/about_we.vue';
import Help from './pages/my/more_help.vue';
import Suggest from './pages/my/suggest.vue';
import Problem from './pages/my/com_problem.vue';
import Address_edit from './pages/my/address_edit.vue';
import Add_address from './pages/my/add_address.vue';
import Collect_edit from './pages/my/collect_edit.vue';
import Wait_fahuo from './pages/my/wait_fahuo.vue';
import Wait_shouhuo from './pages/my/wait_shouhuo.vue';
import Order_over from './pages/my/order_over.vue';
import After_sale from './pages/my/after_sale.vue';
import Go_zhifu from './pages/my/go_zhifu.vue';
import Pay_yes from './pages/my/pay_yes.vue';
import Sure_shop from './pages/my/sure_shop.vue';
import Shouhuo_ok from './pages/my/shouhuo_ok.vue';
import Go_comments from './pages/my/go_comments.vue';
import Comment_ok from './pages/my/comments_ok.vue';
import Yi_comments from './pages/my/yi_comments.vue';

Vue.use(VueRouter)

const router = new VueRouter({
	// mode:'history',
    routes:[
      // {path:"/",redirect:"/home"},
      {path:"/",component:Home},
      {path:"/member",component:Member},
      {path:"/class",component:Class},
      {path:"/shop",component:Shop},
      {path:"/my",component:My},
      {path:"/login",component:My_login},
      {path:"/message",component:My_message},
      {path:"/order",component:My_order},
      {path:"/collection",component:My_collection},
      {path:"/address",component:My_address},
      {path:"/purse",component:My_purse},
      {path:"/leaguer",component:My_leaguer},
      {path:"/more",component:My_more},
      {path:"/mes_name",component:Mes_name},
      {path:"/mes_contact",component:Mes_contact}, 
      {path:"/contact_edit",component:Contact_edit}, 
      {path:"/changepass",component:Mes_changepass},
      {path:"/changepurse",component:Mes_changepurse},
      {path:"/offer",component:Offer},
      {path:"/bill",component:Bill},
      {path:"/zhi_add",component:Zhi_add},
      {path:"/leag_pay",component:Leag_pay},
      {path:"/leag_ok",component:Leag_ok},
      {path:"/about",component:About},
      {path:"/help",component:Help},
      {path:"/suggest",component:Suggest},
      {path:"/problem",component:Problem},
      {path:"/address_edit",component:Address_edit},
      {path:"/add_address",component:Add_address},
      {path:"/collect_edit",component:Collect_edit},
      {path:"/wait_fahuo",component:Wait_fahuo},
      {path:"/wait_shouhuo",component:Wait_shouhuo},
      {path:"/order_over",component:Order_over},
      {path:"/after_sale",component:After_sale},
      {path:"/go_zhifu",component:Go_zhifu},
      {path:"/pay_yes",component:Pay_yes},
      {path:"/sure_shop",component:Sure_shop},
      {path:"/shouhuo_ok",component:Shouhuo_ok},
      {path:"/go_comments",component:Go_comments},
      {path:"/comments_ok",component:Comment_ok},
      {path:"/yi_comments",component:Yi_comments},
    ]
})
// 指定一开始加载的页面
// router.push("class");

new Vue({
    router,
    render:h=>h(App)
}).$mount("#app")