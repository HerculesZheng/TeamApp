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


Vue.use(VueRouter)

const router = new VueRouter({
	// mode:'history',
    routes:[
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
    ]
})
// 指定一开始加载的页面
// router.push("class");

new Vue({
    router,
    render:h=>h(App)
}).$mount("#app")