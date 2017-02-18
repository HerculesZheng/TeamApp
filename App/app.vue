<template>
	<div class="wrap">
	<div class="content">
		<router-view >
			
		</router-view>
	</div>
		
		<div class="nav">
			<router-link to="/" >首页</router-link>
			<router-link to="/member" >会员</router-link>
			<router-link to="/class" >分类</router-link>
			<router-link to="/shop" >购物车</router-link>
			<router-link to="/my" >我的</router-link>
		</div>
	</div>
</template>

<style type="text/css" lang="less">
@import "./common/css/reset.css";
	html,body{
		width:100%;
		font-size:15px;
		background: #f2f2f2;
	}

	.nav{
		position: fixed;
		bottom: 0;
		width:100%;
		display: flex;
		border-top: 1px solid #ccc;
		background: white;
		/*line-height: 50px;*/

		a{
			flex:1;
			display: block;
			text-align: center;
			line-height: 50px;
			color: black;
		}
	}
	.content{
		padding-top:42px;
		padding-bottom: 50px;
		background: #f2f2f2;
		/*position:relative;*/
	}
</style>

































