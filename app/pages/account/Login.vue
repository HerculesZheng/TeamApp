<template>
<div class="my_address">
<header1 title="登陆">
<router-link to="/my" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
 <div slot="left" class="leaguer_right">
 <router-link to="/login/register">注册</router-link>
</div>
</header1>
<div class="log_img">
  <img src="../my/img/denglu.png">
</div>
<form action="" name="" class="log_form">
 <div class="log_name">
   <label for="name" class="iconfont icon-denglu"></label>
   <input type="" name="name" id="name" placeholder="请输入账号/手机号">
 </div>
 <div class="log_pass">
   <label for="password" class="iconfont icon-suo"></label>
   <input type="" id="password" name="password" placeholder="请输入密码">
 </div>
 <router-link to="changePwd">忘记密码?</a>
 <span class="clear"></span>
 <button class="log_btn">登陆</button>
</form>
<div class="bottom_mark"></div>
</div>
</template>

<script type="text/javascript">
import Header1 from '../../component/header/header.vue';
export default{
	components:{
		Header1
	},
  methods:
  {

  }
}
</script>
<style type="text/css">
.log_img{
  width: 100%;
  text-align: center;
}
.log_img img{
  width: 100px;
  padding: 50px;
}
.log_form{
  width: 86%;
  margin: auto;
}
.log_form div{
  width: 100%;
  border:1px solid #dbdbdb;
  border-radius: 8px;
  margin-bottom: 15px;
  background: #fff;
}
.log_form div label{
  display: inline-block;
  padding: 6px 1% 6px 5%;
  font-size: 24px;
}
.log_form div input{
  display: inline-block;
  width: 80%;
  padding: 14px 0;
  font-size: 13px;
  border: none;
}
.log_form a{
  float: right;
  color: #f2ac63;
  font-size: 14px;
}
.clear{
  display: block;
  clear: both;
}
.log_btn{
  display: block;
  width: 100%;
  margin: 8px auto;
  padding: 10px 0;
  color: #fff;
  background: #f29004;
  font-size: 16px;
  border:1px solid #dbdbdb;
  border-radius: 8px;
}
</style>












