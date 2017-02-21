<template>
	<div class="wrap">
		<heading title="购物车"><button id="edit" slot="left" class="leaguer_right" @click="isedit=!isedit">{{isedit?"完成":"编辑"}}</button></heading>
		
		<div class="content">
			<ul>
				<li v-for="item in items" class="goods">
					<input class="itemChoose" type="checkbox" v-model="item.select_flag" v-on:change="calTotalPrice()">
					<router-link to="../../common/itemDetail" class="itemImg">
						<img v-bind:src="item.img" alt="itemImg" >					
					</router-link>
					<span class="itemInfo">					
						<router-link to="../../common/itemDetail">
							<p class="itemName">
								{{item.name}}
							</p>
						</router-link>	
						<p class="itemPrice">
							{{item.price}}元
						</p>
						<span class="itemAmount">
							<button v-if="isedit" @click="item.amount-=1">-</button>
							<p style="display:inline-block" v-if="!isedit">X</p>
							<input type="number" v-bind:readonly="!isedit" v-model="item.amount"></input>
							<button v-if="isedit" @click="item.amount+=1">+</button>
						</span>
					</span>		
				</li>
			</ul>
		</div>
		<div id="summary">
			<input type="checkbox" id="chkAll" v-model="chkall" v-on:change="select_All()">
			<label for="chkAll">全选</label>
			<p id="totalPrice" v-show="selected">合计￥{{totalPrice}}(不含运费)</p>
			<button id="btnDelete" v-if="isedit">删除</button>
			<router-link to="/cart/orderConfirm">结算</router-link>
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
				items:[
					{
						img:"/01.jpg",
						name:"XXX",
						amount:10,
						price:10,
						select_flag:false
					},
					{
						img:"/01.jpg",
						name:"XXX",
						amount:10,
						price:10,
						select_flag:false
					},
					{
						img:"/01.jpg",
						name:"XXX",
						amount:10,
						price:10,
						select_flag:false
					},
					{
						img:"/01.jpg",
						name:"XXX",
						amount:10,
						price:10,
						select_flag:false
					},
					{
						img:"/01.jpg",
						name:"XXX",
						amount:10,
						price:10,
						select_flag:false
					}
				],
				totalPrice:0,
				chkall:false,
				selected:0,
				isedit:false
			}
		},
		methods:{
			calTotalPrice:function(){	
				this.totalPrice=0;
				this.selected=0;			
				for (var i = 0; i < this.items.length; ++i) {
					if (this.items[i].select_flag) {
						this.selected+=1;
						this.totalPrice+=this.items[i].price;
					};
				};
				this.chkSelectAll();				
			},
			select_All:function(){
				for (var i = 0; i < this.items.length; ++i) {
					this.items[i].select_flag=this.chkall;
				};
				this.calTotalPrice();	
			},
			chkSelectAll:function(){
				this.chkall=true;
				for (var i = 0; i < this.items.length; ++i) {
					if (!this.items[i].select_flag) {
						this.chkall=false
						break;
					};
					
				};
			}
		}
	}

</script>

<style type="text/css" lang="less">
	#edit{
		font-size: 18px;		
	}
	.content{
		.goods{
			display: flex;
			height: 100px;

			.itemChoose{
				flex:1;
			}

			.itemImg{
				flex:1;
			}

			.itemInfo{
				flex:20;
			}

			.itemName{
				text-align: left;
				font-size: 24px;
			}

			.itemPrice{
				font-size: 18px;
				display: inline-block;
				float: left;
			}

			.itemAmount{
				display: inline-block;
				float: right;
				*{
					font-size: 18px;
				};
				input{
					width:28px;
				}				
			}
		}
	}
	#summary{
		font-size: 16px;
		#totalPrice{
			font-size:16px;
			display: inline-block;
		}
		#btnCommit{
			float: right;
			font-size:16px;
			border-radius: 5px;
			background-color: red;
		}
	}
</style>