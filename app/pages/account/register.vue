<template>
	<div id="wrap">
		<heading title="注册"></heading>
		<form action="" method="POST" v-on:submit.prevent="register()">
			<input type="text" id="account" name="account" placeholder="请输入账号" v-on:keyup="isExist()" ><span v-if="isAccInputed"><p v-if="exist">用户名已存在，请重新输入</p><p v-if="!exist">OK</p></span>
			<input type="text" placeholder="请输入验证码">
			<button>获取验证码</button>
			<input type="password" id="pwd" name="pwd" placeholder="请设置密码">
			<input type="password" id="pwdConfirm" name="pwdConfirm" placeholder="请再次确认密码" v-on:keyup="isCorrect()"><span v-if="isPwdInputed"><p v-if="correct">OK!</p><p v-if="!correct">请输入相同的密码</p></span>
			<input type="submit" v-bind:disabled="exist||!correct" value="注册">
		</form>
		<div class="success_panel" v-show="isComplete">
			<div v-if="isSuccess">注册成功！</div>
			<div v-else>注册失败！</div>
				<span class="success_yes">确定</span>
		</div>
		<div class="main_mark" v-show="isComplete"></div>
	</div>
</template>

<script type="text/javascript">
	import Heading from "../../component/header/header.vue";
	export default{
		components:{
			Heading
		},
		data(){
			return {				
				isAccInputed:false,
				isPwdInputed:false,
				isComplete:false,
				isSuccess:false,
				exist:false,
				correct:false
			}
		},
		// created:function(){
		// 	var successShow=function(){
		// 		this.isSuccess=true;
		// 	}
		// },
		methods:{
			isExist:function(){
				var _this=this;
				var account=$("#account").val()
				this.isAccInputed=!(account==="");
				console.log(account,this.isAccInputed);
				// var Account = $(obj).val();
				$.ajax({
					type:"POST",
					url:"http://172.16.14.31/TeamAppphp/account.php",					
					data:"act=vality&account="+account,
					success:function(data){
						console.log(data);
						if (data=="false") {
							_this.exist=false;
						}else if (data=="true"){
							_this.exist=true;
						};

					},
					error:function(XMLRequest,status,errorThrown){
						console.log(XMLRequest);
						console.log(status);
						console.log(errorThrown);
					}
				});
				this.exist=_this.exist;
			},
			isCorrect:function(){
				this.isPwdInputed=!($("#pwdConfirm").val()=="");
				this.correct=($("#pwd").val()==$("#pwdConfirm").val());
			},
			register:function(){
				// e.preventDefault();				
				var _this=this;
				var account=$("#account").val();
				var pwd=$("#pwd").val();
				//console.log(account);
				//console.log(pwd);
				$.ajax({					
					type:"POST",					
					url:"http://172.16.14.31/TeamAppPHP/account.php",					
					data:"act=register&account="+account+"&pwd="+pwd,
					success:function(data){
						console.log(data);
						if (data=="true") {
							console.log(_this.isComplete)
							//_this.isSuccess=true;
							// successShow();
						}else{
							//_this.isSuccess=false;
						};	
					},
					// success:this.isRegSuccess(),
					complete:this.successShow(),
					error:function(XMLRequest,status,errorThrown){
						console.log(XMLRequest);
						console.log(status);
						console.log(errorThrown);
						}				
					});		
					this.isSuccess=_this.isSuccess;					
				$(".success_yes").on("click",function(){
					this.isSuccess=false;
					$(".success_panel").hide();
					$(".main_mark").hide();
				})
			},
			successShow:function(){
				this.isComplete=true;
			}
			isRegSuccess:function(obj){
				console.log(obj);
				if (obj=="true") {
					this.isSuccess=true;
				}else{
					this.isSuccess=false;
				}
			}
		}
	}
</script> 

<style type="text/css">
	.success_panel{  
		width: 90%;  
		background: #fff;  
		position: absolute;  
		top: 310px;  
		left: 5%;  
		z-index: 10;  
		/*display: none;*/
	}

	.success_panel div{  
		padding: 10px 3%;  
		border-bottom: 1px solid #dbdbdb;
	}

	.success_panel span{  
		display: inline-block;  
		box-sizing: border-box;
		width: 47%;  
		padding: 10px 3%;  
		text-align: center;
	}

	.main_mark{
		width: 100%;  
		height: 736px;  
		background: gray;  
		opacity: 0.7;  
		position: absolute;  
		top: 0;  
		left: 0;  
		z-index: 5;  
		/*display: none;	*/
	}
</style>