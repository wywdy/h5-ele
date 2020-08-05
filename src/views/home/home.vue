<template>
    <div class="home">
        <!-- 首页头部 -->
        <Header>
            <span>饿了么</span>
        </Header>
        <!--  首页搜索-->
        <Search />
    </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import Search from '@/components/search/search.vue'
export default {
    data(){
        return {
          
        }
    },
    components:{
        Header,
        Search
    }
}
</script>

<style lang="less" scoped>

</style>