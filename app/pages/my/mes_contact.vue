<template>
<div class="mes_contact">
<header1 title="联系方式">
<router-link to="/message" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
 <router-link to="/contact_edit" slot="left" class="leaguer_right">编辑</router-link>
</header1>
 <input type="" name="" class="contact_tel" value="1361257...">
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
.contact_tel{
  display: block;
  margin: 20px auto;
  width: 86%;
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  font-size: 16px;
}
</style>












