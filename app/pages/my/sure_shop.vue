<template>
<div class="sure_shop">
<header1 title="订单详情">
<router-link to="/order/wait_shouhuo" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<div class="address_box">
<ul>
  <li>
    <span>刘晓心</span>
    <span class="tel">13562021254</span>
  </li>
  <li>
    <span>广州市天河区东圃时代TIT广场</span>
  </li>
</ul>
</div>
<ul class="detail" id="deta_top">
  <li>
    <span>购买商品</span>
    <span class="wait wait_color">待收货</span>
  </li>
  <li class="pic">
   <span><img src="./img/dingdan1.png"></span>
   <span class="pic_desc">坚果特产山核桃奶油味碧根...</span>
   <span class="norm">规格:&nbsp&nbsp&nbsp1盒6片</span>
   <span class="wait_money">￥29.50</span>
   <div class="sum">
    <span>x</span>
    <span>2</span>
   </div>
  </li>
  <li class="bei_text">
   <span>运费:</span>
   <span class="yunfei">￥10</span>
  </li> 
  <li class="bei_text">
   <span>备注:</span>
  </li> 
</ul>
 <ul class="order_mes">
  <li class="xinxi">订单信息</li>
  <li class="bianhao">订单编号:&nbsp&nbspSKYJ12525441</br>
  创建时间:2015-10-02&nbsp&nbsp&nbsp12:20</br>
  付款时间:2015-10-02&nbsp&nbsp&nbsp12:36</br>
  物流信息:&nbsp&nbsp申通物流&nbsp&nbsp&nbsp&nbsp5221255142
  </li>
 </ul>
<div class="bottom_mark">
  <router-link to="/shouhuo_ok">
  <span class="shop_pay">确认收货</span>
</router-link>
</div>
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
.sure_shop ul{
  background: #fff;
}
</style>












