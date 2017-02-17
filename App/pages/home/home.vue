<template>
	<div class="home">

			<header1 title="生活一家">
				<router-link to="/area" slot="left" class="area">广州</router-link>
				<!-- <router-link to="/search" slot="left"><img src="./img/search.png"></router-link> -->
				 <router-link to="/search" slot="left" class="iconfont icon-sousuo_sousuo search"></router-link>
			</header1>

			
		<div class="middle"> 
			<!-- 轮播图 -->
			<div class="swiper-container">
			    <div class="swiper-wrapper big_img">
			        <div class="swiper-slide"><img src="./img/big01.jpg"></div>
			        <div class="swiper-slide"><img src="./img/big02.jpg"></div>
			        <div class="swiper-slide"><img src="./img/big03.jpg"></div>
			    </div>
			    <div class="swiper-pagination "></div>
			</div>
			<!-- 生活 -->
			<div class="life" >
				<router-link to="/life_wonderful" class="life_wonderful">
					<h2>精彩生活</h2>
					<p>会员专享</p>
				</router-link>
				
				<div class="life_right">
					<router-link to="/life_food" class="life_food">
						<h2>生活食品</h2>
						<p>为生活 添实惠</p>
					</router-link>
					<router-link to="/life_article" class="life_article">
						<h2>生活用品</h2>
						<p>为生活 更舒适</p>
					</router-link>
					<router-link to="/life_home" class="life_home">
						<h2>生活家居</h2>
						<p>为生活 享生活</p>
					</router-link>
					<router-link to="/life_service" class="life_service">
					<div class="life_service">
						<h2>一键客服</h2>
						<p>为生活 更贴心</p>
					</router-link>
				</div>
				
			</div>

			<!-- 特卖 -->
			<ul class="sales">
				<li v-for="item in items">
					<img v-bind:src="item.img"> 
					<h3>{{item.title}}</h3>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
  	import Swiper from "../../common/js/swiper-3.4.1.min.js";
	import Header1 from '../../component/header/header.vue';


// import Swiper() from 

	export default{
		components:{
			Header1,			
		},
		data(){
			return{
				items:[
					{
						img:require("./img/sales_01.jpg"),
						title:"【10月抢购预告】 荣耀乐檬大神爆款 惊爆价",
						
					},
					{
						img:require("./img/sales_02.jpg"),
						title:"【劲爆开抢】 宝洁大礼包优惠前所未有",
					},
					{
						img:require("./img/sales_03.jpg"),
						title:"【神价再现】 GOD PRICE 华丽上市",
					},
				]
			}
		},
		mounted:function(){
			var mySwiper = new Swiper('.swiper-container',{
				autoplay : 3000,
				loop:true,
				// autoplayDisableOnInteraction : true,
				pagination: '.swiper-pagination',
			})
		}
            
              
            
       
	}
</script>
<style type="text/css" lang="less">
@import "../../common/css/swiper-3.4.1.min.css";
@import "../../common/css/reset.css";
	/*头部样式*/
	.home{
		.header{
			.area{
				width:16%;/*60px*/
				font-size:15px;
				background: url(./img/arrow_down.png) no-repeat 100% center;
				background-size:12px;
				color:white;
				position: absolute;
				left:2.67%;
			}
			.search{
				position: absolute;
				right: 2.67%;
				font-size: 20px;
				color:white;
				
			}
		}

		/*内容区域*/
		.middle{
			/*轮播图*/
			.big_img{
				width: 100%;
				margin-bottom: 7px;
				img{
					width:100%;
				};
			}
			.swiper-pagination{
				span{
					background: red;

				}
			}


			/*生活*/
			.life{
				width: 100%;
				height:168px;
				margin-bottom: 7px;
				display: flex;
				font-size: 12px;
				.life_wonderful{
					width: 29.87%;
					background: url(./img/life_wondeful.jpg) no-repeat;
					background-size: 100%;
					margin-left:2.53%;
					margin-right: 2.53%;
					h2{
						font-size: 15px;
						margin:26px 0 6px 16.96%;
						color:#f29604;
					}
					p{
						margin-left: 16.96%;
						color: #e1a84a;
					}

				}
				.life_right{
					width:63.86%;/*479*/
					margin-right: 2.53%;
					display: flex;
					flex-wrap:wrap;
					justify-content: space-between;
					align-content: space-between;
					a{
						width:49.06%;/*235*/
						background: yellow;
						height: 81px;
						display: flex;
						flex-wrap: wrap;
						justify-content:flex-end;
						align-content:flex-start;
						
						h2{
							font-size: 15px;
							margin:13px 8.1% 6px 0;

						}
						p{
							margin-right: 8.1%;
						}

					}
					/*右边四个生活类*/
					.life_food{
						background: url(./img/life_food.jpg) no-repeat;
						background-size: 100%;
						 h2{
						 	color: #2aad49;

						 }
						 p{
						 	color:#79bb88;
						 }
					}
					.life_article{
						background: url(./img/life_article.jpg) no-repeat;
						background-size: 100%;
						 h2{
						 	color: #2ba6de;
						 }
						 p{
						 	color:#82c6e5;
						 }
					}
					.life_home{
						background: url(./img/life_home.jpg) no-repeat;
						background-size: 100%;
						 h2{
						 	color: #f65b86;
						 }
						 p{
						 	color:#ed91ab;
						 }
					}
					.life_service{
						background: url(./img/life_service.jpg) no-repeat;
						background-size: 100%;
						 h2{
						 	color: #ff7531;
						 }
						 p{
						 	color:#fba575;
						 }
					}
				}

			}

			/*特卖*/
			.sales{
				li{
					h3{
						font-size:15px;
					}
				}
				li{
					border-bottom:1px solid #e3e2e2;
					margin-bottom: 8px;
					img{
						width:100%;
						/*margin-bottom: */
					}
					h3{
						font-size: 15px;
						padding:9px;
					}
				}
			}
		}
	}



	
	



</style>
