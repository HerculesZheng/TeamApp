<template>
	<div class="wrap">
		<heading title="会员杂锦"></heading>
		<div class="big_img">
			<img src="../../common/img/memberBigImg.png" alt="">
		</div>
		<ul>
			<li v-for="item in items">	
				<router-link to="../../common/itemDetail">
					<img v-bind:src="item.img" alt="">			
					<span id="">
						{{item.discountPrice}}元
					</span>
					<span id="">
						{{item.originPrice}}元
					</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">	
	import Heading from '../../component/header/header.vue';
	export default{
		components:{
			Heading
		},
		data:function () {
			return{
				items:[
					{
						img:"/1.jpg",
						discountPrice:"19",
						originPrice:"29",
						sales:"500"
					},
					{
						img:"/1.jpg",
						discountPrice:"18",
						originPrice:"29",
						sales:"300"
					},
					{
						img:"/1.jpg",
						discountPrice:"17",
						originPrice:"29",
						sales:"560"
					},
					{
						img:"/1.jpg",
						discountPrice:"16",
						originPrice:"29",
						sales:"980"
					}
				]
			}
		}
	}
	
</script>

<style type="text/css" lang="less">
	/*@import '../../common/css/reset.css';*/

	.big_img{		
		img{
			width: 100%;
		}
	}
</style>