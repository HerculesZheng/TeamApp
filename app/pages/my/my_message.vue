<template>
<div class="my_message">
<header1 title="基本资料">
 <router-link to="/my" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<ul class="message_top">
  <li>
   <router-link to="">
      <span>头像</span>
      <span class="iconfont icon-next iconfont_right"></span>
      <span class="img_box"><img src="./img/touxiang.png"></span>
   </router-link>
  </li>
  <li>
   <router-link to="/mes_name">
      <span>姓名</span>
      <span class="iconfont icon-next iconfont_right"></span>
      <span class="message_text">李晓晓</span>
   </router-link>
  </li>
  <li>
   <router-link to="">
      <span>会员标志</span>
      <span class="message_logo">
        <img src="./img/zhuanshi.png">
      </span>
   </router-link>
  </li>
  <li>
   <router-link to="/mes_contact">
      <span>联系方式</span>
      <span class="iconfont icon-next iconfont_right"></span>
      <span class="message_text">136****6688</span>
   </router-link>
  </li>
</ul>

<ul class="message_server">
  <li>
   <router-link to="">
      <span>修改密码</span>
      <span class="iconfont icon-next iconfont_right"></span>
   </router-link>
  </li>
  <li>
   <router-link to="">
      <span>修改钱包密码</span>
      <span class="iconfont icon-next iconfont_right"></span>
   </router-link>
  </li>
  <li>
   <router-link to="">
      <span>我能供应</span>
      <span class="iconfont icon-next iconfont_right"></span>
   </router-link>
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
.head_left{
  float: left;
  padding: 0 14px;
  color:#fff; 
}
.my_message ul{
  background-color: #fff;
}
.message_top >li{
  font-size: 15px;
  overflow: hidden;
  border-bottom: 1px solid #dbdbdb;
  line-height: 18px;
}
.message_top >li:nth-child(1){
  line-height: 45px;
}
.message_top >li>a{
  color: #9f9f9f;
}
.message_top >li a span{
  display: inline-block;
  padding: 14px 10px;
}
.message_top >li a span:nth-child(1){
  padding: 14px 50% 14px 10px;
}
.message_top .img_box{
  float: right;
  padding: 3px 0;
}
.message_top >li .img_box img{
  width: 55px;
  padding: 6px 0;
}
.message_top .message_text{
  float: right;
  padding: 14px 0;
}
.message_top .message_logo{
  float: right;
  padding: 12px 34px;
}
.message_logo img{
  width: 28px;
}
.message_server{
  margin-top: 12px;
}
.message_server >li{
  font-size: 15px;
  overflow: hidden;
  border-bottom: 1px solid #dbdbdb;
  line-height: 18px;
}
.message_server >li:first-child{
  border-top: 1px solid #dbdbdb;
}
.message_server >li>a{
  color: #9f9f9f;
}
.message_server >li a span{
  display: inline-block;
  padding: 14px 10px;
}
.message_server >li a span:first-child{
  padding: 14px 60% 14px 10px;
}
.bottom_mark{
  width: 100%;
  height: 51px;
  background: #f2f2f2;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 5;
}
</style>












