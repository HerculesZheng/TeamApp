<template>
<div class="collect_edit">
<header1 title="我的收藏">
<router-link to="/my" slot="left" class="iconfont icon-shangyige head_left">
 </router-link>
<div slot="left" class="leaguer_right" @click="bol=!bol">{{bol?"完成":"编辑"}}</div>
</header1>
<div class="edit_box">
<span v-show="bol"><img src="./img/danxuan2.png" class="choose"></span>
<span><img src="./img/dingdan1.png" class="product_img"></span>
<span>坚果特产山核桃奶油味碧根...</span>
<span>￥29.50</span>
</div>
<div class="edit_box">
<span v-show="bol"><img src="./img/danxuan1.png" class="choose"></span>
<span><img src="./img/dingdan1.png" class="product_img"></span>
<span>坚果特产山核桃奶油味碧根...</span>
<span>￥29.50</span>
</div>
<div class="bottom_mark">
  <div class=" control" v-show="bol">
  <span><img src="./img/danxuan1.png"></span>
  <span>全选</span>
  <span>删除</span>
  </div>
</div>
</div>
</template>

<script type="text/javascript">
import Header1 from '../../component/header/header.vue';
export default{
  components:{
    Header1
  },
  data(){
    return{
      bol:false,
    }
  },
}
</script>
<style type="text/css">
.edit_box{
  padding: 12px;
  background: #fff;
  border-bottom: 1px solid #dbdbdb;
  overflow: hidden;
}
.edit_box span{
  float: left;
}
.edit_box span:first-child{
  display: inline-block;
  margin-top: 25px;
}
.edit_box span .choose{
  width: 15px;
}
.edit_box span .product_img{
  width: 70px;
  padding: 1px;
}
.edit_box span:nth-child(2){
  display: inline-block;
  border: 1px solid #dbdbdb;
  margin-left: 5px;
}
.edit_box span:nth-child(3){
  display: block;
  padding: 2px 15px; 
}
.edit_box span:last-child{
   padding: 10px 15px;
  color: #de0000;
}

.control{
  overflow: hidden;
  background: #ccc;
}
.control span{
  display: inline-block;
}
.control span:first-child{
  margin: 18px 8px 18px 12px;
}
.control span img{
  width: 15px;
}
.control span:nth-child(2){
  color: #343434;
}
.control span:last-child{
  padding: 8px 40px;
  float: right;
  background: #ee4147;
  color: #fff;
  border-radius: 6px;
  margin: 7px 12px;
}
</style>












