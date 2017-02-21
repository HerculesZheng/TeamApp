<template>
<div class="leag_pay">
<header1 title="充值">
<router-link to="/purse" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<form action="" method="post" class="form_box">
 <ul class="zhifu_pay">
  <li>
   <span class="iconfont icon-zhifubao zhi_img"></span>
   <span class="zhi_text">支付宝</span>
  </li>
  <li>
   <label for="paymoney">金额
     <input type="" name="paymoney" id="paymoney" placeholder="请输入金额" class="sum_money">
   </label>
  </li>
</ul>
<input type="submit" value="下一步" class="zhi_next" />
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
.zhifu_pay{
  margin: 15px auto;
  border-bottom: 1px solid #dbdbdb;
  background: #fff;

}
.zhifu_pay li{
  border-top: 1px solid #dbdbdb;
  line-height: 40px;
}
.zhifu_pay .zhi_img{
  display: inline-block;
  padding: 2px 6px 2px 14px;
  font-size: 26px;
  vertical-align: middle;
}
.zhi_text{
  font-size: 14px;
}
.icon-zhifubao{
  color: #30a7f3;
}
.zhifu_pay li label{
  display: inline-block;
  padding: 2px 14px 2px 14px;
  font-size: 14px;
  vertical-align: middle;
  color: #808080;
}
.sum_money::-webkit-input-placeholder{   
   color: #1a1a1a;
}  
.zhifu_pay li input{
  display: inline-block;
  padding: 8px 14px;
  font-size: 14px;
  vertical-align: middle;
  border: none;
}
.zhi_next{
  display: block;
  color: #fff;
  font-size: 16px;
  padding: 14px 160px;
  margin: 45px auto;
  background: #26c08a;
  border: 1px solid #dbdbdb;
  border-radius: 6px;
}
</style>












