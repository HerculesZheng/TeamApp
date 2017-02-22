<template>
<div class="go_comments">
<header1 title="评论">
<router-link to="/shouhuo_ok" slot="left" class="iconfont icon-shangyige head_left">
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
  <textarea name="" cols="" rows="" class="text_comment">好吃!</textarea>
<router-link to="/comments_ok">
  <span class="sure_commet">确认</span>
</router-link>
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
.go_comments ul{
  background: #fff;
}
.go_comments .detail{
  margin-top: 0;
}
.stars{
  display: inline-block;
  float: right;
}
 .stars .star_active{
  color: #f29004;
}
.text_comment{
  width: 100%;
  height: 100px;
  padding: 14px 20px;
  box-sizing: border-box;
  background: #f2f2f2;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  font-size: 14px;
  color: #333333;
}
.sure_commet{
  display: block;
  width: 80%;
  margin: 220px auto;
  background: #f29004;
  color: #fff;
  text-align: center;
  padding: 12px;
  border-radius: 6px;
}
</style>












