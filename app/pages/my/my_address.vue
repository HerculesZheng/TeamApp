<template>
<div class="my_address">
<header1 title="收货地址">
<router-link to="/my" slot="left" class="iconfont icon-shangyige head_left"></router-link>
</header1>
<div class="address_box">
<ul>
  <li>
    <span>刘晓心</span>
    <span class="tel">13562021254</span>
  </li>
  <li>
    <span class="moren">[默认]</span>
    <span>广州市天河区东圃时代TIT广场</span>
  </li>
</ul>
<router-link :to="{name:'address_edit'}" slot="left" class="iconfont icon-next iconfont_right next"></router-link>
</div>
<div class="address_box">
<ul>
  <li>
    <span>刘晓心</span>
    <span class="tel">13562021254</span>
  </li>
  <li>
    <span>广州市天河区东圃时代TIT广场</span>
  </li>
</ul>
<span class="iconfont icon-next iconfont_right next"></span> 
</div>
<router-link :to="{name:'add_address'}">
<span class="new_address">新增收货地址</span>
</router-link>
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
.address_box{
  background: #fff;
  margin-bottom: 20px;
  overflow: hidden;
  color: #6e6e6e;
}
.address_box ul{
  padding: 6px;
  float: left;
}
.address_box ul li{
  padding: 8px 10px;

}
.address_box li .tel{
  padding-left: 14px;

}
.address_box li .moren{
  color: #f29004;
}
.address_box .next{
  line-height: 90px;
  padding-left:20px;
  color: #cccccc;
}
.new_address{
  display: block;
  width: 70%;
  padding: 12px;
  background: #f29004;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  box-sizing: border-box;
  position: absolute;
  bottom: 51px;
  left: 15%;
}
</style>












