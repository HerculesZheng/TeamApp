<template>
<div class="suggest">
<header1 title="意见反馈">
<router-link to="/more" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
 <textarea name="" rows="10" class="suggest_text"></textarea>
 <span class="suggest_sure">确认</span>
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
.suggest_text{
  width: 100%;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  padding: 12px;
  box-sizing: border-box;
}
.suggest_sure{
  display:block;
  width: 86%;
  text-align: center;
  color: #fff;
  font-size: 16px;
  padding: 14px 0;
  margin: 35px auto;
  background: #f29004;
  border: 1px solid #dbdbdb;
  border-radius: 6px;
}
</style>












