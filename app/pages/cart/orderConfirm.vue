<template>
	<div class="wrap">
		<heading title="确认订单">
			<router-link to="/cart" slot="left" class="iconfont icon-shangyige head_left">
			</router-link>
		</heading>
		<div class="content">
			<div id="mask" v-if="isConfirmed">
				<div id="enterPwd">
					<h5>钱包密码</h5>
					<p>￥{{order.totalPrice}}</p>
					<input type="number" class="iptPwd">
					<input type="number" class="iptPwd">
					<input type="number" class="iptPwd">
					<input type="number" class="iptPwd">
					<input type="number" class="iptPwd">
					<input type="number" class="iptPwd">
					<button @click="confirmSwitch()">取消</button>
					<input type="submit" value="付款">
					<router-link to="/cart/paySuccess">付款</router-link>
				</div>
			</div>
			<div id="userInfo">
				<p id="namephone">{{user.name}}&nbsp{{user.phone}}</p>
				<br>
				<p id="address">{{user.address}}</p>
			</div>
			<form action="">
				<div id="orderInfo">
					<h5>购买商品</h5>
					<div id="goodsInfo">
						<ul>
							<li v-for="item in order.items">
								<router-link to="../../common/itemDetail" class="itemImg">
									<img v-bind:src="item.img" alt="itemImg" >
								</router-link>
								<span class="itemInfo">	
									<router-link to="../../common/itemDetail">
										<p class="itemName">{{item.name}}</p>
									</router-link>
									<p class="itemPrice">{{item.price}}元</p>
									<span class="itemAmount">
										<p style="display:inline-block" >X</p>
										<p v-model="item.amount"></p>
									</span>
								</span>	
							</li>
						</ul>					
					</div>
					<p>运费: <span id="transCost">{{order.transCost}}</span></p>
					<p>备注:<input type="text" name="commit"></p>
				</div>
				<div id="pay">
					<h5>支付方式</h5>
					<ul>
						<li><label for="myWallet">我的钱包</label><input type="radio" id="myWallet"></li>
						<li><label for="aliPay">支付宝</label><input type="radio" id="aliPay"></li>
						<li><label for="weixin">微信支付</label><input type="radio" id="weixin"></li>
					</ul>
				</div>
				<div id="confirm">
					<p>合计：￥{{order.totalPrice}}</p>
					<button @click="confirmSwitch()">确认支付</button>
				</div>
			</form>			
		</div>
	</div>
</template>

<script type="text/javascript">
	import Heading from '../../component/header/header.vue';
	export default{
		components:{
			Heading
		},
		data:function(){
			return {
				order:[{
					id:"",
					items:[{
						img:"",
						name:"",
						amount:10,
						price:10
					}],
					totalPrice:"10",
					transCost:"10"
				}],
				user:[{
					name:"1",
					phone:"12312341234",
					address:"1"
				}],
				isConfirmed:false
			}
		},
		methods:{
			confirmSwitch:function(){
				this.isConfirmed=!this.isConfirmed;
			}
		}
	}
</script>