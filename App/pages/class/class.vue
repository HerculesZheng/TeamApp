<template>
	<div class="wrap">
		<heading title="分类"></heading>
		<div id="ctrl-panel">
			<button @click="bol=!bol" >{{showName()}}</button><button @click="sortByPrice()">价格从低到高</button><button @click="sortBySales()">销量优先</button>
		</div>
		<ul v-if="bol">
			<li v-for="(classfy,i) in classes"><button @click="chooseClassfy(i)">{{classfy.name}}</button></li>
		</ul>
		<ul>
			<li v-for="item in items">	
				<router-link to="../../common/itemDetail">
					<img v-bind:src="item.img" alt="">			
					<span id="">
						{{item.discountPrice}}元
					</span>
					<span id="">
						{{item.originPrice}}元
					</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import Heading from '../../component/header/header.vue';
	export default{
		components:{
			Heading
		},
		data:function(){
			return{
				items:[
					{
						img:"/1.jpg",
						discountPrice:"19",
						originPrice:"29",
						sales:"500"
					},
					{
						img:"/1.jpg",
						discountPrice:"18",
						originPrice:"29",
						sales:"300"
					},
					{
						img:"/1.jpg",
						discountPrice:"17",
						originPrice:"29",
						sales:"560"
					},
					{
						img:"/1.jpg",
						discountPrice:"16",
						originPrice:"29",
						sales:"980"
					}
				],
				classes:[
					{name:"生活食品",active:true},
					{name:"生活用品",active:false},
					{name:3,active:false},
					{name:4,active:false},
					{name:5,active:false},
					{name:6,active:false},
					{name:7,active:false},
					{name:8,active:false}
				],
				bol:false
			}
		},
		methods:{
			sortByPrice:function(){
				this.items.sort(function(a,b){
					return a.discountPrice - b.discountPrice
				})
			},
			sortBySales:function(){
				this.items.sort(function(a,b){
					return b.sales - a.sales
				})
			},
			chooseClassfy:function(index){
				this.bol=!this.bol;
				for (var i = 0; i < this.classes.length; ++i) {
					this.classes[i].active=false;
				};
				this.classes[index].active=true;
			},
			showName:function(){
				for (var i = 0; i < this.classes.length; ++i) {
					if (this.classes[i].active) {
						return this.classes[i].name
					};
				};				
			}
		}
	}
</script>