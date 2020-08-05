<template>
    <div class="nav-item">
        <img :src="{imgUrl}" alt="">
        <span>{name}</span>
    </div>
</template>

<script>
export default {
    props:{
        imgurl:{
            type:String,
            default:'https://cube.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'
        },
        name:{
            type:String,
            default:'美食'
        }
    }
}
</script>

<style lang="less" scoped>
    .nav-item{
        width: 4rem;
        height: 3.466667rem;
        img{
            width:1.2rem;
            height: 1.2rem;
        }
        span{
            margin-top: 10px;
            font-size: .373333rem;
        }
    }
</style>