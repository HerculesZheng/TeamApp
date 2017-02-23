<template>
<div class="com_problem">
<header1 title="常见问题">
<router-link :to="{name:'help'}" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
 <ul class="answer">
   <li>1.如何修改收货地址</li>
   <li>答:在个人中心-送货地址进入可修改详细地址</li>
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
.answer{
  margin: 14px;
}
.answer li{
  margin-bottom: 10px;
  color: #6a6a6a;
}
</style>












