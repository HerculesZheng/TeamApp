<template>
	<div id="wrap">
		<heading title="确认订单">
			<router-link to="/cart" slot="left" class="iconfont icon-shangyige head_left">
			</router-link>
		</heading>
		<div class="content">
			<div id="userInfo">
				<p id="namephone">{{user.name}}&nbsp,{{user.phone}}</p>
				<br>
				<p id="address">{{user.address}}</p>
			</div>
			<form action="">
				<div id="orderInfo">
					<p>购买商品</p>
					<div id="goodsInfo">
						<ul>
							<li v-for="item in items">
								<router-link to="../../common/itemDetail" class="itemImg">
									<img v-bind:src="item.img" alt="itemImg" >
								</router-link>
								<span class="itemInfo">	
									<router-link to="../../common/itemDetail">
										<p class="itemName">{{item.name}}</p>
									</router-link>
									<p class="itemPrice">{{item.price}}元</p>
									<span class="itemAmount">
										<p style="display:inline-block" v-if="!isedit">X</p>
										<p v-model="item.amount"></p>
									</span>
								</span>	
							</li>
						</ul>					
					</div>
					<p>运费: <span id="transCost">{{order.transCost}}</span></p>
					<p>备注:<input type="text"></p>
				</div>
				<div id="pay">
					<p>支付方式</p>
					<ul>
						<li><label for="myWallet">我的钱包</label><input type="radio" id="myWallet"></li>
						<li><label for="aliPay">支付宝</label><input type="radio" id="aliPay"></li>
						<li><label for="weixin">微信支付</label><input type="radio" id="weixin"></li>
					</ul>
				</div>
				<div id="confirm">
					<p>合计：￥{{order.totalPrice}}</p>
					<button>确认支付</button>
				</div>
			</form>			
		</div>
	</div>
</template>