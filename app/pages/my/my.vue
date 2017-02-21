<template>
<div class="my">
<!-- <header1 title="我的"></header1> -->
<div class="my_box">
<div box_top>
<img src="./img/my_bg1.png" class="top_bg">
<ul class="top_message">
<li class="touxiang"><img src="./img/touxiang.png"></li>
<li class="dengji"><img src="./img/zhuanshi.png"></li>
<li class="name">凯丽_Kylie</li>
<li class="vip">Vip会员</li>
</ul>
</div>
<ul class="con">
    <li>
    <router-link to="/message">
      <span class="iconfont icon-gengduo iconfont_left"></span>
      <span>基本资料</span>
      <span class="iconfont icon-next iconfont_right"></span>
    </router-link>  
    </li>
    <li>
    <router-link to="/order">
      <span class="iconfont icon-dingdan iconfont_left"></span>
      <span>我的订单</span>
      <span class="iconfont icon-next iconfont_right"></span>  
    </router-link>  
    </li>
    <li>
    <router-link to="/collection">
      <span class="iconfont icon-shoucang iconfont_left"></span>
      <span>我的收藏</span>
      <span class="iconfont icon-next iconfont_right"></span> 
    </router-link>   
    </li>
    <li>
    <router-link to="/purse">
      <span class="iconfont icon-qianbao iconfont_left"></span>
      <span>我的钱包</span>
      <span class="iconfont icon-next iconfont_right"></span> 
    </router-link>  
    </li>
    <li>
    <router-link to="/address">
      <span class="iconfont icon-dizhi iconfont_left"></span>
      <span>收货地址</span>
      <span class="iconfont icon-next iconfont_right"></span>
    </router-link> 
    </li>
    <li class="bottom_border">
    <router-link to="/leaguer">
      <span class="iconfont icon-huiyuan iconfont_left "></span>
      <span>升级会员</span>
      <span class="iconfont icon-next iconfont_right"></span> 
    </router-link>  
    </li>
   </ul>

   <ul class="other">
    <li>
    <router-link to="/more">
      <span class="iconfont icon-iconfontshezhichilun iconfont_left"></span>
      <span>更多</span>
      <span class="iconfont icon-next iconfont_right"></span>  
    </router-link> 
    </li>
    <li class="bottom_border">
    <div>
      <span class="iconfont icon-zhuxiao iconfont_left "></span>
      <span>注销</span>
      <span class="iconfont icon-next iconfont_right"></span>
    </div>
    </li>
   </ul>

   <div class="logout_panel">
    <div>确定退出吗？</div>
    <span class="logout_yes">确定</span>
    <span class="logout_no">取消</span>
   </div>
   <div class="main_mark"></div>
</div> 
</div>
</template>

<script type="text/javascript">
 import $ from "../../common/js/jquery-3.1.1.min.js";

export default{
  mounted:function(){  
    $(".bottom_border").on("click",function(){ 
          $(".logout_panel").show();
          $(".main_mark").show();
         
 });
    $(".main_mark").on("click",function(){
          $(".logout_panel").hide();
          $(".main_mark").hide();     
 });
   $(".logout_no").on("click",function(){
          $(".logout_panel").hide();
          $(".main_mark").hide();     
 });
  }
}
</script>
<style type="text/css">
body{
  background: #f2f2f2;
}
.box_top{
  position: relative;
  top: 0;
  left: 0;
}
.top_bg{
  max-width: 100%;
}
.top_message{
  list-style: none;
  position: absolute;
  top: 60px;
  left: 50%;
  margin-left: -50px;
  text-align: center;
  color: white;
}
.touxiang img{
  width: 100px;
}
.dengji{
  position: absolute;
  left: 60%;
  top: 80px;
}
.dengji img{
  width: 28px;
}
.name{
  padding: 8px;
}
.vip{
  font-size: 14px;
  padding: 4px;
  border: 1px solid white;
  border-radius: 18px/18px;
}
.con{
  margin-top: 18px;
  background-color: #fff;
}
.con >li{
  font-size: 15px;
  overflow: hidden;
  border-top: 1px solid #dbdbdb;
}
.con >li>a{
  color: #1a1a1a;
}
.con >li a span{
  display: inline-block;
  padding: 14px 0;
}
.con >li span:nth-child(2){
  width: 70%;
}
.iconfont_left{
  margin: 0 12px;
}
.iconfont_right{
  float: right;
  margin-right: 8px;
}
.bottom_border{
  border-bottom: 1px solid #dbdbdb;
}
.icon-gengduo{
  color: #fa627b;
}
.icon-dingdan{
  color: #96dd8e;
}
.icon-shoucang{
  color: #fc882a;
}
.icon-qianbao{
  color: #ea7a7a;
}

.icon-dizhi{
  color: #7fc9f8;
}
.icon-huiyuan{
  color: #f8b71a;
}
.other{
  margin-top: 14px;
  background-color: #fff;
}
.other>li{
  font-size: 14px;
  overflow: hidden;
  border-top: 1px solid #dbdbdb;
}
.other >li>a,.other li div{
  color: #1a1a1a;
}
.other >li a span{
  display: inline-block;
  padding: 14px 0;
}
.other >li div span{
  display: inline-block;
  padding: 14px 0;
}
.other >li span:nth-child(2){
  width: 70%;
}
.icon-iconfontshezhichilun{
  color: #aa9186;
}
.icon-zhuxiao{
  color: #ff5555;
}
.logout_panel{
  width: 90%;
  background: #fff;
  position: absolute;
  top: 310px;
  left: 5%;
  z-index: 10;
  display: none;
}
.logout_panel div{
  padding: 10px 3%;
  border-bottom: 1px solid #dbdbdb;
}
.logout_panel span{
  display: inline-block;
  box-sizing: border-box;
  width: 47%;
  padding: 10px 3%;
  text-align: center;
}
.logout_panel .logout_yes{
  border-right: 1px solid #dbdbdb;
 }
 .main_mark{
  width: 100%;
  height: 736px;
  background: gray;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display: none;
 }
</style>












