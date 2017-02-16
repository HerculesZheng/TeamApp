<template>
	<div class="header">
		<slot name="left"></slot>
		<div class="title">{{title}}</div>

	</div>
</template>
<script type="text/javascript">
	export default{
		props:["title"]
	}
</script>
<style type="text/css" lang="less">
	.header{
		/*background: #f29004;
		font-size: 18px;
		color: white;
		text-align: center;
		height:42px;
		line-height: 42px;*/

		width: 100%;
		background: #f29004;
		font-size: 18px;
		color: white;
		text-align: center;
		height:42px;
		line-height: 42px;
		position: fixed;
		top:0;
		z-index: 999;
		
	}

</style>