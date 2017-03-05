<template>
<div class="mes_contact">
<header1 title="联系方式">
<router-link to="/message" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
 <span class="leaguer_right" slot="left" @click="bol=!bol"  v-show="!bol">编辑</span>
</header1>
 <div class="contact_tel" v-show="!bol">1361257...</div>


<form action="" name="" class="edit_form" v-show="bol">
<div>
<label>
  <input type="" name="" placeholder="手机号码">
</label>
<label>
  <input type="" name="" placeholder="验证码">
  <span>获取验证码</span>
</label>
</div>
<label><input class="edit_sure" type="submit" name="" value="确定" @click="bol=!bol"></label>
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
  data(){
    return{
        bol:false,
    }
  }
  
}

</script>
<style type="text/css">
.contact_tel{
  display: block;
  margin: 20px auto;
  width: 80%;
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  font-size: 16px;
}
.edit_form {
  display: block;
  margin:25px auto;
  width: 86%;
  position: absolute;
  top: 56px;
  left: 7%; 
/*  display: none; */
}
.edit_form div{
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
}
.edit_form div{
  overflow: hidden;
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
  float: right;
  margin: 3px 2%;
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












