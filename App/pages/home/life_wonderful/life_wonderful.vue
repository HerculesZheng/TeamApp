<template>
	<div class="merchant">
		<header1 title="商家信息">
			<router-link to="/" slot="left" class="iconfont icon-shangyige arrow-left"></router-link>
		</header1>
		<!-- 轮播图 -->
		<div class="swiper-container">
			<div class="swiper-wrapper big_img">
		        <div class="swiper-slide">
		        	<router-link to="/home"><img src="./img/big_01.jpg"></router-link>
		        </div>
		        <div class="swiper-slide">
		       		<router-link to="/home"><img src="./img/big_02.jpg"></router-link>
		        </div>
		        <div class="swiper-slide">
					<router-link to="/home"><img src="./img/big_03.jpg"></router-link>
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
					<router-link to="/life_wonderful_estate">
						<img v-bind:src="i.img">
						<div>
							<h3>{{i.developer}}</h3>
							<p>地址：{{i.area}}  {{i.address}}</p>
							<p>户型：{{i.houseType}}</p>
							<p>价格：{{i.price}}元/m²</p>
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
					{con:"银行信息"},
					{con:"房产信息"},
					{con:"金融信息"},
					{con:"旅游信息"},
					{con:"国外信息"},
					{con:"旅游信息"},
				],
				msg:[
					{
						img:require("./img/hosue_01.jpg"),
						developer:"万达地产",
						area:"广州",
						address:"天河",
						houseType:"2室 | 3室",
						price:"10000",
					},
					{
						img:require("./img/hosue_01.jpg"),
						developer:"万科地产",
						area:"广州",
						address:"天河",
						houseType:"2室 | 3室",
						price:"10000",
					},
					{
						img:require("./img/hosue_01.jpg"),
						developer:"万众地产",
						area:"广州",
						address:"天河",
						houseType:"2室 | 3室",
						price:"10000",
					},
					{
						img:require("./img/hosue_01.jpg"),
						developer:"万达地产",
						area:"广州",
						address:"天河",
						houseType:"2室 | 3室",
						price:"10000",
					},
					{
						img:require("./img/hosue_01.jpg"),
						developer:"万达地产",
						area:"广州",
						address:"天河",
						houseType:"2室 | 3室",
						price:"10000",
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
	
	
	.merchant{
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
					float: left;
					margin-left:5%;
					h3{
						font-weight: normal;
						color: #1b1b1b;
					}
					p{
						margin-top:5px;
						font-size: 13px;
						color:#a6a4a4;
					}
				}
			}
			

		}

	}
	
	





	
</style>
















