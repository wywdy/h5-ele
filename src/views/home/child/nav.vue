<template>
    <div class="nav">
        <div v-for="(item) in navList" :key="item.id" class="nav-item">
            <img :src="item.imgUrl" alt="">
            <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navList:[
                // {name:"美食",imgUrl:require('@/assest/images/a.png')},
                // {name:"水果",imgUrl:require('@/assest/images/b.png')},
                {id:3,name:"午餐",imgUrl:require('@/assets/images/3.png')},
                {id:4,name:"汉堡披萨",imgUrl:require('@/assets/images/4.png')},
                {id:5,name:"速食简餐",imgUrl:require('@/assets/images/5.png')},
                {id:6,name:"买菜",imgUrl:require('@/assets/images/6.png')},
                {id:7,name:"大牌惠吃",imgUrl:require('@/assets/images/7.png')},
                {id:8,name:"炸鸡炸串",imgUrl:require('@/assets/images/8.png')},
                {id:9,name:"包子粥店",imgUrl:require('@/assets/images/9.png')},
                {id:10,name:"米粉面馆",imgUrl:require('@/assets/images/10.png')}
            ]
        }
    },
    components:{
     
    }
}
</script>

<style lang="less" scoped>
    .nav{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        .nav-item{
            flex: 24%;
            height: 60px;
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                width: 40px;
                margin-bottom: 5px;
            }
            span{
                color: #666;
                font-size: 12px;
            }
        }
    }
</style>