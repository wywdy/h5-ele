<template>
    <div class="query">
        <Header>
           <van-icon name="arrow-left" slot="left" @click="backHome"/>
        </Header>
        <div class="search">
            <div>
                <van-icon name="search" />
                <input ref="input" type="text" placeholder="搜索商家，商品名称">
            </div>
        </div>
        <div class="hot">
            <h3>热门搜索</h3>
            <div class="list">
                <div v-for="(item,index) in hotList" :key="index">
                    <span>{{item}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header/header.vue'
export default {
    data(){
        return {
            hotList:[
                '一点点','一点点奶茶','CoCo','烤肉烤饭',
                '蜜雪冰城','麻辣烫','黄焖鸡米饭','华莱士',
                '奶茶'
            ]
        }
    },
    methods:{
        backHome(){
            this.$router.push('/home')
        }
    },
    components:{
        Header,
    },
    mounted(){
     
    }
}
</script>

<style lang="less" scoped>
    .query{
        .search{
            width: 100vw;
            height: 50px;
            background-image: linear-gradient(90deg,#0af,#0085ff);
            display: flex;
            align-items: center;
            &>div{
                width: 94%;
                margin: 0 auto;
                height: 30px;
                background: white;
                color: #aca9a9;
                border-radius: 20px;
                display: flex;
                align-items: center;
                .van-icon{
                    font-size: 16px;
                    margin: 0 8px;
                }
                input{
                    width: 90%;
                    border: none;
                    outline: none;
                    background: transparent;
                }
            }
        }
        h3{
            text-indent: 10px;
            color: #aca9a9;
        }
        .list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: space-around;
            min-height: 150px;
            &>div{
                flex:24%;
                display: flex;
                justify-content: center;
                align-items: center;
                    span{
                        min-width: 20px;
                        padding: 10px 10px;
                        border: 1px solid #cccccc;
                        border-radius: 5px;
                        color: rgb(138, 136, 136);

                    }
            }
        
        }
    }
</style>