<template>
<div class="leag_ok">
<header1 title="支付成功">
<router-link :to="{name:'leag_pay'}" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<ul class="pay_ok">
  <li><img src="./img/ok.png"></li>
  <li class="vip_ok">恭喜你成为VIP会员!</li>
  <li class="continue">继续购物</li>
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
.pay_ok{
  margin:50px auto;
  text-align: center;
}
.pay_ok img{
  width: 90px;
}
.pay_ok .vip_ok{
  margin-top: 25px;
  color: #333333;
}
.pay_ok .continue{
  display:block;
  width: 36%;
  text-align: center;
  color: #fff;
  font-size: 16px;
  padding: 12px 0;
  margin: 45px auto;
  background: #ee4147;
  border: 1px solid #dbdbdb;
  border-radius: 6px;
}
</style>












