<template>
<div class="changepass">
<header1 title="修改密码">
<router-link to="/message" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
 <form action="" name="" class="pass_form">
<div>
 <label class="edit_tel">当前密码
  <input type="password" name="" placeholder="6-20字符">
 </label>
</div>
<div class="newpass">
<label>新密码
  <input type="password" name="" placeholder="6-20字符" class="mar_left">
</label>
<label>确认密码
  <input type="password" name="" placeholder="6-20字符">
</label>
</div>
<span class="tip">注意：密码不得填空格，可由英文字母和数字组成</span>
<label><input class="pass_sure" type="submit" name="" value="确定"></label>
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
.pass_form {
  display: block;
  margin:25px auto;
  width: 86%;  
}
.pass_form div{
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  color: #808080;
}
.pass_form .newpass >label:first-child{
  border-bottom: 1px solid #dbdbdb;
}
.pass_form .newpass{
  margin-top:15px;
}

.pass_form div label{
  display: block;
  padding: 0 10px;
  font-size: 14px;
}
.pass_form label input{
  padding: 12px;
  border: none;
  width: 50%;
  font-size: 16px;
  margin-left: 30px;
}
.pass_form .mar_left{
  margin-left: 46px;
}
.pass_form .tip{
  display: block;
  margin-top: 15px;
  color: #808080;
  font-size: 12px;
}
.pass_form .pass_sure{
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












