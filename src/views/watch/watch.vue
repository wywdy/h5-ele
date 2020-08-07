<template>
    <div class="discover">
        <div class="mall">
            <div class="left">
                <div>
                    <h3>金币商城</h3>
                    <span>0元好像在这里</span>
                </div>
                <img :src="lv" alt="">
            </div>
            <div class="right">
                <div class="tj">
                    <div>
                        <h3>推荐有奖</h3>
                        <span>20元现金拿不停</span>
                    </div>
                    <img :src="w2" alt="">
                </div>
                <div class="yh">
                    <div>
                        <h3>周边优惠</h3>
                        <span>领取口碑好卷</span>
                    </div>
                    <img :src="w3" alt="">
                </div>
            </div>
        </div>
        <div class="main">
            <div class="title">
                <div><van-icon name="flower-o" class="icon" /><span>限时豪礼</span></div>
                <span>金币换豪礼</span>
            </div>
            <div class="list">
                <div class="item">
                    <div><img :src="ele" /></div>
                    <div>PS24抽奖</div>
                    <div><span>200金币</span><del>￥2200</del></div>
                    <span class="cj">限时抽奖</span>
                </div>
                <div class="item">
                    <div><img :src="ele" /></div>
                    <div>JBL耳机抽奖</div>
                    <div><span>200金币</span><del>￥599</del></div>
                    <span class="cj">限时抽奖</span>
                </div>
                <div class="item">
                    <div><img :src="ele" /></div>
                    <div>头戴式耳机</div>
                    <div><span>150金币</span><del>￥768</del></div>
                    <span class="cj">限时抽奖</span>
                </div>
            </div>
            <p>查看更多</p>
        </div>
        <Tab />
    </div>
</template>

<script>
import Tab from '@/components/tab/tab.vue'
export default {
    data(){
        return {
            lv:require('@/assets/images/w1.webp'),
            w2:require('@/assets/images/w2.webp'),
            w3:require('@/assets/images/w3.webp'),
            ele:require('@/assets/images/ele.jpg')
        }
    },
    components:{
        Tab
    }
}
</script>

<style lang="less" scoped>
    .discover{
        height: 100vh;
        background: #f5f5f5;
        .mall{
            height: 160px;
            background: white;
            display: flex;
            span{
                font-size: 12px;
            }
            .left{
                flex: 1;
                display: flex;
                justify-content: space-evenly;
                &>div{
                    h3{
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        color:rgb(255, 153, 0);
                        font-weight: bold;
                        font-size: 16px;
                    }
                    span{
                        color: #9e9e9e;
                    }
                }
                img{
                    width: 75px;
                    height: 75px;
                    align-self:flex-end;
                }
            }
            .right{
                flex: 1;
                display: flex;
                flex-direction: column;
                
                img{
                    width: 45px;
                    height: 42px;
                    align-self: flex-end;
                }
                span{
                    color: #9e9e9e;
                }
                .tj{
                    display: flex;
                    justify-content: space-around;
                    padding-bottom: 25px;
                    border-left: 1px solid #e7e2e2;
                    border-bottom: 1px solid #e7e2e2;
                    &>div{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    h3{
                        color: rgb(27, 169, 225);
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
                .yh{
                    display: flex;
                    justify-content: space-around;
                    padding-top: 2px;
                    border-left: 1px solid #e7e2e2;
                    &>div{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    h3{
                        color:rgb(237, 102, 96);
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
            }
        }
        .main{
            margin-top: 20px;
            background: white;
            .title{
                text-align: center;
                overflow: hidden;
                margin-bottom: 20px;
                &>div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 20px 0 2px 0;
                    .icon{
                        font-size: 22px;
                        color:orange;
                        margin-left: -5px;
                    }
                    span{
                        font-size: 20px;
                        font-weight: bolder;
                        color:#333;
                    }
                }
                &>span{
                    color: #999;
                }
            }
            .list{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                height: 160px;
                font-size: 14px;
                .item{
                    position: relative;
                    img{
                        width: 100px;
                        height: 100px;
                    }
                    span{
                        color:#ff5339;
                        
                    }
                    div{
                        margin-top: 10px;
                        color: #333;
                    }
                    del{
                        color: #aaa;
                        padding-left: 5px;
                        font-size: 12px;
                    }
                    .cj{
                        position: absolute;
                        left: 2px;
                        top:12px;
                        background: rgb(29, 25, 25);
                        color:white;
                        padding: 2px;
                        font-size: 10px;
                    }
                }
                
            }
            p{
                font-size:12px;
                text-align: center;
                padding: 30px;
                color: #999;
            }

        }
    }
</style>