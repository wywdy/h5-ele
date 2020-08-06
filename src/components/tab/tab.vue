<template>
       <div class="bottom-tab">
           <div class="tab-item" @click="switchTo('home')" :class="{on:'/home'===$route.path}">
               <img :src="'/home'===$route.path?imgArr[0].act:imgArr[0].normal" alt="">
               <span >首页</span>
           </div>
           <div class="tab-item" @click="switchTo('watch')" :class="{on:'/watch'===$route.path}">
               <img :src="$route.path.includes('/watch')?imgArr[1].act:imgArr[1].normal" alt="">
               <span >发现</span>
           </div>
           <div class="tab-item" @click="switchTo('order')" :class="{on:'/order'===$route.path}">
               <img :src="'/order'===$route.path?imgArr[2].act:imgArr[2].normal" alt="">
               <span>订单</span>
           </div>
           <div class="tab-item" @click="switchTo('my')" :class="{on:'/my'===$route.path}">
               <img :src="'/my'===$route.path?imgArr[3].act:imgArr[3].normal" alt="">
               <span>我的</span>
           </div>
       </div>
</template>

<script>
    export default {
        created(){
            console.log(this.$route.path);
        },
        updated(){
            console.log(this.$route.path); 
        },
        data(){
            return {
                imgArr:[
                    {
                        normal:require('@/assets/icon/home-empty.svg'),
                        act:require('@/assets/icon/home.svg')
                    },
                    {
                        normal:require('@/assets/icon/watch-empty.svg'),
                        act:require('@/assets/icon/watch.svg')
                    },
                    {
                        normal:require('@/assets/icon/order-empty.svg'),
                        act:require('@/assets/icon/order.svg')
                    },
                    {
                        normal:require('@/assets/icon/my-empty.svg'),
                        act:require('@/assets/icon/my.svg')
                    }

                ]
            }
        },
        methods:{
            switchTo(path){
                switch (path) {
                    case 'home':
                        this.$router.push('/home')
                        break;
                    case 'watch':
                        this.$router.push('/watch')
                        break;
                    case 'order':
                        this.$router.push('/order')
                        break;
                    case 'my':
                        this.$router.push('/my')
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .on{
        color: #008BFF;
    }
    .bottom-tab{
        width:100vw;
        height: 50px;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 999;
        background: #ffffff;
        display: flex;   
        align-items: center;
        .tab-item{
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span{
                font-size: 14px;
            }
            img{
                width: 24px;
                height: 24px;
                padding-bottom: 4px;
            }
        }
    }
</style>