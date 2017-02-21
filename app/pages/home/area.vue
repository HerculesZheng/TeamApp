<template>
	<div class="area">
	
		<header1 title="选择城市">
			<router-link to="/" slot="left" class="iconfont icon-shangyige arrow-left">		
			</router-link>		
		</header1>
		
		<ul class="area-detail">
			<li v-for="(item,index) in items" @click="area(index)">{{item.area}}</li>
		</ul>
		
	</div>
</template>
<script type="text/javascript">
	import Header1 from '../../component/header/header.vue';
    import china from '../../common/js/china.js';
	export default{
		components:{
			Header1
		},
		data(){
			return{
				items:[
					{area:"当前地址"},
					{area:"广州市"},
					{area:"省市列表"},
					{area:"上海市"},
					{area:"上海郊区"},
					{area:"江苏"},
					{area:"浙江"},
					{area:"安徽"},
					{area:"北京"},
					{area:"天津"},
					{area:"河南"},
					{area:"重庆"},
					{area:"深圳"},
				]
			}
		},
		methods:{
			area:function(index){
				console.log(china);
			}
		},
		// mounted:function(){
		// 	var newChina = new china()
		// }
		
	}
</script>
<style type="text/css" lang="less">
	
	.arrow-left{
		float: left;
		color: white;
		line-height: 42px;
		margin-left: 10px;
	}

	.area-detail {
		li{
			height: 40px;
			font-size: 15px;
			border-bottom:1px solid #e3e2e2;
			line-height: 40px;
			text-indent: 10px;
			
		}
	}




</style>










