import Vue from 'vue';
import VueRouter from  'vue-router';

import App from "./app.vue";
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

import Area from "./pages/home/area.vue";
import Search from "./pages/home/search.vue";

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
      {path:"/area",component:Area},
      {path:"/search",component:Search},
      {path:"/life_wonderful",component:Life_wonderful},
      {path:"/life_food",component:Life_food},
      {path:"/life_article",component:Life_article},
      {path:"/Life_home",component:Life_home},
      {path:"/life_service",component:Life_service},
      {path:"/life_wonderful_estate",component:Life_wonderful_estate},
      {path:"/food_detail",component:Food_detail}
    ]
})
// 指定一开始加载的页面
// router.push("class");

new Vue({
    router,
    render:h=>h(App)
}).$mount("#app")