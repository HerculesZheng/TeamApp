<template>
<div class="more_help">
<header1 title="帮助中心">
<router-link to="/more" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
 <ul class="consult">
   <li><img src="./img/kefu.png" class="protrait"></li>
   <li>周一至周五 8:00-6:00</li>
   <li>4000-8888-08</li>
   <li><img src="./img/bohao.png" class="phone"></li>
 </ul>
 <div class="question">常见问题</div>
 <ul class="message_server list_question">
  <li>
   <router-link to="/problem">
      <span>1.如何修改默认地址</span>
      <span class="iconfont icon-next iconfont_right"></span>
   </router-link>
  </li>
  <li>
   <router-link to="">
      <span>2.如何修改密码</span>
      <span class="iconfont icon-next iconfont_right"></span>
   </router-link>
  </li>
  <li>
   <router-link to="">
      <span>3.如何退款</span>
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
.consult{
  text-align: center;
  padding: 45px;
}
.consult{
  color: #808080;
}
.consult .protrait{
  width: 70px;
}
.consult li:nth-child(2){
  margin-top: 10px;
  font-size: 12px;
}
.consult li:nth-child(3){
  margin-bottom: 6px;
  font-size: 22px;
}
.consult .phone{
  width: 100px; 
}
.question{
  margin-left: 12px;
  color: #808080;
  font-size: 14px;
}
.list_question{
  background: #fff;
}
.list_question li span:first-child{
  color: #242424;
}
</style>












