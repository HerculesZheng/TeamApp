<template>
<div class="go_zhifu">
<header1 title="订单详情">
<router-link to="/order" slot="left" class="iconfont icon-shangyige head_left">
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
<ul class="detail">
  <li>
    <span>购买商品</span>
    <span class="wait wait_color">待付款</span>
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
  创建时间:2015-10-02&nbsp&nbsp&nbsp12:20</li>
 </ul>
<div class="bottom_mark">
<router-link to="/pay_yes">
  <span class="shop_pay">立即支付</span>
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
.go_zhifu ul{
  background: #fff;
}
.go_zhifu .address_box{
  margin-bottom: 0px;
}
.detail .wait_color{
  color: #999999;
}
.pic .norm{
  display: block;
  padding: 4px 150px 0 15px; 
  color: #757575;
  font-size: 12px;
}
.yunfei{
  float: right;
}
.bei_text{
  font-size: 14px;
  color: #666666;
}
.order_mes{
  height: 260px;
  margin-top: 12px;
  border-bottom: 1px solid #dbdbdb;
  border-top: 1px solid #dbdbdb;
}
.order_mes li{
  color: #333333;
  font-size: 14px;
}
.order_mes .xinxi{
  padding: 12px 12px;
   border-bottom: 1px solid #dbdbdb;
}
.order_mes .bianhao{
  padding: 14px 12px;
  line-height: 1.4;
}
.bottom_mark .shop_pay{
  display: block;
  width: 80%;
  margin: auto;
  background: #f29004;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
}
</style>












