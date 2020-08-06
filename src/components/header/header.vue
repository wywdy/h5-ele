<template>
    <div class="head" :style="{'background-image':bgColor,color:fontColor}">
       <slot>饿了么</slot>
    </div>
</template>

<script>
export default {
    props:{
        bgColor:{
            type:String,
            default:'linear-gradient(90deg,#0af,#0085ff)'
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