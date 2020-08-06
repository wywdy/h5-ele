<template>
    <div class="search">
        <van-icon name="search" />
        <input type="text" placeholder="搜索商家、商品名称">
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .search{
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
       input{
           border: none;
           outline: none;
           background: none;
       }
    }
</style>