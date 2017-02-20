<template>
<div class="shouhuo_ok">
<header1 title="订单详情">
<router-link to="/sure_shop" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
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
</div>
<ul class="detail" id="deta_top">
  <li>
    <span>购买商品</span> 
    <span class="shenqing">申请退货</span>
    <span class="wait wait_color">待评价</span>
  </li>
  <li class="pic">
   <span><img src="./img/dingdan1.png"></span>
   <span class="pic_desc">坚果特产山核桃奶油味碧根...</span>
   <span class="norm">规格:&nbsp&nbsp&nbsp1盒6片</span>
   <span class="wait_money">￥29.50</span>
   <div class="sum">
    <span>x</span>
    <span>2</span>
   </div>
  </li>
  <li class="bei_text">
   <span>运费:</span>
   <span class="yunfei">￥10</span>
  </li> 
  <li class="bei_text">
   <span>备注:</span>
  </li> 
</ul>
 <ul class="order_mes">
  <li class="xinxi">订单信息</li>
  <li class="bianhao">订单编号:&nbsp&nbspSKYJ12525441</br>
  创建时间:2015-10-02&nbsp&nbsp&nbsp12:20</br>
  付款时间:2015-10-02&nbsp&nbsp&nbsp12:36</br>
  物流信息:&nbsp&nbsp申通物流&nbsp&nbsp&nbsp&nbsp5221255142</br>
  发货时间:2015-10-02&nbsp&nbsp&nbsp15:36
  </li>
 </ul>
<div class="bottom_mark">
  <router-link to="/go_comments">
  <span class="shop_pay">去评价</span>
</router-link>
</div>
<div class="tuikuan_panel">
    <div class="apply_tuikuan">
       <span>申请退款</span>
       <span class="iconfont icon-cha cha"></span>
    </div>
    <ul class="tuikuan_shuoming">
      <li>
       <span>退货原因
         <i class="iconfont icon-bitianxinghao icon_col"></i>
       :</span>
       <select class="select_reason">
        <option selected>请选择退货原因</option>
        <option value="收到商品破损">收到商品破损</option>
        <option value="商品发错/漏发">商品发错/漏发</option>
        <option value="收到商品描述不符">收到商品描述不符</option>
        <option value="商品描述质量问题">商品描述质量问题</option>
       </select>
       <div class="bitian">
        <span class="iconfont icon-bitianxinghao icon_col">
       </span>
       <span>选项必填</span>
       </div>
      </li>
      <li>
       <span>退货金额
         <i class="iconfont icon-bitianxinghao icon_col"></i>
       :</span>
         <label><input type="" name="" class="tuikuan_jine"></label>
      </li>
      <li>
       <span class="title_shuoming">退货说明:</span>
         <textarea class="text_shuoming" rows="5" cols="30"></textarea>
      </li>
      <li>
       <span class="text_pingzheng">上传凭证:</span>
         <label class="pingzheng">
           <input type="file" name="" class="upload_file">
           <span class="upload_pingzheng">选择要上传的图片</span>
           <span class="pingzheng_tip">每张图片大小不超过5M,最多三张,支持JPG、PNG、BMP格式</span>
         </label>
         <div class="pingzheng_img"><img src="./img/dingdan2.png"></div>
      </li>
       <div class="tuikuan_btn">提交</div>
    </ul>
   </div>
   <div class="tuikuan_mark"></div>
</div>
</template>

<script type="text/javascript">
import Header1 from '../../component/header/header.vue';
import $ from "../../common/js/jQuery-3.1.1.min.js";
export default{
	components:{
		Header1
	}
};
  $(function(){
    $(".shenqing").click(function(){
      $(".tuikuan_mark").show();
      $(".tuikuan_panel").show();
    });
    $(".tuikuan_mark").click(function(){
      $(this).hide();
      $(".tuikuan_panel").hide();
    });
    $(".cha").click(function(){
      $(".tuikuan_mark").hide();
      $(".tuikuan_panel").hide();
    });
  })
</script>
<style type="text/css">
.shouhuo_ok ul{
  background: #fff;
}
.detail .shenqing{
  display: inline-block;
  margin-left: 40%;
  border: 2px solid #dbdbdb;
  padding: 6px 14px;
  font-size: 12px;
  color: #999999;
  border-radius: 5px;
}
.tuikuan_panel{
  width: 90%;
  position: absolute;
  left: 5%;
  top: 100px;
  z-index: 10;
  background: #fff;
  display: none;
}
.tuikuan_panel .apply_tuikuan{
  background: #f2f2f2;
  overflow: hidden;
}
.apply_tuikuan span{
  display: inline-block;
  padding: 10px 14px;
  color: #999999;
  font-size: 14px;
}
.apply_tuikuan .cha{
  float: right;
}
.tuikuan_shuoming .icon_col{
  color: #b10000;
  font-size: 10px;
}
.tuikuan_shuoming{
  padding: 0 12px;
}
.tuikuan_shuoming li{
  padding: 10px 0;
}
.bitian{
  float: right;
}
.bitian span{
  font-size: 12px;
  color: #666666;
}
.select_reason{
  width: 130px;
  -webkit-appearance:none;
  border: 1px solid #dbdbdb;
  padding: 5px;
  background: url("./img/arrow.png") no-repeat right center;
}
.tuikuan_jine{
  border: 1px solid #dbdbdb;
  padding: 5px;
  width: 120px;
}
.title_shuoming{
  display: inline-block;
  vertical-align: top;
}
.text_pingzheng{
  display: inline-block;
  vertical-align: top;
}
.pingzheng{
  display: inline-block;
  position: relative;
  top: 0px;
  left: 5px;
}
.pingzheng .upload_file{
  display: inline-block;
  width: 140px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  opacity: 0;
  filter: alpha(opacity=0);
}
.upload_pingzheng{
  display: inline-block;
  width: 130px;
  line-height: 30px;
  font-size: 16px;
  border: 1px solid #dbdbdb;
  position: absolute;
  left: 0px;
  top:0px;
  padding: 0 5px;
}
.pingzheng_tip{
  display: block;
  width: 180px;
  font-size: 12px;
  color: #666666;
  margin-top: 35px;
}
.pingzheng_img img{
    width: 80px;
    padding: 10px 5px;
}
.tuikuan_btn{
  width: 80px;
  text-align: center;
   padding: 5px 0;
   background: #f29525;
   color: #fff;
   margin: 20px 0 20px;
   border-radius: 4px;
}
.tuikuan_mark{
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












