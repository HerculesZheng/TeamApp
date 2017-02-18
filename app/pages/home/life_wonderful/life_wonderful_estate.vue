<template>
	<div class="estate">
		<header1 title="详细信息">
			<router-link to="/life_wonderful" slot="left" class="iconfont icon-shangyige arrow-left"></router-link>
		</header1>
		<div class="house-information">
			<img src="./img/hosue_big01.jpg">
			<h3>[番禺 华南] 星力时代豪庭</h3>
			<p>番禺地铁大盘低首付5万起送入户花园，4万抵10万抢购中,市场均价：住宅  12800元/㎡</p>
		</div>
		<div class="estate-information">
			<img src="./img/hosue_01.jpg">
			<div>
				<h3>九江康瑞地产</h3>
				<p class="address">地址：天河南路123号</p>
				<p class="tel">400 890 2828 转 60852</p>
			</div>
		</div>
	</div>
	
</template>

<script type="text/javascript">
	import Header1 from '../../../component/header/header.vue';

	export default{
		components:{
			Header1
		},

	}
</script>

<style type="text/css" lang="less">
	.estate{
		.house-information{
			background: white;
			margin-bottom: 10px;
			img{
				width: 100%;
				margin-bottom: 10px;
			}
			h3{
				padding:0 2.67%;
				margin-bottom: 13px;
				overflow: hidden;
			}
			p{
				padding:0 2.67% 5px;
				line-height: 20px;
			}
		}
		.estate-information{
			padding:10px 2.67% 20px;
			background:white;
			overflow:hidden;
			img{
				width:24%;
				float: left;

			}
			div{
				float: left;
				margin-left:3%;
				h3{
					margin-top:6px;
				}
				.address{
					color: #514f4f;
					margin: 5px 0 15px;
				}
				.tel{
					color:#0add27;
				}
			}

		}
	}
	
</style>







