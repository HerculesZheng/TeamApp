<template>
	<div class="life_home">
		<header1 title="生活家居">
			<router-link to="/" slot="left" class="iconfont icon-shangyige arrow-left"></router-link>
		</header1>
		<!-- 轮播图 -->
		<div class="swiper-container">
			<div class="swiper-wrapper big_img">
		        <div class="swiper-slide">
		        	<router-link to="/home"><img src="./img/big_01.jpg"></router-link>
		        </div>
		        <div class="swiper-slide">
		       		<router-link to="/home"><img src="./img/big_03.jpg"></router-link>
		        </div>
		        <div class="swiper-slide">
					<router-link to="/home"><img src="./img/big_01.jpg"></router-link>
		        </div>
			    </div>
		   <div class="swiper-pagination "></div>
		</div>

		<!-- 商家详细信息 -->
		<div>
			<!-- 左边商家导航栏 -->
			<ul class="left-side-bar">
				<li v-for="(item,index) in data" @click="show(index)">{{item.title}}</li>
				<li class="line"></li>
			</ul>

			<!-- 右边详细信息 -->
			<ul class="information">
				<li v-for="i in msg">
					<router-link to="/life_home_article">
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
	import $ from '../../../common/js/jquery-3.1.1.min.js';
    
   
	export default{
		components:{
			Header1
		},
		data(){
			return{
				msg:"",
				data:[
					{
						title:"生活百货",
						data:[
							{
								img:require("./img/title_small01.jpg"),
								title:"沃之沃 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"15.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"沃之沃 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"15.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"沃之沃 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"15.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"沃之沃 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"15.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"沃之沃 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"15.8",
							},
						]		
					},
					{
						title:"收纳整理",
						data:[
							{
								img:require("./img/title_small01.jpg"),
								title:"收纳整理 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"16.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"收纳整理 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"18.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"收纳整理 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"15.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"收纳整理 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"15.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"收纳整理 多功能收纳盒内衣盒六件套",
								currentPrice:"13.5",
								originalCost:"19.8",
							},
						]		
					},
					{
						title:"餐饮卫具",
						data:[
							{
								img:require("./img/title_small01.jpg"),
								title:"餐饮卫具 多功能收纳盒内衣盒六件套",
								currentPrice:"10.5",
								originalCost:"15.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"餐饮卫具 多功能收纳盒内衣盒六件套",
								currentPrice:"10.5",
								originalCost:"15.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"餐饮卫具 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"17.8",
							},	
						]		
					},
					{
						title:"杂志报纸",
						data:[
							{
								img:require("./img/title_small01.jpg"),
								title:"杂志报纸 多功能收纳盒内衣盒六件套",
								currentPrice:"10.5",
								originalCost:"15.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"杂志报纸 多功能收纳盒内衣盒六件套",
								currentPrice:"11.5",
								originalCost:"19.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"杂志报纸 多功能收纳盒内衣盒六件套",
								currentPrice:"11.5",
								originalCost:"17.8",
							},	
						]		
					},
					{
						title:"厨房用品",
						data:[
							{
								img:require("./img/title_small01.jpg"),
								title:"厨房用品 多功能收纳盒内衣盒六件套",
								currentPrice:"19.5",
								originalCost:"20.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"厨房用品 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"17.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"厨房用品 多功能收纳盒内衣盒六件套",
								currentPrice:"12.5",
								originalCost:"15.8",
							},	
							{
								img:require("./img/title_small01.jpg"),
								title:"厨房用品 多功能收纳盒内衣盒六件套",
								currentPrice:"10.5",
								originalCost:"15.8",
							},
						]		
					},
					{
						title:"创意用品",
						data:[
							{
								img:require("./img/title_small01.jpg"),
								title:"创意用品 多功能收纳盒内衣盒六件套",
								currentPrice:"14.5",
								originalCost:"15.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"创意用品 多功能收纳盒内衣盒六件套",
								currentPrice:"11.8",
								originalCost:"15.8",
							},
							{
								img:require("./img/title_small01.jpg"),
								title:"创意用品 多功能收纳盒内衣盒六件套",
								currentPrice:"13.5",
								originalCost:"16.8",
							},	
							
						]
					},
				]
			}
		},
		methods:{
			show:function(i){
				this.msg = this.data[i].data;
				var lis = $(".left-side-bar li");
				for (var j = 0; j < lis.length; j++) {
					if(j == i){
						lis.eq(j).css({"background":"#e6e6e6","color":"#f29004"})
						$(".life_home .line").animate({
							top:$(".life_home .line").height()*j + "px",
						},200)
					}else{
						lis.eq(j).css({"background":"","color":""});
					}
				}

			},
			


		},
		mounted:function(){
			this.msg = this.data[0].data;
			$(".left-side-bar li").eq(0).css({"background":"#e6e6e6","color":"#f29004"});
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
	
	
	.life_home{
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
			position: relative;
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
			/*划线*/
			.line{
				width: 5%;
				height: 61px;
				background:#f29004; 
				position: absolute;
				top: 0;
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
















