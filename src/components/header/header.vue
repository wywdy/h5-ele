<template>
    <div class="head" :style="{background:bgColor,color:fontColor}">
       <slot>饿了么</slot>
    </div>
</template>

<script>
export default {
    props:{
        bgColor:{
            type:String,
            default:"#000000"
        },
        fontColor:{
            type:String,
            default:"#ffffff"
        }
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
    .head{
        display: flex;
        justify-content: center;
        align-items: center;
        height:1.6rem;
        font-size: .48rem;
        font-weight: bold;
    }
</style>