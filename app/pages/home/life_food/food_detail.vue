<template>
	<div class="food_detail">
		<header1 title="商品详情">
			<router-link to="/life_food" slot="left" class="iconfont icon-shangyige arrow-left"></router-link>
			<router-link to="/life_food" slot="left" class="iconfont icon-shoucang collect"></router-link>
			<span slot="left" class="iconfont icon-share01 share" ></span>
		</header1>
		<div class="food_information">
			<img src="./img/food_detial01.jpg">
			<div>
				<h3>薯条点心面休闲零食五味园  小包装500g</h3>
				<div class="price">
					<span class="currentPrice">￥ 11.5</span>
					<span class="originalCost">原价：¥ 12.8</span>
					<span class="salesVolume">销量：1235</span>
				</div>
				<div>
					<span class="limit_time">限时：2天23分02秒</span>
					<span class="limit_num">限量：120件</span>
				</div>
			</div>
		</div>
		<div class="goods_appraise">
			<ul class="title">
				<li class="goods">商品详情</li>
				<li class="appraise">用户评价</li>
			</ul>
			<ul class="goods_appraise_contents">
				<li>详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容</li>
			</ul>
		</div>

		<!-- 购物车 -->
		<ul class="shoppingCar">
			<li class="iconfont icon-gouwuche shoppingCarImg"></li>
			<li class="joinCar">加入购物车</li>
			<li class="nowShopping">立即购买</li>
		</ul>

		<div class="shareDetail">
			<div>
				<p>分享到</p>
				<div>
					<img src="./img/weixin.png">
					<span>微信</span>
				</div>
				<div>
					<img src="./img/friend.png">
					<span>朋友圈</span>
				</div>
				<div>
					<img src="./img/xinlang.png">
					<span>新浪微博</span>
				</div>
				<p class="cancel">取消</p>
			</div>
		</div>

	</div>
	
</template>

<script type="text/javascript">
	import Header1 from '../../../component/header/header.vue';
	import $ from '../../../common/js/jquery-3.1.1.min.js';
	export default{
		components:{
			Header1
		},
		// methods:{
		// 	share:function(){
		// 		var shareDetail = document.getElementsByClassName("shareDetail")[0];
		// 		shareDetail.style.display = "block";
		// 	}
		// }
		mounted:function(){  
				// 分享到
				$(".food_detail .share").on("click",function(){
					$(".shareDetail").slideDown(300);
				});

				// 取消分享
				$(".food_detail .cancel").on("click",function(){
					$(".shareDetail").slideUp(300);
				});

			}
		

	}
</script>

<style type="text/css" lang="less">
	.food_detail{
		.collect,.share{
			font-size: 24px;
			color: white;
			position: absolute;
			right: 2.67%;
		}
		.collect{
			right: 17%;
		}

		/*食物价格与销量*/
		.food_information{
			font-size: 13px;
			
			img{
				width: 100%;
				border-bottom: 1px solid #e3e3e3;
			}
			>div{
				padding: 10px 2.67% ;
				background: white;
				h3{
				font-size: 15px;
				font-weight: normal;
				margin:15px 0;
				}
				.price{
					margin-bottom: 10px;
					.currentPrice{
					color: red;
					margin-bottom: 10px;
					margin-right: 6.67%;
					}
					.originalCost{
						text-decoration: line-through;
						color: #666666;
					}
					.salesVolume{
						float: right;
						color: #666666;
					}
				}
				.limit_time{
					color: #666666;
				}
				.limit_num{
					color: #666666;
					float: right;
				}
			}
			
		}

		/*商品详情与用户评价*/
		.goods_appraise{
			margin-top:10px;
			background: white;
			.title{
				border-bottom:1px solid #e3e3e3;
				li{
					display: inline-block;
					width:49%;
					height: 40px;
					text-align: center;
					line-height:40px;
				}
				.goods{
					border-right:1px solid #e3e3e3;
				}

			}
			.goods_appraise_contents{
				padding: 10px 2.67%;
			}
		}
		.shoppingCar{
			width: 100%;
			height: 50px;
			background: #f2f2f2;
			position:fixed;
			bottom: 0px;
			z-index: 999;
			display: flex;
			justify-content:space-around;
			align-items: center;
			li{
				width:28.53%;
				height: 32px;
				text-align: center;
				line-height: 32px;
				border-radius:10px;
				color:white;
			}
			.shoppingCarImg{
				text-align:left;
				font-size: 30px;
				color: black;
			}
			.joinCar{
				background:#ed9d2a;
			}
			.nowShopping{
				background:#ee3749;				
			}
		}
		.shareDetail{
			display: none;
			position: fixed;
			bottom: 0;
			z-index: 1000;
			width: 100%;
			background: white;
			border-top: 1px solid #e3e3e3;
			font-size:12px;
			>div{
				width: 100%;
				height: 200px;
				display:flex;
				flex-wrap:wrap;
				justify-content:space-around;
				align-content: space-around;
				
				div{
					width: 14%;
					
					img{
						width: 100%;
					}
					span{
						display: inline-block;
						width: 100%;
						text-align: center;
					}
				}
				p{
					width: 100%;
					text-align: center;
				}
				.cancel{
					width: 80%;
					height:30px;
					line-height: 30px;
					background:#e3e3e3; 
					border-radius: 5px;
				}
			}
			
		}
		
		




	

	}

</style>


















