<template>
<div class="order_over">

<ul class="detail">
  <li>
    <span>订单编号:</span>
    <span>SHYJ2552</span>
    <span class="wait">待评价</span>
  </li>
  <li class="pic">
   <span><img src="./img/dingdan1.png"></span>
   <span class="pic_desc">坚果特产山核桃奶油味碧根...</span>
   <span class="wait_money">￥29.50</span>
   <div class="sum">
    <span>x</span>
    <span>2</span>
   </div>
  </li>
  <li>
   <span>共</span>
   <span>2</span>
   <span>件</span>
   <span>合计:</span>
   <span>￥13</span>
   <div class="flo_right">
     <button class="delete">删除</button>
     <router-link to="/go_comments"><button class="zhifu go_comment">去评价</button></router-link>
   </div>
  </li> 
</ul>

<ul class="detail">
  <li>
    <span>订单编号:</span>
    <span>SHYJ2552</span>
    <span class="wait over_color">已完成</span>
  </li>
  <li class="pic">
   <span><img src="./img/dingdan1.png"></span>
   <span class="pic_desc">坚果特产山核桃奶油味碧根...</span>
   <span class="wait_money">￥29.50</span>
   <div class="sum">
    <span>x</span>
    <span>2</span>
   </div>
  </li>
  <li>
   <span>共</span>
   <span>2</span>
   <span>件</span>
   <span>合计:</span>
   <span>￥13</span>
   <div class="flo_right">
     <button class="delete">删除</button>
     <router-link to="/yi_comments"><button class="zhifu go_comment" id="over_comment">已评价</button></router-link>
   </div>
  </li>
</ul>
<div class="bottom_mark"></div>
</div>
</template>

<script type="text/javascript">

</script>
<style type="text/css">
.order_over ul{
  background: #fff;
}
.detail .over_color{
  color: #999999;
}
.flo_right .delete{
  color: #999999;
  border: 1px solid #999999;
  margin-right: 8px;
  padding: 8px 30px;
}
.flo_right .go_comment{
  padding: 8px 24px;
}
#over_comment{
  color: #999999;
  border: 1px solid #999999;
  padding: 8px 24px;
}
</style>












