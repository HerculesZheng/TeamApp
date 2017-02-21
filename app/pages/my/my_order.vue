<template>
<div class="my_order">
<header1 title="我的订单">
<router-link to="/my" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<ul class="catalog">
  <li class="active"><router-link to="/order">待付款</router-link></li>
  <li><router-link to="/wait_fahuo">待发货</router-link></li>
  <li><router-link to="/wait_shouhuo">待收货</router-link></li>
  <li><router-link to="/order_over">已完成</router-link></li>
  <li><router-link to="/after_sale">退货/售后</router-link></li>
</ul>
<ul class="detail">
  <li>
    <span>订单编号:</span>
    <span>SHYJ2552</span>
    <span class="wait">待付款</span>
  </li>
  <li class="pic">
   <span><img src="./img/dingdan1.png"></span>
   <span class="pic_desc">坚果特产山核桃奶油味碧根...</span>
   <span class="wait_money">￥29.50</span>
   <div class="sum">
    <span>x</span>
    <span>2</span>
   </div>
  </li>
  <li>
   <span>共</span>
   <span>2</span>
   <span>件</span>
   <span>合计:</span>
   <span>￥13</span>
   <div class="flo_right">
     <router-link to=""><button class="quxiao">取消订单</button></router-link>
     <router-link to="/go_zhifu"><button class="zhifu">立即支付</button></router-link>
   </div>
  </li> 
</ul>

<ul class="detail">
  <li>
    <span>订单编号:</span>
    <span>SHYJ2552</span>
    <span class="wait">待付款</span>
  </li>
  <li class="pic">
   <span><img src="./img/dingdan1.png"></span>
   <span class="pic_desc">坚果特产山核桃奶油味碧根...</span>
   <span class="wait_money">￥29.50</span>
   <div class="sum">
    <span>x</span>
    <span>2</span>
   </div>
  </li>
  <li>
   <span>共</span>
   <span>2</span>
   <span>件</span>
   <span>合计:</span>
   <span>￥13</span>
   <div class="flo_right">
     <router-link to=""><button class="quxiao">取消订单</button></router-link>
     <router-link to="/go_zhifu"><button class="zhifu">立即支付</button></router-link>
   </div>
  </li>
</ul>
<div class="bottom_mark"></div>
</div>
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
.catalog .active{
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
.detail{
  margin-top: 12px;
}
.detail li{
  border-bottom: 1px solid #dbdbdb;
  padding: 0 14px;
  overflow: hidden;
}
.detail li span{
  display: inline-block;
  padding: 10px 0;
  color: #484848;
}
.detail .wait{
  float: right;
  color: #f29004;
}
.detail .pic{
  padding: 12px;
}
.pic span{
  float: left;
}
.pic > span:first-child{
  display: inline-block;
  border: 1px solid #dbdbdb;
}
.pic span img{
  width: 70px;
  padding: 1px;
}
.pic .pic_desc{
  display: block;
  padding: 2px 15px; 
}
.pic .wait_money{
   padding: 10px 15px;
  color: #de0000;
}
.pic .sum{
   float: right;
   margin-top: 40px;
}
.pic .sum span{
  display: inline-block;
  padding: 0 2px;
}
.detail .flo_right{
  display: inline-block;
  float: right;
  margin-top: 4px;
}
.flo_right a{
  display: inline-block;

}
.flo_right button{
  background: #fff;
  padding: 8px 18px;
  border-radius: 5px;
}
.flo_right .quxiao{
  color: #999999;
  border: 1px solid #999999;
  margin-right: 8px;
}
.flo_right .zhifu{
  color: #f29004;
  border: 1px solid #f29004;

}
</style>












