<template>
<div class="my_order">
<header1 title="我的订单">
<router-link to="/my" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<ul class="catalog">
  <li><router-link to="wait_pay">待付款</router-link></li>
  <li><router-link to="wait_fahuo">待发货</router-link></li>
  <li><router-link to="wait_shouhuo">待收货</router-link></li>
  <li><router-link to="order_over">已完成</router-link></li>
  <li><router-link to="after_sale">退货/售后</router-link></li>
</ul>
<router-view></router-view >
</template>

<script type="text/javascript">
import Header1 from '../../component/header/header.vue';
export default{
	components:{
		Header1
	}
}
</script>
<style type="text/css">
.my_order ul{
  background: #fff;
}
.catalog{
  border-bottom: 1px solid #dbdbdb;
  overflow: hidden;
  width:100%;
   display: flex;
  justify-content: space-around;
}
.catalog .nav_active{
  border-bottom: 2px solid #f29004;
}
.catalog li{
  float: left;
  margin-left: 2%;
}
.catalog li a{
  display: inline-block;
  padding: 12px 4px;
  color: #333333;
  font-size: 16px;
}
</style>












