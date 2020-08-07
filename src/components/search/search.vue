<template>
    <div class="search">
        <div>
            <van-icon name="search" @click="jump"/>
            <input type="text" placeholder="搜索商家、商品名称">
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        jump(){
            this.$router.push('./query')
        }
    }
}
</script>

<style lang="less" scoped>
    .search{
        width: 100%;
        background: white;
        &>div{
            width: 95%;
            height: 30px;
            margin: 10px auto 10px auto;
            border-radius: 15px;
            font-size: 12px;
            color:#969696;
            background: #e9e6e6;
            display: flex;
            justify-content: center;
            align-items: center;
        }
       input{
           border: none;
           outline: none;
           background: none;
       }
    }
</style>