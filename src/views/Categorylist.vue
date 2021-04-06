<template>
    <div id="categorylist">
        <h1>产品列表分类</h1>
        <van-tabs v-model="tabActive">
            <van-tab v-for="(item,index) in clist" :key="index" :title="item.name">
                <h3>{{item.name}}</h3>
                <p>{{item.front_name}}</p>
                
                <div v-if="item.plist">
                <van-grid  :column-num="2" :border="true">
                  <van-grid-item v-for="(item1,index1) in item.plist.data" :key="index1" :to="'/product/'+item1.id">
                      <van-image width="100" height="100"
                      :src="item1.list_pic_url"/>
                      <h4 class="van-ellipsis">{{item1.name}}</h4>
                      <p style="color:red">￥{{item1.retail_price}}</p>
                      
                      </van-grid-item> 
                </van-grid>
            </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import axios from 'axios'
import api from '../assets/config/api.js'
export default {
    name:'categorylist',
    props:['id'],
    data(){
        return{
            tabActive:0,
            clist:[]
        }
    },
    async created(){
       let res= await axios.get(api.GoodsCategory,{params:{id:this.id}})
       this.clist = res.data.data.brotherCategory
       let id = this.clist[0].id
       this.clist.forEach(async (item,index) => {
               item.plist = await this.getlist(item.id,1)
               //console.log(item.plist.data)
       })
    },
    // watch:{
    //     tabActive:async function(index){
    //         let id = this.clist[index].id
    //         let page = 1
    //         let size = 20
    //         this.getlist(id,page,size)
            
    //     },
        methods:{
            // 获取列表
           async getlist(cid,page){
                let res = await axios.get(`${api.GoodsList}?categoryId=${cid}&page=${page}&size=20`)
                //console.log(res.data.data)
                return res.data.data 
                  //(`${api.GoodsList}?categoryId=${cid}&page=${page}&size=20`)
                //(api.GoodsList,{params:{categoryId:cid,cpage,csize}})
               
            }
        }
    }
</script>
<style lang="less" scoped>
 *{
     padding: 0;
     margin: 0;
  }
//   多余内容用...显示
  #categorylist{
      .van-ellipsis{
          width: 100%;
          font-size: 10px;
     }
     .van-grid-item{
         overflow: hidden;
     }
  }
  
</style>