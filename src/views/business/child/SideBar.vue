<template>
    <div class="side-bar">
        <van-sidebar
                v-model="activeKey"
                color="#2395ff"
                line-width=30
                line-height=2
        >
            <van-sidebar-item title="热销" class="item1"/>
            <van-sidebar-item title="优惠" />
            <van-sidebar-item title="新鲜系列" />
            <van-sidebar-item title="奶茶系列" />
            <van-sidebar-item title="冰淇淋系列" />
            <van-sidebar-item title="养乐多系列" />
            <van-sidebar-item title="玛奇朵系列" />
            <van-sidebar-item title="拿铁系列" />
            <van-sidebar-item title="纯茶系列" />
            <van-sidebar-item title="加料(只可加入甜品)" />
        </van-sidebar>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        data(){
           return{
               activeKey: 0,
           }
        }
    }
</script>

<style scoped lang="less">
.side-bar{
    font-size: 24px;
    width: 20.533333vw;
    overflow-y: auto;
    height: 100%;
    padding-bottom: 10.666667vw;
    .van-sidebar{
        .van-sidebar-item{
            width: 77px;
            height: 50px;
            font-size: 12px;
            color: black;
            padding: 3.333333vw 1.2vw;
        }
        a{
            font-size: 12px;
            font-weight: 100;
            &::before{
                display: none;
                .item1{
                    display: inline;
                }
            }
        }
    }

}
</style>