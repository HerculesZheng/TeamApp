<template>
	<div id="wrap">	
		<heading title="忘记密码"></heading>
		<form action="">
			<input type="text" placeholder="请输入账号">
			<input type="text" placeholder="请输入验证码">
			<button>获取验证码</button>
			<input type="password" placeholder="请设置密码">
			<input type="password" placeholder="请再次确认密码">
			<input type="submit" value="注册">
		</form>
	</div>
</template>

<script type="text/javascript">
	import Heading from "../../component/header/header.vue";
	export default{
		components:{
			Heading
		}
	}
</script> 