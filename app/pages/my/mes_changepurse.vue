<template>
<div class="changepurse">
<header1 title="修改钱包密码">
<router-link to="/message" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
 <form action="" name="" class="purse_form">
<div>
 <label>新密码
  <input type="password" name="" placeholder="6-20字符" class="mar_one">
 </label>
 <label>确认密码
  <input type="password" name="" placeholder="6-20字符">
 </label>
</div>
<div class="purse_tel">
<label>手机号码
  <input type="" name="">
</label>
<label>验证码
  <input type="" name="" class="mar_one text_width">
  <span class="pass_get">获取验证码</span>
</label>
</div>
<span class="tip">注意：密码不得填空格，可由英文字母和数字组成</span>
<label><input class="purse_sure" type="submit" name="" value="确定"></label>
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
.purse_form {
  display: block;
  margin:25px auto;
  width: 86%;  
}
.purse_form div{
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  color: #808080;
}
.purse_form div >label:first-child{
  border-bottom: 1px solid #dbdbdb;
}
.purse_form .purse_tel{
  margin-top:15px;
}

.purse_form div label{
  display: block;
  padding: 0 10px;
  font-size: 14px;
}
.purse_form label input{
  padding: 12px;
  border: none;
  width: 60%;
  font-size: 16px;
  margin-left: 30px;
}
.purse_form .text_width{
  width: 30%;
}
.purse_form .mar_one{
  margin-left: 44px;
}
.purse_form .tip{
  display: block;
  margin-top: 15px;
  color: #808080;
  font-size: 12px;
}
.purse_form .pass_get{
  display: inline-block;
  background: #26c08a;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  padding: 6px;
  color: #fff;
  margin-left: 30px;
}
.purse_form .purse_sure{
  display: block;
  width: 90%;
  margin: auto;
  padding: 12px;
  background: #f29004;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  position: absolute;
  bottom: 51px;
}
</style>












