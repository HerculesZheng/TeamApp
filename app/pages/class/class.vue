<template>
<div class="class">
<header1 title="分类"></header1>
   class内容
   <ul class="con">
   	<li v-for="item in items">
      {{item.con}}
   	</li>
   </ul>
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
			items:[
             {con:"内容1"},
             {con:"内容2"},
             {con:"内容3"},
             {con:"内容4"},
			]
		}
	}
}
</script>