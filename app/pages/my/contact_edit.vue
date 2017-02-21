<template>
<div class="contact_edit">
<header1 title="联系方式">
<router-link to="/mes_contact" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
 <form action="" name="" class="edit_form">
<div>
<label>
  <input type="" name="" placeholder="手机号码">
</label>
<label>
  <input type="" name="" placeholder="验证码">
  <span>获取验证码</span>
</label>
</div>
<label><input class="edit_sure" type="submit" name="" value="确定"></label>
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
  margin:25px auto;
  width: 86%;   
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
  width: 50%;
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
.edit_form .edit_sure{
  display: block;
  width: 90%;
  margin: auto;
  margin-top: 40px;
  padding: 12px;
  background: #f29004;
  color: #fff;
  text-align: center;
  border-radius: 5px;
}
</style>












