<template>
	<div class="wrap">
		<div class="content">
			<router-view></router-view>
		</div>
		<div class="nav">
			<router-link to="/home">
				<span class="iconfont icon-shouye icon_text"></span>
				<i class="me">首页</i>
			</router-link>
			<router-link to="/member">
				<span class="iconfont icon-liwuhe icon_text"></span>
				<i class="me">会员</i>
			</router-link>
			<router-link to="/class">
				<span class="iconfont icon-fenlei icon_text"></span>
				<i class="me">分类</i>
			</router-link>
			<router-link to="/shop">
				<span class="iconfont icon-gouwuche icon_text"></span>
				<i class="me">购物车</i>
			</router-link>
			<router-link to="/my">
				<span class="iconfont icon-wode icon_text"></span>
				<i class="me">我的</i>
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript" >

</script>

<style type="text/css" lang="less">
@import './common/css/reset.css';
@import './common/font/iconfont.css';
.nav{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	border-top: 1px solid #ccc;
	background: white;
}
.nav a{  
	flex: 1;
	display: block;
	text-align: center;
	color: #808080;
}
.nav .nav_active{
	color: #f29004;
}
.content{
   padding-bottom: 50px;
   font-size: 18px;
}
.icon_text{
	font-size: 22px;
	line-height:30px;
}
.nav a .me{
	display: block;
	font-size: 14px;
	font-style: normal;
}
</style>
