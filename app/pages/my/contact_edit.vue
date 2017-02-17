<template>
<div class="contact_edit">
<header1 title="联系方式">
<router-link to="/mes_contact" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
 <form action="" name="" class="edit_form">
<div>
<label class="edit_tel">
  <input type="" name="" placeholder="手机号码">
</label>
<label>
  <input type="" name="" placeholder="验证码">
  <span>获取验证码</span>
</label>
</div>
<label class="edit_sure" type="submit" name="">确定</label>
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
.edit_form {
  display: block;
  margin: auto;
  width: 86%;
  margin-top: 20px;
  
  
}
.edit_form div{
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
}
.edit_form div>label:first-child{
  border-bottom: 1px solid #dbdbdb;
}
.edit_form input{
  padding: 12px;
  border: none;
  width: 60%;
  font-size: 16px;
}
.edit_form span{
  display: inline-block;
  background: #26c08a;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  padding: 6px;
  color: #fff;
}
.edit_form label{
  display: block;
}
.edit_sure{
  width: 80%;
  margin: auto;
  margin-top: 40px;
  padding: 12px;
  background: #f29004;
  color: #fff;
  text-align: center;
  border-radius: 5px;
}
</style>












