<template>
	<div class="life_food">
		<header1 title="生活食品">
			<router-link to="/" slot="left" class="iconfont icon-shangyige arrow-left"></router-link>
		</header1>
		<!-- 轮播图 -->
		<div class="swiper-container">
			<div class="swiper-wrapper big_img">
		        <div class="swiper-slide">
		        	<router-link to="/home"><img src="./img/food_big01.jpg"></router-link>
		        </div>
		        <div class="swiper-slide">
		       		<router-link to="/home"><img src="./img/food_big02.jpg"></router-link>
		        </div>
		        <div class="swiper-slide">
					<router-link to="/home"><img src="./img/food_big01.jpg"></router-link>
		        </div>
			    </div>
		   <div class="swiper-pagination "></div>
		</div>

		<!-- 商家详细信息 -->
		<div>
			<!-- 左边商家导航栏 -->
			<ul class="left-side-bar">
				<li v-for="item in items"><router-link to="/">{{item.con}}</router-link></li>
			</ul>

			<!-- 右边详细信息 -->
			<ul class="information">
				<li v-for="i in msg">
					<router-link to="/food_detail">
						<img v-bind:src="i.img">
						<div>
							<h3>{{i.title}}</h3>
							<p>
								<span class="currentPrice">￥ {{i.currentPrice}}</span>
								<span class="originalCost"> 原价:￥{{i.originalCost}}</span>
							</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>



	</div>
</template>

<script type="text/javascript">
	import Header1 from '../../../component/header/header.vue';

	export default{
		components:{
			Header1
		},
		data(){
			return{
				items:[
					{con:"传统糕点"},
					{con:"膨化食品"},
					{con:"无糖食品"},
					{con:"休闲食品"},
					{con:"燕麦食品"},
					{con:"坚果炒货"},
				],
				msg:[
					{
						img:require("./img/food_small01.jpg"),
						title:"薯条点心面休闲零食五味园  小包装500g",
						currentPrice:"12.5",
						originalCost:"15.8",
					},
					{
						img:require("./img/food_small01.jpg"),
						title:"薯条点心面休闲零食五味园  小包装500g",
						currentPrice:"12.5",
						originalCost:"15.8",
					},
					{
						img:require("./img/food_small01.jpg"),
						title:"薯条点心面休闲零食五味园  小包装500g",
						currentPrice:"12.5",
						originalCost:"15.8",
					},
					{
						img:require("./img/food_small01.jpg"),
						title:"薯条点心面休闲零食五味园  小包装500g",
						currentPrice:"12.5",
						originalCost:"15.8",
					},
					{
						img:require("./img/food_small01.jpg"),
						title:"薯条点心面休闲零食五味园  小包装500g",
						currentPrice:"12.5",
						originalCost:"15.8",
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
	
	
	.life_food{
		/*轮播图*/
		.big_img{
			img{
				width: 100%;
			}
		}
		/*左边商家导航栏*/
		.left-side-bar{
			width: 28%;
			float: left;
			li{
				width: 100%;
				height:60px;
				line-height: 60px;
				text-align: center;
				/*background: #f9f9f9;*/
				border-bottom: 1px solid #d3d1d1;
			
				a{
					color: black;
				}
			}
		}
		.information{
			width: 72%;
			float: right;
			background: white;
			li{
				height: 90px;
				margin:10px 5% 20px;

				img{
					width: 33.33%;
					float: left;
				}
				div{
					width:61%;
					float: left;
					margin-left:5%;
					h3{
						font-weight: normal;
						color: #1b1b1b;
						font-size: 15px;
					}
					p{
						margin-top:20px;
						font-size: 13px;
						color:#a6a4a4;
						.currentPrice{
							color:red;
							margin-right: 4%;
						}
						.originalCost{
							text-decoration: line-through;
						}
					}
				}
			}
			

		}

	}
	
	
</style>
















