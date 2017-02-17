<template>
	<div class="search">
		<header1 title="搜索">
			<router-link to="/" slot="left" class="iconfont icon-shangyige arrow-left"></router-link>
		</header1>
		<div class="search-detial">
			
			<input type="text" placeholder="输入关键词/商品名称">
			<div class="hot-font">热门搜索</div>
			<ul class="hot-search">
				<li v-for="item in items">{{item.con}}</li>
			</ul>
		</div>
	</div>
	
</template>

<script type="text/javascript">
	import Header1 from '../../component/header/header.vue';

	export default{
		components:{
			Header1
		},
		data(){
			return{
				items:[
					{con:"小挎包"},
					{con:"皮带"},
					{con:"单肩包"},
					{con:"双肩包"},
					{con:"小挎包"},
					{con:"皮带"},
					{con:"单肩包"},
					{con:"双肩包"},
				],
				// msg:"输入关键词/商品名称"
				
		
			}
		},
		// methods:{
		// 	empty:function(){
		// 		if (this.value =='输入关键词/商品名称'){
		// 			this.value =''
		// 		}
		// 	}
		// }

		

		
		
	}
</script>

<style type="text/css" lang="less">
	.arrow-left{
		position: absolute;
		color: white;
		line-height: 42px;
		left: 2.67%;
	}
	.search-detial{
		/*搜索框*/
		input{
			width:96.8%;
			height:40px;
			margin:10px 1.6% 16px;
			border: 1px solid #d9d9d9;
			border-radius:20px;
			font-size: 15px;
			text-indent:3em;
			color: #8e8e8e;
			background:white url(./img/search_02.png) no-repeat 5.67% center;
			background-size: 5.2%;
		}
		.hot-font{
			width:100%;
			text-align: center;
			color: #8e8e8e;
			margin-bottom: 16px;
		}

		/*热门搜索*/
		.hot-search{
			padding-left:4.27%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			li{
				width:18.67%;
				height: 26px;
				border: 1px solid #d9d9d9;
				text-align: center;
				line-height: 26px;
				color:#8e8e8e;
				border-radius: 10px;
				margin-right:5.07%;
				margin-bottom: 12px;

			}
		}

	}
</style>








