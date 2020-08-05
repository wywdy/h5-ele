<template>
    <div class="nav">
        <Item v-for="(value,index) in navList" :key={index} />
    </div>
</template>

<script>
import Item from './navItem.vue'
export default {
    data(){
        return {
            navList:[
                // {name:"美食",imgUrl:require('@/asset/images/1.webp')},
                // {name:"水果",imgUrl:require('@/asset/images/2.webp')},
                // {name:"午餐",imgUrl:require('@/asset/images/3.webp')},
                // {name:"汉堡披萨",imgUrl:require('@/asset/images/4.webp')},
                // {name:"速食简餐",imgUrl:require('@/asset/images/5.webp')},
                // {name:"买菜",imgUrl:require('@/asset/images/6.webp')},
                // {name:"大牌惠吃",imgUrl:require('@/asset/images/7.webp')},
                // {name:"炸鸡炸串",imgUrl:require('@/asset/images/8.webp')},
                // {name:"包子粥店",imgUrl:require('@/asset/images/9.webp')},
                // {name:"米粉面馆",imgUrl:require('@/asset/images/10.webp')},
            ]
        }
    },
    components:{
        Item
    }
}
</script>

<style lang="less" scoped>
    .nav{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }
</style>