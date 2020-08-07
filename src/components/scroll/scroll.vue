<template>
    <div ref="wrap" >
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"Scroll",
    data(){
        return {
            bscroll:null
        }
    },
    mounted(){
       // console.log(this.$refs.wrap)
        this.bscroll = new BScroll(this.$refs.wrap,{
              probeType:3, //监听滚动全过程
              pullUpLoad:true,  //开启上拉加载
              click:true,  
        })
          //监听上拉加载
        this.bscroll.on('pullingUp',()=>{
            //console.log('scroll,pullingUp')
            this.$bus.$emit('pullUp')
        })
        //监听滚动位置
        this.bscroll.on('scroll',(position)=>{
            this.$emit('scroll',-position.y)
        })
        this.$bus.$on('finishPull',()=>{
            this.finishUp()
        })
    },
    methods:{
        //结束上拉加载
      finishUp(){
          this.bscroll.finishPullUp()
          //console.log('scroll,finishPullUp')
      },
      //返回指定位置
      scrollTo(x=0,y=0,time=300){
        this.bscroll.scrollTo(x,y,time)
       },
     //刷新，重新计算滚动高度
     refresh(){
         this.bscroll.refresh()
     }   
  

    }
}
</script>

<style lang="less" scoped>

</style>