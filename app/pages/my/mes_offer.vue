<template>
<div class="offer">
<header1 title="我能供应">
<router-link to="/message" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
 <form action="" name="" class="offer_form">
<div>
 <label>行业类型:
  <input type="password" name="" class="mar_one">
 </label>
</div>
<div class="my_offer">
<label>我能供应:
  <input type="" name="">
</label>
</div>
<textarea name="" rows="7" cols="" class="offer_decs">描述</textarea>
<span class="offer_img">图片</span>
<span class="upfile">
    <img src="./img/addfile.png" >
    <input type="file" name="" class="addfile">
</span>
<label><input class="offer_sure" type="submit" name="" value="确定"></label>
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
.offer_form {
  display: block;
  margin:25px auto;
  width: 86%;  
}
.offer_form div{
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  color: #808080;
}
.offer_form .my_offer{
  margin-top:15px;
}

.offer_form div label{
  display: block;
  padding: 0 10px;
  font-size: 14px;
}
.offer_form label input{
  padding: 12px;
  border: none;
  width: 60%;
  font-size: 16px;
  margin-left: 30px;
}
.offer_form .text_width{
  width: 30%;
}
.offer_form .mar_one{
  margin-left: 44px;
}
.offer_decs{
  width: 100%;
  margin-top:15px;
  padding: 10px;
  font-size: 14px;
  color: #808080;
  line-height: 1.3;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  box-sizing: border-box;
}
.offer_img{
  display: block;
  padding: 10px 0;
  color: #808080;
  font-size: 14px;
}
.upfile{
  position: relative;
  top: 0;
  left: 0;
}
.upfile img{
  width: 60px;
}
.upfile input {
    position: absolute;
    left: 0;
    width: 60px;
    height: 60px;
    opacity: 0;
}
.offer_form .offer_sure{
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












