<template>
    <div class="commodity">
        <!--   商品图片     -->
        <img src="~images/tuijian.webp" alt="">
        <!--    商品详情描述+售价+按钮  总的容器    -->
        <div class="container">
            <p class="product-name">(中杯)多肉桃桃</p>
            <p class="sales">月售75 好评率100%</p>
            <div class="price">
                <p>
                    <small>¥</small>17<span>起</span>
                </p>
                <span >
                    <van-icon name="add"  color="#2396ff"/>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Commodity"
    }
</script>

<style scoped lang="less">
    .commodity{
        width: 32vw;
        padding-bottom: 4.266667vw;
        img{
            max-width: 100%;
            display: block;
            width: 32vw;
            height: 32vw;
            border-top-left-radius: .8vw;
            border-top-right-radius: .8vw;
        }
        .container{
            width: 120px;
            height: 61px;
            font-size: 24px;
            .product-name{
                font-weight: 400;
                font-size: .373333rem;
                margin: 1.866667vw 0 .933333vw;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .sales{
                font-weight: 400;
                color: #999;
                font-size: .266667rem;
                margin-bottom: 1.866667vw;
                min-height: 1em;
            }
            .price{
                height: 22px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-right: .266667vw;
                p{
                    width: 11.667vw;
                    height: 20px;
                    font-size: .48rem;
                    color: rgb(255, 83, 57);
                    span{
                        font-weight: 400;
                        font-size: .293333rem;
                        margin-left: .266667vw;
                    }
                }
                span{
                    outline: none;
                    display: inline-block;
                }
            }
        }
    }
</style>