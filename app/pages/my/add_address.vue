<template>
<div class="add_address">
<header1 title="收货地址">
<router-link to="/address" slot="left" class="iconfont icon-shangyige head_left"></router-link>
</header1>
 <form action="" name="" class="newaddress_box">
  <ul class="detail_infor">
  	<li>
  	  <label>收货人姓名<input type="text" name="" class="float_you"></label>
  	</li>
  	<li>
  	  <label>联系电话<input type="number" name="" class="float_you"></label>
  	</li>
  	<li>
  	  <span class="city">城市:
  	  <label>
  	   <input type="" name="" placeholder="选择 省级">
       <span class="iconfont icon-down"></span>
  	  </label>
  	  <label>
  	   <input type="" name="" placeholder="选择 城市">
       <span class="iconfont icon-down"></span>
  	  </label>
  	  <label>
  	   <input type="" name="" placeholder="选择 区" class="area">
       <span class="iconfont icon-down"></span>
  	  </label>
  	  </span>
  	</li>
  	<li>
  	  <label><input type="number" name="" class="detail_addr" placeholder="小区、街道、门牌等详细信息"></label>
  	</li>
  	<li>
  	  <span class="set">设为默认地址
  	    <img src="./img/switch.png" class="switch">
  	  </span>
  	</li>
  </ul>
 </form>
 <span class="address_yes">确 认</span>
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
.detail_infor{
	margin-top: 10px;
	background: #fff;
	border-top: 1px solid #dbdbdb;
}
.detail_infor li{
	border-bottom: 1px solid #dbdbdb;
	padding: 12px;
}
.detail_infor li>label{
	display: block;
	overflow: hidden;
	color: #666666;
}
.detail_infor li span{
	color: #666666;
}
.city input::-webkit-input-placeholder{   
   color: #666666;
}
.detail_addr::-webkit-input-placeholder{   
   color: #666666; 
}
.detail_infor li input{ 
	font-size: 16px;
	border: none;
}
.detail_infor li .city input{ 
	width: 18%;
	margin-left: 6%;
}
.detail_infor li .city .area{ 
	width: 14%;
}
.detail_infor li .float_you{ 
	float: right;
	width: 50%;
	margin-right: 20%;
}
.detail_infor li .detail_addr{ 
	width: 100%;
}
.detail_infor li .set{
	display: block;
	overflow: hidden;
	color: #666666;
}
.detail_infor li .switch{
	float: right;
	height: 21px;
}
.address_yes{
  display: block;
  width: 86%;
  padding: 12px;
  background: #f29004;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  box-sizing: border-box;
  position: absolute;
  bottom: 51px;
  left: 7%;
}
</style>












