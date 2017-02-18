import Vue from "vue";
import VueRouter from "vue-router";

import App from "./app.vue";
import Home from "./pages/home/home.vue";
import Member from "./pages/member/member.vue";
import Class from "./pages/class/class.vue";
import Shop from "./pages/shop/shop.vue";
import My from "./pages/my/my.vue";

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

//生活用品详情页
import Article_detail from "./pages/home/life_article/article_detail.vue";

//生活家居详情页life_home_article.vue
import Life_home_article from "./pages/home/life_home/life_home_article.vue";

Vue.use(VueRouter)

const router = new VueRouter({
	// mode:"history",
	routes:[
		{path:"/",component:Home},
		{path:"/member",component:Member},
		{path:"/class",component:Class},
		{path:"/shop",component:Shop},
		{path:"/my",component:My},
		{path:"/area",component:Area},
		{path:"/search",component:Search},
		{path:"/life_wonderful",component:Life_wonderful},
		{path:"/life_food",component:Life_food},
		{path:"/life_article",component:Life_article},
		{path:"/Life_home",component:Life_home},
		{path:"/life_service",component:Life_service},
		{path:"/life_wonderful_estate",component:Life_wonderful_estate},
		{path:"/food_detail",component:Food_detail},
		{path:"/article_detail",component:Article_detail},
		{path:"/life_home_article",component:Life_home_article},
	]
})


// const router2 = new VueRouter({
// 	{path:"/life_service",component:Life_service},
// })

//指定开始加载页面  
// router.push("search");


new Vue({
	router,
	// router2,
	render:h=>h(App),
}).$mount("#app")























