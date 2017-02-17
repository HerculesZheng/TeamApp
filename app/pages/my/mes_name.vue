<template>
<div class="message_name">
<header1 title="姓名">
<router-link to="/message" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<form action="" name="" class="name_form">
<label><input type="" name="" value="李晓晓"></label>
<div class="name_sure">确定</div>
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
.name_form label{
  display: block;
  margin-top: 20px;
}
.name_form label input{
  display: block;
  margin: auto;
  width: 86%;
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
}
.name_form .name_sure{
  width: 80%;
  margin: auto;
  margin-top: 80px;
  padding: 12px;
  background: #f29004;
  text-align: center;
  border-radius: 8px;
  color:#fff;
}
</style>












