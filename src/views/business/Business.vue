<template>
    <div class="business">
        <!--  头部      -->
        <div class="header">
            <!--    头部上部的背景        -->
            <div class="header-top">
                <a href=""></a>
            </div>
            <!--     头部下部的内容       -->
            <div class="header-bottom">
                <!--       店招         -->
                <div class="logo">
                    <span>
                        <span>品牌</span>
                    </span>
                    <img src="~images/logo.webp" alt="">
                </div>
                <!--      店名 + 描述:评价销量距离         -->
                <div class="shop-name">
                    <h2>
                        <span>茉沏(成都奥克斯店)</span>
                        <i></i>
                    </h2>
                    <div class="desc">
                        <span>评价4.8</span>
                        <span>月售1188单</span>
                        <span>饿了么专送约30分钟</span>
                    </div>
                </div>
                <!--      无门槛红包          -->
                <div class="red-packets">
                    <div class="red-packets-bg">
                        <p class="red-packets-left">
                            <span class="symbol"><small>¥</small>3</span>
                            <span class="svg-logo">
                                <svg viewBox="0 0 13 10" id="svip-icon">
                                    <path fill="url(#svip-icon_a)" fill-rule="evenodd" d="M9.354 3.36L6.894.09a.222.222 0 0 0-.357 0l-2.46 3.273a.886.886 0 0 1-1.24.19L.823 2.076a.222.222 0 0 0-.316.055.24.24 0 0 0-.038.177l1.21 7.07c.032.19.174.34.358.378 1.576.324 7.797.324 9.35.001a.462.462 0 0 0 .356-.377l1.219-7.088a.234.234 0 0 0-.183-.272.22.22 0 0 0-.172.04l-2.012 1.486a.886.886 0 0 1-1.241-.187z"></path>
                                </svg>
                                无门槛
                            </span>
                        </p>
                        <p class="red-packets-right">领取</p>
                    </div>
                </div>
                <!--       折扣  满减       -->
                <div class="discount">
                    <div class="discount-left">
                        <div><span>25减3</span></div>
                        <div><span>38减9</span></div>
                        <div><span>60减14</span></div>
                        <div><span>配送费优惠</span></div>
                    </div>
                    <div class="discount-right">
                        <span>7个优惠</span>
                    </div>
                </div>
                <!--       店铺公告         -->
                <div class="notice">公告：亲爱的顾客，茉沏“默契”~ 如您遇到任何问题，请随时联系我们19180718835，期待您来茉沏。</div>
            </div>
        </div>
        <!--  Tab标签页      -->
            <div class="content">
                    <van-tabs
                            v-model="activeName"
                            sticky
                            color="#2395ff"
                            line-width=30
                            line-height=2
                            class="tag-title">

                        <van-tab title="点餐" name="a" class="context1">
                            <!--     点餐下面的横幅            -->
                            <div class="hengfu">
                                <img src="~images/hengfu.webp" alt="">
                            </div>
                            <!--      商家推荐                      -->
                            <div class="recommend">
                                <p>商家推荐</p>
                                <div class="container-out">
                                    <div class="container-in">
                                        <Commodity></Commodity>
                                        <Commodity></Commodity>
                                        <Commodity></Commodity>
                                        <Commodity></Commodity>
                                        <Commodity></Commodity>
                                        <Commodity></Commodity>
                                        <Commodity></Commodity>
                                    </div>
                                </div>
                            </div>
                            <!--   左侧侧边栏+商品列表的容器        -->
                            <div class="main-container ">
                                <!--        侧边栏           -->
                                <SideBar></SideBar>
                                <!--     商品列表组件                           -->
                                <ProductList></ProductList>
                            </div>
                        </van-tab>
                        <van-tab title="评价" name="b" class="context2">内容 2</van-tab>
                        <van-tab title="商家" name="c" class="context3">内容 3</van-tab>
                    </van-tabs>
            </div>

    </div>
</template>

<script>
    import Commodity from './child/Commodity'
    import SideBar from './child/SideBar'
    import ProductList from "./child/ProductList";
    export default {
        name: "store",
        components:{
            Commodity,
            SideBar,
            ProductList
        },
        data() {
            return {
                activeName: 'a',
            };
        },
    }
</script>

<style scoped lang="less">
.business{
    width:100%;
    height: 100%;
    .header{
        width: 100%;
        height: 270px;
        .header-top{
            width: 100%;
            height: 100px;
            background-image: url("~images/header-bg.webp");
            background-size: cover;
            background-repeat: no-repeat;
            background-position-y: -22px;
            a{
                font-size: .293333rem;
                outline: none;
                text-decoration: none;
                margin-top: 8px;
                margin-left: 15px;
                width: 3vw;
                height: 3vw;
                display: inline-block;
                border-bottom: .533333vw solid #fff;
                border-left: .533333vw solid #fff;
                transform: rotate(45deg);
            }
        }
        .header-bottom{
            width: 100%;
            height: 140px;
            color: #333;
            font-size: .293333rem;
            box-sizing: inherit;
            padding: 8vw 0 0;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            .logo{
                color: #333;
                font-size: .293333rem;
                box-sizing: inherit;
                width: 20vw;
                height: 20vw;
                position: absolute;
                top: 0;
                left: 50%;
                margin-left: -10vw;
                margin-top: -16vw;
                span{
                    font-size: .266667rem;
                    color: transparent;
                    white-space: nowrap;
                    position: absolute!important;
                    top: 0;
                    left: 0;
                    border-top-left-radius: .8vw;
                    border-bottom-right-radius: .8vw;
                    background-image: linear-gradient(90deg,#fff100,#ffe339);
                    width: 5.866667vw;
                    height: 3.2vw;
                    span{
                        white-space: nowrap;
                        position: absolute;
                        left: 0;
                        top: 0;
                        right: -100%;
                        bottom: -100%;
                        transform: scale(.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #6f3f15;
                        font-weight: 700;
                        font-size: .48rem;
                    }
                }
                img{
                    width: 75px;
                    height: 75px;
                    color: #333;
                    font-size: 0.293333rem;
                    border-style: none;
                }
            }
            .shop-name{
                color: #333;
                font-size: .293333rem;
                width: 72vw;
                h2{
                    margin: 0;
                    font-size: .546667rem;
                    font-weight: 700;
                    position: relative;
                    padding-right: 2.666667vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    span{
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    i{
                        width: 4vw;
                        position: relative;
                        height: 6.533333vw;
                        left: 1.6vw;
                        top: 2.133333vw;
                        &::after{
                            content: "";
                            border-style: solid;
                            border-width: 1.466667vw 0 1.466667vw 1.733333vw;
                            border-color: transparent transparent transparent rgba(0,0,0,.67);
                            position: absolute;
                        }
                    }
                }
                .desc{
                    height: 3.2vw;
                    margin-top: 1.733333vw;
                    font-size: .293333rem;
                    color: #666;
                    text-align: center;
                    span{
                        &::after{
                            content: " \B7 ";
                            opacity: .2;
                        }
                    }
                }
            }
            .red-packets{
                justify-content: center;
                margin: 2.133333vw auto 0;
                width: 80vw;
                display: flex;
                &::before{
                    border-radius: 1.333333vw 1.333333vw 0 0;
                    content: "";
                    position: absolute;
                    top:21.4vw;
                    right:37vw;
                    width: 1.333333vw;
                    height: .666667vw;
                    background: #fff;
                    transform: translateX(50%);
                    z-index: 1;
                }
                &::after{
                    border-radius: 0 0 1.333333vw 1.333333vw;
                    content: "";
                    position: absolute;
                    right:37vw;
                    top:27.4vw;
                    width: 1.333333vw;
                    height: .666667vw;
                    background: #fff;
                    transform: translateX(50%);
                }
                .red-packets-bg{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    padding-left: 2vw;
                    height: 6.4vw;
                    width: 38.4vw;
                    font-size: .293333rem;
                    color: #594519;
                    background: #ffe578;
                    .red-packets-left{
                        margin: 0;
                        font-weight: 400;
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .symbol{
                            font-size: .426667rem;
                            font-weight: 500;
                            margin: 0 2.666667vw 0 1.333333vw;
                        }
                        .svg-logo{
                            font-size: .293333rem;
                            font-weight: 400;
                            svg{
                                font-size: .293333rem;
                                margin-right: .666667vw;
                                width: 3.333333vw;
                                height: 2.666667vw;
                            }
                        }
                    }
                }
            }
            .discount{
                width: 80vw;
                font-size: .293333rem;
                display: flex;
                color: #333;
                margin: 3.2vw auto 0;
                align-items: center;
                .discount-left{
                    flex: 1;
                    overflow: hidden;
                    height: 5.333333vw;
                    div{
                        margin: .666667vw;
                        display: inline-block;
                        padding: 1px;
                        border: 1px solid rgb(255, 201, 193);
                        span{
                            font-size: .266667rem;
                            color: #ff4b33;
                        }
                    }
                }
                .discount-right{
                    width: 16.266667vw;
                    flex-shrink: 0;
                    position: relative;
                    padding-right: 2.933333vw;
                    text-align: right;
                    color: #999;
                    &::after{
                        content: "";
                        display: block;
                        border-style: solid;
                        border-width: .106667rem .093333rem 0;
                        border-color: #999 transparent transparent;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 0;
                    }
                }
            }
            .notice{
                font-weight: 400;
                color: #999;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 2.266667vw auto 2.666667vw;
                padding: 0;
                white-space: nowrap;
                width: 80vw;
                font-size: .293333rem;
            }
        }
    }
    .content{
        color: #666;
        font-weight: 700;
        font-size: .6rem;
        .tag-title{
            color: #666;
            font-weight: 700;
            font-size: .6rem;
            .context1{
                .hengfu{
                    width: 100%;
                    height: 95px;
                    padding-top: 7px;
                    border-top: 1px solid #eee;
                    img{
                        width: 90%;
                        height: 88px;
                        margin: 0 5%;
                        border-radius: 3px;
                    }
                }
                .recommend{
                    width: 375px;
                    height: 234px;
                    p{
                        padding-left: 4.266667vw;
                        color: #333;
                        font-size: .426667rem;
                        font-weight: 700;
                        margin-bottom: 2.666667vw;
                    }
                    .container-out{
                        padding-left: 12px;
                        width: 375px;
                        height: 204px;
                        overflow-x: scroll;
                        &::-webkit-scrollbar {display:none}
                        .container-in{
                            width: 926px;
                            height: 204px;
                            font-size: 24px;
                            display: flex;
                            justify-content: space-between;
                        }
                    }

                }
                .main-container{
                    display: flex;
                }
            }
            .context2{

            }
            .context3{

            }
        }
    }
}

</style>