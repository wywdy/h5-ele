<template>
    <div class="head" :style="{'background-image':bgColor,color:fontColor}">
       <div class="left"><slot name="left"></slot></div>
       <slot>饿了么</slot>
       <slot name="right"></slot> 
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
        height:60px;
        font-size: 18px;
        font-weight: bold;
        position: relative;
        z-index: 99;
        .left{
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
        }
    
    }
</style>