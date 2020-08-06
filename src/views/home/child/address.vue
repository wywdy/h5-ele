<template>
    <div class="address">
        <img :src="gps" alt="">
        <div>
            <span>四川省成都市武侯</span>
            <img :src="xl" alt="">
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            gps:require('@/assets/images/gps.svg'),
            xl:require('@/assets/images/xiala.svg')
        }
    }
}
</script>

<style lang="less" scoped>
    .address{
        display: flex;
        align-items: center;
        height: 40px;
        font-size: 18px;
        padding-top: 5px;
        &>img{
            width:20px;
        }
        &>div{
            display: flex;
            align-items: center;
            padding-left: 5px;
            img{
                width: 20px;
            }
        }
    }
</style>