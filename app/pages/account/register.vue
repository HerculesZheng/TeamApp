<template>
	<div id="wrap">
		<heading title="注册"></heading>
		<form action="">
			<input type="text" placeholder="请输入账号" v-on:keyup="isExist(this)">
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
	import $ from "../../common/js/jquery-3.1.1.min.js";
	export default{
		components:{
			Heading
		},
		methods:{
			isExist(obj){
				var Account = $(obj).val();
				$.ajax({
					type:"POST",
					url:"../../common/php/",
					data:"act=vality?Account="+Account,
					success:function(){

					}
				})
			}
		}
	}
</script> 