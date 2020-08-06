<template>
    <div class="list">
        <div class="list-item" v-for="(item,index) in shopInfo" :key="index">
            <div class="left">
                <img :src="item.imgsrc" alt="">
            </div>
            <div class="right">
                <div class="title">{{item.title}}</div>
                <div class="rate">
                    <van-rate
                    v-model="item.score"
                    :size="15"
                    color="#ffd21e"
                    void-icon="star"
                    void-color="red"
                    />
                    <span>月售2820</span>
                </div>
                <div class="send">
                    <span>起送￥15 远距离配送￥1.5 <del>￥5.5</del></span>
                    <span>49分钟 4.5km</span>
                </div>
                <div class="evaluate">
                    <span>"第一次点，没想到那么棒"</span>
                </div>
                <div class="cheap">
                    <span>25减21</span>
                    <span>48减24</span>
                    <span>68减36</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return {
            shopInfo:[
                {
                    imgsrc:require('@/assets/images/demo4.webp'),
                    title:"巷子香大碗肥牛饭",
                    score:4
                },
                   {
                    imgsrc:require('@/assets/images/demo3.webp'),
                    title:"百果园",
                    score:3
                },
                   {
                    imgsrc:require('@/assets/images/demo.webp'),
                    title:"麦当劳麦乐送",
                    score:2
                },
                   {
                    imgsrc:require('@/assets/images/demo.webp'),
                    title:"乡村基",
                    score:5
                },
            ],
            value:1
        }
    }
}
</script>

<style lang="less" scoped>
    .list{

        .list-item{
            display: flex;
            margin-bottom: 20px;
            font-size: 12px;
            line-height: 1.5;
            margin-top: 20px;
        }
        .left{
            flex:3;
            display: flex;
            justify-content: center;
            margin-right: 10px;
            img{
                width: 70px;
                height: 80px;
            }
        }
        .right{
            flex:9;
            display: flex;
            flex-direction: column;
            .title{
                font-size: 16px;
                font-weight: bold;
                padding-bottom: 5px;
            }
            .rate{
                span{
                    margin-left: 10px;
                    color:#a0a0a0
                }
            }
            .send{
                color:#a0a0a0;
                display: flex;
                justify-content: space-between;
                &>span:nth-child(2){
                    margin-right: 10px;
                }
                margin-bottom: 5px;
            }
            .evaluate{
                span{
                    font-size: 10px!important;
                    background: rgb(255, 228, 209);
                    color:rgb(248, 127, 14) ;
                    padding:2px;
                }
                margin-bottom: 5px;
            }
            .cheap{
                span{
                    color:rgb(240, 80, 80);
                    border:1px solid rgb(240, 80, 80);
                    padding: 0 1px;
                    margin-right: 5px;
                }
            }
        }
    }
</style>