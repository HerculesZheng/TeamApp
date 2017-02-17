<template>
<div class="bill">
<header1 title="账单">
<router-link to="/purse" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
</header1>
<div class="bill_box">
 <p class="month">9月</p>
 <div>
  <span>充值</span>
  <span>2016-10-25 14:25</span>
  <span>+ 100</span>
 </div>
 <div>
  <span>消费</span>
  <span>2016-10-25 14:25</span>
  <span>- 100</span>
 </div>
</div>
<div class="bill_box">
 <p class="month">8月</p>
 <div>
  <span>充值</span>
  <span>2016-10-25 14:25</span>
  <span>+ 100</span>
 </div>
 <div>
  <span>消费</span>
  <span>2016-10-25 14:25</span>
  <span>- 100</span>
 </div>
</div>
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
.bill_box{
  border-bottom: 1px solid #dbdbdb;
}
.month{
  padding: 12px;
  color: #666666;
  font-size: 18px;
}
.bill_box div{
   border-top: 1px solid #dbdbdb;
   overflow: hidden;
   background: #fff;
}
.bill_box div span{
   display: block;
}
.bill_box div span:first-child{
   padding: 12px 0 4px 12px;
}
.bill_box div span:nth-child(2){
   padding: 4px 0 12px 12px;
   font-size: 14px;
   color: #aaaaaa;
}
.bill_box div span:last-child{
   float: right;
   margin: -60px 15px 0 0;
   color: #1a1a1a;
}
</style>












