<template>
<div class="header">
{{title}}
<slot name="left"></slot>
</div>
</template>

<script type="text/javascript">
export default{
	props:["title"]
}
</script>
<style type="text/css">
 .header{
 	background: #f29004;
 	color: white;
 	text-align: center;
 	line-height: 50px;
 	overflow: hidden;
 }
</style>
