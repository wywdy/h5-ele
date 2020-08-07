<template>
    <div class="back-top">
        <img :src="toTop" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return {
            toTop:require('@/assets/images/back.svg')
        }
    }
}
</script>

<style lang="less" scoped>
    .back-top{
        width: 40px;
        height: 40px;
        border:1px solid #999;
        border-radius: 50%;
        background: #ffff;
        position: fixed;
        bottom:70px;
        right: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 20px;
            height: 20px;

        }
    }
</style>>