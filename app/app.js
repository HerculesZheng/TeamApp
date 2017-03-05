import Vue from 'vue';
import VueRouter from  'vue-router';

import App from "./app.vue";

import Home from './pages/home/home.vue';

//home的生活
import Life_wonderful from "./pages/home/life_wonderful/life_wonderful.vue";
import Life_food from "./pages/home/life_food/life_food.vue";
import Life_article from "./pages/home/life_article/life_article.vue";
import Life_home from "./pages/home/life_home/life_home.vue";
import Life_service from "./pages/home/life_service/life_service.vue";

//地产详细页
import Life_wonderful_estate from "./pages/home/life_wonderful/life_wonderful_estate.vue";

//商品详情
import Food_detail from "./pages/home/life_food/food_detail.vue";
import Area from "./pages/home/area.vue";
import Search from "./pages/home/search.vue";

//生活用品详情页
import Article_detail from "./pages/home/life_article/article_detail.vue";

//生活家居详情页life_home_article.vue
import Life_home_article from "./pages/home/life_home/life_home_article.vue";


import Member from './pages/member/member.vue';
import Class from './pages/class/class.vue';

// import Shop from './pages/shop/shop.vue';
import Template from "./component/emptyView/emptyView.vue";
import Cart from "./pages/cart/cart.vue";
import OrderConfirm from "./pages/cart/orderConfirm.vue";
import PaySuccess from "./pages/cart/paySuccess.vue";

import Login from "./pages/account/login.vue";
import Register from "./pages/account/register.vue";
import ChangePwd from "./pages/account/changePwd.vue";

// 我的
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

var auth={
  isLoggedIn:true,
  account:"",
  name:"",
  phoneNumber:""
}


Vue.use(VueRouter)

const router = new VueRouter({
	// mode:'history',
   linkActiveClass:"nav_active",
    routes:[
      {path:"/",redirect:"/home"},
      {path:"/home",component:Home},
      {path:"/member",component:Member},
      {path:"/class",component:Class},
      // {path:"/shop",component:Shop},
      {
        path:"/cart",
        component:Template,
        meta:{requiresAuth:true},
        children:[
          {path:"",component:Cart},
          {path:'orderConfirm',component:OrderConfirm},
          {path:'paySuccess',component:PaySuccess}
        ]
      },
      // {path:"/orderConfirm",component:OrderConfirm},
      {path:"/my",component:My,meta:{requiresAuth:true}},
      {path:"/login",component:Template,
      children:[
      {path:"",component:Login},
      {path:"register",component:Register},
      {path:"changePwd",component:ChangePwd}
      ]},
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
      {path:"/area",component:Area},

      {path:"/search",component:Search},
      {path:"/life_wonderful",component:Life_wonderful},
      {path:"/life_food",component:Life_food},
      {path:"/life_article",component:Life_article},
      {path:"/Life_home",component:Life_home},
      {path:"/life_service",component:Life_service},
      {path:"/life_wonderful_estate",component:Life_wonderful_estate},
      {name:"food_detail",path:"/food_detail",component:Food_detail},
      {name:"article_detail",path:"/article_detail",component:Article_detail},
      {name:"life_home_article",path:"/life_home_article",component:Life_home_article}
    ]
})

// const router2 = new VueRouter({
//  {path:"/life_service",component:Life_service},
// })

//指定开始加载页面  
// router.push("search");

router.beforeEach((to,from,next)=>{
  if (to.matched.some(record=>record.meta.requiresAuth)) {
    if (sessionStorage.isLoggedIn) {
      next({
        path:"/login",
        query:{redirect:to.fullPath}
      })
    }else {
      next()
    }
  }else{
    next()
  }
})

Vue.mixin({
  created:function(){
    var myOption = this.$options.myOption;
    // if (myOption) {console.log(myOption)};
  }
})

new Vue({
    router,    
    render:h=>h(App),
    myOption:auth
}).$mount("#app")

