<template>
    <div id="category">
        <!-- 搜索栏 -->
    <van-search placeholder="商品搜索  共290万款好物" input-align="center" v-model="searchData"/>
    <van-tree-select
        :items="items"
        height = 'calc(100vh - 104px)'
        :main-active-index.sync="activeIndex"
        @click-nav='changeRight'>
        <template slot="content">
         <van-grid  :column-num="3">
            <van-grid-item v-for="(item,index) in subCategoryList" :key="index" :icon="item.wap_banner_url" :text="item.name" :to="'/categoryList/'+item.id"/> 
          </van-grid>
        </template>
        </van-tree-select>
        <tab-Btn></tab-Btn>
    </div>
</template>
<script>
import tabBtn from '../components/tabBtn.vue'
import axios from 'axios'
import api from '../assets/config/api.js'
export default {
    name:'category',
    data(){
        return{
            searchData:'',
            activeIndex:0,
            data:{},
            subCategoryList:[]
        }
    },
    components:{
        tabBtn
    },
    async created(){
       let res = await axios.get(api.CatalogList)
       let data = res.data
       this.data = data.data   
       this.subCategoryList = this.data.currentCategory.subCategoryList
    },
    computed:{
        items(){
            //console.log(this.data.categoryList);
        if(this.data.categoryList == undefined){
            return []
        }else{
            let arr = []
            this.data.categoryList.forEach((item,index) => {
                item.text = item.name
                arr.push(item)           
            })
            return arr
        }
    }
  },
  methods:{
      changeRight(index){
          this.activeIndex = index
      }
  },
  watch:{
      activeIndex: async function(){
          if(this.items.length !==0){
            let id = this.items[this.activeIndex].id       
            let res = await axios.get(api.CatalogCurrent,{params:{id}})
            this.subCategoryList = res.data.data.currentCategory.subCategoryList
        }else{
            this.subCategoryList = []
        }

      }
  }
    
}
</script>