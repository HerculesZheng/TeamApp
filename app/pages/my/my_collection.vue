<template>
<div class="my_collection">
<header1 title="我的收藏">
<router-link to="/my" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
 <router-link to="/collect_edit" slot="left" class="leaguer_right">编辑
 </router-link>
</header1>
<div class="collection_box">
<span><img src="./img/dingdan1.png"></span>
<span>坚果特产山核桃奶油味碧根...</span>
<span>￥29.50</span>
</div>
<div class="collection_box">
<span><img src="./img/dingdan1.png"></span>
<span>坚果特产山核桃奶油味碧根...</span>
<span>￥29.50</span>
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
.collection_box{
  padding: 12px;
  background: #fff;
  border-bottom: 1px solid #dbdbdb;
  overflow: hidden;
}
.collection_box span{
  float: left;
}
.collection_box span:first-child{
  display: inline-block;
  border: 1px solid #dbdbdb;
}
.collection_box span img{
  width: 70px;
  padding: 1px;
}
.collection_box span:nth-child(2){
  display: block;
  padding: 2px 15px; 
}
.collection_box span:last-child{
   padding: 10px 15px;
  color: #de0000;
}
</style>












