<template>
<div class="order_over">
<header1 title="我的订单">
<router-link to="/my" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<ul class="catalog">
  <li><router-link to="/order">待付款</router-link></li>
  <li><router-link to="/wait_fahuo">待发货</router-link></li>
  <li><router-link to="/wait_shouhuo">待收货</router-link></li>
  <li class="active"><router-link to="/order_over">已完成</router-link></li>
  <li><router-link to="/after_sale">退货/售后</router-link></li>
</ul>
<ul class="detail">
  <li>
    <span>订单编号:</span>
    <span>SHYJ2552</span>
    <span class="wait">待评价</span>
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
     <button class="delete">删除</button>
     <router-link to="go_comments"><button class="zhifu go_comment">去评价</button></router-link>
   </div>
  </li> 
</ul>

<ul class="detail">
  <li>
    <span>订单编号:</span>
    <span>SHYJ2552</span>
    <span class="wait over_color">已完成</span>
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
     <button class="delete">删除</button>
     <router-link to="yi_comments"><button class="zhifu go_comment" id="over_comment">已评价</button></router-link>
     <!-- <button id="over_comment">已评价</button> -->
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
.order_over ul{
  background: #fff;
}
.detail .over_color{
  color: #999999;
}
.flo_right .delete{
  color: #999999;
  border: 1px solid #999999;
  margin-right: 8px;
  padding: 8px 30px;
}
.flo_right .go_comment{
  padding: 8px 24px;
}
#over_comment{
  color: #999999;
  border: 1px solid #999999;
  padding: 8px 24px;
}
</style>












