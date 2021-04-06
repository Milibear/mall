<template>
   <!-- 底部导航 -->
    <van-tabbar v-model="tabActive">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>    
      <van-tabbar-item icon="medal-o">专题</van-tabbar-item>    
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>    
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>    
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>    
    </van-tabbar>
</template>
<script>
export default {
    data(){
        return{
            tabActive:0
        }
    },
    mounted(){
        switch(this.$route.path){
                case "/":
                    this.tabActive = 0;
                    break;
                case "/category":
                    this.tabActive = 2;
                    break;
                default:
                    this.tabActive = 0;
            }     
    },
}
</script>