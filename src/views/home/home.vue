<template>
    <div class="home">
        <!-- 首页头部 -->
        <Header>
            <span>饿了么</span>   
        </Header>
        <!-- 搜索框吸顶 -->
        <Search ref='s2' class="s2" v-show="isSearchShow"/>
          <!-- 滚动区域 -->
        <Scroll  class="scroll-wrap" ref='wraps'  @scroll='scroll'>
                  <!--  定位-->
            <Address />
                 <!--  首页搜索-->
            <Search ref='s1' />
                <!-- banner -->
            <div class="banner">
                <img :src="banner" alt="">
            </div>
                <!-- 中部导航栏 -->
            <Nav />
                <!-- 点餐提醒 -->
            <div class="beg">
                <div class="beg-left">
                    <img :src="logo" alt="" @load="imgload">
                    <div>
                        <span>点餐提醒</span>
                        <span>已有 <b>37105</b> 人提醒自己吃饭 </span>
                    </div>
                </div>
                <div class="beg-right">
                    立即开启
                </div>
            </div>
                <!-- 轮播 -->
            <van-swipe class="my-swipe" 
            :autoplay="3000" :show-indicators="false">
                <van-swipe-item v-for="(item,index) in banners" :key="index" class="swiper-item">
                    <img :src="item" alt="" @load="imgload">
                </van-swipe-item>
            </van-swipe>
            <!-- 商家展示 -->
            <div class="shop-list">
                <h2>推荐商家</h2>
                <div class="tabs">
                    <div v-for="(item) in tabsList"
                    @click="changeTabIndex(item.id)"
                    :class="{act:isActive===item.id}"
                    :key="item.id">{{item.title}}</div>
                </div>
            </div>
            <!-- 商家列表 -->
            <List />
        </Scroll> 
        <!-- 返回顶部组件 -->
        <BackTop v-show="isShowBack" @click.native="backTop"/> 
        <!-- 底部选项卡 -->
        <Tab></Tab>
    </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import Search from '@/components/search/search.vue'
import Tab from '@/components/tab/tab.vue'
import Nav from './child/nav.vue'
import Address from './child/address.vue'
import List from './child/list.vue'
import Scroll from '@/components/scroll/scroll.vue'
import BackTop from '@/components/backTop/backTop.vue'
export default {
    data(){
        return {
            banner:require('@/assets/icon/banner.png'), // 广告图
            logo:require('@/assets/icon/logo.png'),  //logo图
            //轮播图数据
            banners:[   
               require('@/assets/icon/ban1.png'),
               require('@/assets/icon/ban2.png'),
               require('@/assets/icon/ban3.png'),
            ],
            //中部选项卡数据
            tabsList:[
                {id:1,title:'首单立减'},
                {id:2,title:'津贴优惠'},
                {id:3,title:'满减优惠'},
                {id:4,title:'下单返红包'},
            ],
            isActive:1,  //中部选项默认当前选择
            isShowBack: false, //返回箭头状态
            isSearchShow:false, //搜索框吸顶状态
            isTbaShow:false, 
            searchOffsettop:0,
            tabOffsetTop:0
        }
    },
    mounted(){
       // console.log(this.$refs.wrap)
    },
    methods:{
        changeTabIndex(id){
            this.isActive=id
            this.$bus.$emit('changeShopIndex',id)
        },
        // finishPull(){
        //     this.$refs.wraps.finishUp()
        // },
        backTop(){
            this.$refs.wraps.scrollTo(0,0,500)
        },
        scroll(position){
            //console.log(position)
            //判断返回箭头状态
            this.isShowBack = position > 500

            //判断搜索框是否吸顶
            this.searchOffsettop=this.$refs.s1.$el.offsetTop - 10
            //console.log(this.searchOffsettop)
            this.isSearchShow = position >= this.searchOffsettop

            //判断shopTabs是否吸顶
            this.isTbaShow = position >= 524
            // this.tabOffsetTop = this.$refs.shopTabs.offsetTop + 448
            // console.log("offsetTop",this.tabOffsetTop)
            // this.isTbaShow = position >=this.tabOffsetTop

        },
        imgload(){
            this.$refs.wraps.refresh()
        }
    
    },
    components:{
        Header,
        Search,
        Nav,
        Tab,
        Address,
        List,
        Scroll,
        BackTop
    }
}
</script>

<style lang="less" scoped>
    .home{
        .scroll-wrap{
            height: calc(100vh - 110px);
        }

        .banner{
            width: 100%;
            height: 126px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .beg{
            width: 90%;
            height: 60px;
            margin: 15px auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 12px;
            border:1px solid #cccccc;
            border-radius: 10px;
            .beg-left{
                display: flex;
                &>img{
                    width:50px;
                    margin-right: 10px;
                }
                &>div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    span:nth-child(1){
                        color: rgb(0, 119, 255);
                    }
                    span:nth-child(2){
                        margin-top: 5px;
                        color: #8f8b8b;
                    }
                    b{
                        color: rgba(163, 212, 224, 0.938);
                    }
                }
            }
            .beg-right{
                height: 20px;
                line-height: 20px;
                padding: 10px;
                border-radius: 5px;
                background:#00AAFF ;
                color: white;
            }
        }
        .my-swipe{
            .swiper-item{
                width: 96%;
                margin: 0 auto;
            }
            img{
                width: 100%;            
            }
        }
        .shop-list{
            h2{
                font-size: 18px;
                color: #49A8E8;
                padding-left: 10px;
            }
            .tabs{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                font-size: 12px;
                &>div{
                    flex-basis: 23%;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    background: #eeeaea;
                    color: #555454;
                    border-radius: 10px;
                }
                .act{
                    background:#c0daebef ;
                    color:#4799cf ;
                }
        }
        }
        .s2{
            position: fixed;
            top:60px;
            left: 0;
            z-index: 999;
        }
      
    }
</style>