<template>
<div class="leag_pay">
<header1 title="订单详情">
<router-link to="/leaguer" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<div class="shop_box">
  <div class="shop_pay">
   <span class="left">购买商品</span>
   <span class="right">待付款</span>
  </div>
  <div class="shop_decs">
     <div class="shop_img">
       <img src="./img/zhuanshi.png">
     </div>
     <div class="shop_text">
       <div>升级为VIP会员</div>
       <div>期限为一年</div>
       <div>￥100</div>
     </div>
  </div> 
</div>
<div class="pay_now">立即支付</div>
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
.shop_box{
  background: white;
  border-bottom: 1px solid #dbdbdb;
}
.shop_pay{
  width: 90%;
  margin: auto;
  border-bottom: 1px solid #dbdbdb;
  overflow: hidden;
}
.shop_pay .left{
  float: left;
  margin: 12px 0;
  color: #666666;
}
.shop_pay .right{
  float: right;
  margin: 12px 0;
  color: #666666;
}
.shop_decs{
  width: 90%;
  margin: auto;
}
.shop_decs .shop_img{
  display: inline-block;
  margin: 20px 0;
  border: 1px solid #dbdbdb;
  vertical-align: top;
}
.shop_decs img{
  width: 90px;
  background: #f2f2f2;
}
 .shop_decs .shop_text{
  display: inline-block;
  margin: 20px 5px;
}
.shop_text div{
  margin-bottom: 8px;
}
.shop_text div:nth-child(2){
  font-size: 14px;
  color: #757575;
}
.shop_text div:nth-child(3){
  font-size: 14px;
  color: #de0000;
}
.pay_now{
  width: 80%;
  text-align: center;
  color: #fff;
  font-size: 16px;
  padding: 14px 0;
  margin: 45px auto;
  background: #f29004;
  border: 1px solid #dbdbdb;
  border-radius: 6px;
}
</style>












