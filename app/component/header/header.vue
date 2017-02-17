<template>
<<<<<<< HEAD
	<div class="header">
		<slot name="left"></slot>
		<div class="title">{{title}}</div>
	</div>
=======
<div class="header">
{{title}}
<slot name="left"></slot>
</div>
>>>>>>> makeboluo-master
</template>

<script type="text/javascript">
export default{
	props:["title"]
}
</script>
<style type="text/css">
 .header{
 	background: #f29004;
<<<<<<< HEAD
 	font-size: 18px;
 	color: white;
 	text-align: center;
 	height: 42px;
 	line-height: 42px;
 	overflow: hidden;

 	width: 100%;
 	position: fixed;
 	top: 0;
 	z-index: 999;
=======
 	color: white;
 	text-align: center;
 	line-height: 50px;
 	overflow: hidden;
>>>>>>> makeboluo-master
 }
</style>
