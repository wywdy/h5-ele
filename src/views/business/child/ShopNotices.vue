<template>
    <div class="shop-notices">
        <!--  品牌      -->
        <div class="title">
            <h2>
                <i>品牌</i>
                <span>茉沏(成都奥克斯店)</span>
            </h2>
        </div>
        <!--  店铺详情      -->
        <div class="details">
            <ul>
                <li>
                    <h3>4.8</h3>
                    <p>评分</p>
                </li>
                <li>
                    <h3>1229单</h3>
                    <p>月售</p>
                </li>
                <li>
                    <h3>饿了么专送</h3>
                    <p>约30分钟</p>
                </li>
                <li>
                    <h3>0.0元</h3>
                    <p>配送费</p>
                </li>
                <li>
                    <h3>1km</h3>
                    <p>距离</p>
                </li>
            </ul>
        </div>
        <!--    公告的title    -->
        <h3 class="notice">
            <span>公告</span>
        </h3>
        <!--     公告的文字   -->
        <div class="notice-span">
            亲爱的顾客，茉沏“默契”~ 如您遇到任何问题，请随时联系我们19180718835，期待您来茉沏。
        </div>
        <!--   关闭按钮     -->
        <div class="close"></div>
    </div>
</template>

<script>
    export default {
        name: "ShopNotices"
    }
</script>

<style scoped lang="less">
.shop-notices{
    position: relative;
    margin: 20px auto;
    width: 280px;
    height: 222px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-style: normal;
    .title{
        flex:1;
        h2{
            padding: 0;
            margin: 0;
            font-size: 22px;
            line-height: 6.666667vw;
            color: #333;
            text-align: center;
            font-weight: bolder;
            i{
                border-radius: .266667vw;
                background-image: linear-gradient(90deg,#fff100,#ffe339);
                color: #6a3709;
                padding: .8vw;
                font-weight: 700;
                font-size: 12px;
                position: relative;
                top: -.533333vw;
                margin-right: 1.6vw;
                font-style: normal;
            }
            span{
                font-style: normal;
            }
        }
    }
    .details{
        flex:1;
        ul{
            display: flex;
            width: 280px;
            justify-content: space-between;
            margin: 0;
            padding: 0;
            li{
                margin: 0;
                padding: 0;
                flex:1;
                font-size: 12px;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                h3{
                    font-size: .4rem;
                    font-weight: 600;
                    color: #333;
                    margin-bottom: 1.6vw;
                }
                p{
                    font-weight: 400;
                    font-size: .293333rem;
                    color: #999;
                }
            }
        }
    }
    .notice{
        /*flex:1;*/
        font-weight: 400;
        background-position: 50%;
        background-repeat: no-repeat;
        position: relative;
        text-align: center;
        margin: 4.8vw auto 2.666667vw;
        width: 20.266667vw;
        background-image: linear-gradient(90deg,#fff,#333 50%,#fff);
        background-size: 100% 1px;
        span{
            font-size: .32rem;
            padding: 0 1.066667vw;
            color: #999;
            background-color: #fff;
        }
    }
    .notice-span{
        /*flex: 1;*/
        font-size: 0.346667rem;
        line-height: 1.54;
        color: #333;
        max-height: 26.666667vw;
        font-weight: 400;
        padding: 0 10px;
    }
    .close{
        position: absolute;
        width: 30px;
        height: 30px;
        bottom:-100px;
        left: 49%;
        background-image: url("https://cube.elemecdn.com/8/ba/bcfa8cc62b20e044bd2ea1c1c7f3dpng.png?x-oss-process=image/format,webp");
        background-size: cover;
    }
}
</style>