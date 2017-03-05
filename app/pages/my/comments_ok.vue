<template>
<div class="comments_ok">
<header1 title="评论">
<router-link to="/order/order_over" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<ul class="detail" id="deta_top">
  <li>
    <span>购买商品</span>
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
   <span>评论</span>
   <div class="stars">
     <span class="iconfont icon-xingxing star_active"></span>
     <span class="iconfont icon-xingxing star_active"></span>
     <span class="iconfont icon-xingxing star_active"></span>
     <span class="iconfont icon-xingxing star_active"></span>
     <span class="iconfont icon-xingxing"></span>
   </div>
  </li>  
</ul>
  <textarea name="" cols="" rows="" class="text_comment text_bg">好吃!</textarea>
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
.comments_ok ul{
  background: #fff;
}
.comments_ok .detail{
  margin-top: 0;
}
.comments_ok .text_bg{
  background: #fff;
}
</style>












