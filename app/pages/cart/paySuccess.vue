<template>
	<div id="wrap">
		<heading title="支付成功">
			<router-link to:"/cart" slot="left" class="iconfont iconfont_shangyige head_left"></router-link>
		</heading>	
		<div class="content">
			<p>恭喜您已成功支付</p>
			<p>订单编号：{{order.id}}</p>
			<button>继续购物</button>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Heading from "../../component/header/header.vue"
	export default{
		components:{
			Heading
		},
		data:function(){
			return{
				order:{
					id:""
				}
			}
		},
		methods:{

		}
	}
</script>