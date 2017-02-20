<template>
<div class="about_we">
<header1 title="关于我们">
<router-link to="/more" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
 <div class="we">关于我们</div>
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
.we{
  padding: 20px 12px;
  color: #333333;
}
</style>












