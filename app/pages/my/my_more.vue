<template>
<div class="my_more">
<header1 title="更多">
<router-link to="/my" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<ul class="message_server">
  <li>
   <router-link :to="{name:'about'}">
      <span>关于我们</span>
      <span class="iconfont icon-next iconfont_right"></span>
   </router-link>
  </li>
  <li>
   <router-link :to="{name:'help'}">
      <span>帮助中心</span>
      <span class="iconfont icon-next iconfont_right"></span>
   </router-link>
  </li>
  <li>
   <router-link :to="{name:'suggest'}">
      <span>意见反馈</span>
      <span class="iconfont icon-next iconfont_right"></span>
   </router-link>
  </li>
  <li>
   <a href="javascript:void;">
      <span>更新版本</span>
      <span class="iconfont_right">5.02</span>
   </a>
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
.my_more ul{
  background: #fff;
}
</style>












