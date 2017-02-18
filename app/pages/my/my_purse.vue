<template>
<div class="my_purse">
<header1 title="我的钱包">
<router-link to="/my" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
<router-link to="/bill" slot="left" class="purse_right">账单</router-link>
</header1>
<ul class="purse_box">
  <li><img src="./img/purse.png"></li>
  <li>我的余额</li>
  <li>￥88.50</li>
</ul>
<form action="" method="post" class="form_box">
 <ul class="pay">
  <li>
   <span class="iconfont icon-zhifubao"></span>
   <span>支付宝</span>
   <label for="paymoney">
   <input type="radio" name="paymoney" value="支付宝">
   </label>
  </li>
  <li>
   <span class="iconfont icon-weixin"></span>
   <span>微信支付</span>
   <label for="paymoney">
   <input type="radio" name="paymoney" value="微信支付" class="aa">
   </label>
  </li>
</ul>
<router-link to="/zhi_add">
<input type="submit" value="充值" class="tijiao" />
  </router-link>
</form>
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
.purse_right{
  float: right;
  padding: 0 14px;
  color: #fff;
}
.purse_box{
  padding: 50px 0;
  text-align: center;
}
.purse_box li{
  margin-bottom: 4px;
}
.purse_box li img{
  width: 75px;
}
.purse_box li:nth-child(2){
  margin-top: 18px;
  color: #a0a0a0;
}
.purse_box li:nth-child(3){
  font-size: 40px;
}
.pay{
  width: 94%;
  margin: auto;
  border: 1px solid #dbdbdb;
  background: #fff;

}
.pay li{
  margin: 0px 10px;
  line-height: 50px;
}
.pay li:first-child{
  border-bottom: 1px solid #dbdbdb;
}
.pay li span:first-child{
  padding: 0 10px;
  font-size: 26px;
}
.icon-zhifubao{
  color: #30a7f3;
}
.icon-weixin{
  color: #6bcc63;
}
.pay li label{
  float: right;
  margin-right: 16px;
  width: 20px;
  height: 50px;
}
.tijiao{
  display: block;
  color: #fff;
  font-size: 16px;
  padding: 14px 160px;
  margin: 60px auto;
  background: #26c08a;
  border: 1px solid #dbdbdb;
  border-radius: 6px;
}
</style>












