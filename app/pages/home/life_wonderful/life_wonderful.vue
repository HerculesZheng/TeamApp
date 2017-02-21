<template>
	<div class="life_wonderful">
		<header1 title="商家信息">
			<router-link to="/" slot="left" class="iconfont icon-shangyige arrow-left"></router-link>
		</header1>
		<!-- 轮播图 -->
		<div class="swiper-container wheel">
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
				<li v-for="(item,index) in data" @click="show(index)">{{item.title}}</li>
				<li class="line"></li>
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
	// import $ from '../../../common/js/jquery-3.1.1.min.js';

	export default{
		components:{
			Header1
		},
		data(){
			return{
				msg:"",
				data:[
					{
						title:"银行信息",
						data:[
							{
								img:require("./img/hosue_01.jpg"),
								developer:"中国银行",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
							{
								img:require("./img/hosue_01.jpg"),
								developer:"农业银行",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
							{
								img:require("./img/hosue_01.jpg"),
								developer:"工商银行",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
									{
								img:require("./img/hosue_01.jpg"),
								developer:"建设银行",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
							{
								img:require("./img/hosue_01.jpg"),
								developer:"民生银行",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
						]		
					},
					{
						title:"房产信息",
						data:[
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
								developer:"万众地产",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
						]		
					},
					{
						title:"金融信息",
						data:[
							{
								img:require("./img/hosue_01.jpg"),
								developer:"A股",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
							{
								img:require("./img/hosue_01.jpg"),
								developer:"B股",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
							{
								img:require("./img/hosue_01.jpg"),
								developer:"C股",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
						]		
					},
					{
						title:"旅游信息",
						data:[
							{
								img:require("./img/hosue_01.jpg"),
								developer:"旅游信息",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
							{
								img:require("./img/hosue_01.jpg"),
								developer:"旅游信息",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
							{
								img:require("./img/hosue_01.jpg"),
								developer:"旅游信息",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
						]		
					},
					{
						title:"国外信息",
						data:[
							{
								img:require("./img/hosue_01.jpg"),
								developer:"国外信息",
								area:"广州",
								address:"天河",
								houseType:"3室 | 3室",
								price:"10000",
							},
							{
								img:require("./img/hosue_01.jpg"),
								developer:"国外信息",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
							{
								img:require("./img/hosue_01.jpg"),
								developer:"国外信息",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
							},
									{
								img:require("./img/hosue_01.jpg"),
								developer:"国外信息",
								area:"广州",
								address:"天河",
								houseType:"2室 | 3室",
								price:"10000",
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
						$(".life_wonderful .line").animate({
							top:$(".life_wonderful .line").height()*j + "px",
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
			setTimeout(function(){
				new Swiper('.swiper-container',{
					autoplay : 3000,
					loop:true,
					pagination: '.swiper-pagination',
				})
			},1)
		}

	}
</script>

<style type="text/css" lang="less">
	
	
	.life_wonderful{
		/*轮播图*/
		padding-top: 150px;

		.wheel{
			width: 100%;
			position: fixed;
			left: 0;
			top: 42px;
			/*display: none;*/
			.big_img{
				img{
					width: 100%;
				}
			}
		}

		
		/*左边商家导航栏*/
		.left-side-bar{
			width: 28%;
			float: left;
			/*position: fixed;*/
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
















