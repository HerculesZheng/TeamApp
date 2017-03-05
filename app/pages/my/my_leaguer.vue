<template>
<div class="my_leaguer">
<header1 title="升级会员">
<router-link to="/my" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
 <router-link :to="{name:'leag_pay'}" slot="left" class="leaguer_right">充值</router-link>
</header1>
<div class="leaguer_desc">
 会员等级说明<br/>
 1.VIP会员说明<br/>
 2.股东会员说明
</div>
<div class="leaguer_vip">
<span></span>
<span>VIP会员</span>
<span></span>
<ul>
  <li>1.说明文字</li>
  <li>2.说明文字</li>
  <li>3.说明文字</li>
</ul>
</div>
<div class="leaguer_vip">
<span></span>
<span>股东会员</span>
<span></span>
<ul>
  <li>1.说明文字</li>
  <li>2.说明文字</li>
  <li>3.说明文字</li>
</ul>
</div>
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
.leaguer_right{
  float: right;
  padding: 0 14px;
  color: white;
}
.leaguer_desc{
  padding: 20px 30px 50px;
  color: #a5a5a5;
  line-height: 1.3;
  font-size: 16px;
}
.leaguer_vip{
  text-align: center;
  margin-bottom: 50px;
}
.leaguer_vip span{
  display: inline-block;
  width: 32%;
  border: 1px solid #dbdbdb;
  vertical-align: middle;
  /*background: red*/
}
.leaguer_vip span:nth-child(2){
  font-size: 20px;
  width: 24%;
  border: none;
  color: #a5a5a5;
  /*padding: 10px 0;*/
}
.leaguer_vip ul{
  padding: 26px 0;
}
.leaguer_vip ul li{
  padding: 2px 0;
  color: #333333;
}
</style>












