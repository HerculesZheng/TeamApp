<template>
	<div class="life_service">
		<header1 title="一键客服">
			<router-link to="/" slot="left" class="iconfont icon-shangyige arrow-left"></router-link>
		</header1>
		<ul>
			<li class="contact">
				<p>联系信息：</p>
				<input type="text" value="姓名：" name="">
				<input type="text" value="联系方式：" name="">
			</li>
			<li class="type">
				<p>需求类型：</p>
				<input type="text" placeholder="输入商业合作/商品入驻/广告加盟等需求类型" name="">
			</li>
			<li class="describe">
				<p>需求描述：</p>
				<textarea rows="7" cols="50" placeholder="请根据需求类型，输入详细的合作模式（如：商品入驻，请注明具体商品、数量等），平台会在第一时间与您进行沟通联系。">	
				</textarea>
				<p class=" presentingBank"> <span class="iconfont icon-tishi "></span>需求提交后，平台会在第一时间与您联系。</p>
			</li>
			<li class="btn"><button>提交</button></li>
		</ul>
	</div>
	
</template>

<script type="text/javascript">
	import Header1 from '../../../component/header/header.vue';
	export default{
		components:{
			Header1
		},

	}
</script>

<style type="text/css" lang="less">
	.life_service{
		ul{
			margin-top:15px;
			padding: 0 5.33%;
			p{
				margin-top: 32px;
				margin-bottom: 10px;
				font-size: 14px;
			}
			.presentingBank{
				margin-top: 10px;
			}
			input,textarea{
				width: 100%;	
				font-size:15px;
				margin-bottom: 3px;
				color: #808080;
				padding: 15px;
				border: 0px;
				border-radius: 5px;
				box-sizing: border-box;

			}
			input{
				height: 45px;
				line-height: 45px;
			}
			
			/*联系信息*/
			.contact{
				p{
					margin-top:10px;
				}
			}

			/*提示信息*/
			.icon-tishi{
				color: #f29004;
				margin-right: 1.5%;
			}
			
			.btn{
				margin-top:50px;
				margin-bottom: 36px;
				button{
				width:100%;
				height: 45px;
				font-size: 18px;
				color: white;
				background: #f29004;
				border: 0;

				}
			}
			
			
		}





	}


</style>
























