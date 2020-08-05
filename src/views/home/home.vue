<template>
    <div class="home">
        <!-- 首页头部 -->
        <Header>
            <span>饿了么</span>   
        </Header>
        <!--  首页搜索-->
        <Search />
        <!-- 中部导航栏 -->
        <Nav />
        <!-- 底部选项卡 -->
        <Tab></Tab>
    </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import Search from '@/components/search/search.vue'
import Tab from '@/components/tab/tab.vue'
import Nav from './child/nav.vue'
export default {
    data(){
        return {
          
        }
    },
    components:{
        Header,
        Search,
        Nav,
        Tab
    }
}
</script>

<style lang="less" scoped>

</style>