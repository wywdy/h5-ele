<template>
  <div id="List">
    <div class="AllList">
        <div class="personalList" 
                v-for="(item) in List"
                @click="goto(item.url)"
                :key="item.id">
            <div class="personalListIcon">
              <van-icon :name='item.icon' size="6vw" color="#00AAFF"/>
            </div>
            <div class="personalListDetails">
              <div class="operationOptions">
                <span class="operationOptionsTitle">{{item.title}}</span>
                <div class="operationOptionsimg">
                    <van-icon name="arrow" size="5vw" />
                </div>
              </div>
            </div>
        </div>

    </div>
  </div>
</template>

<style lang="less">
  .AllList{
    margin-top: 3vw;
    width: 100%;
    .personalList{
      display: flex;
      align-items:center;
      width: 100%;
      .personalListIcon{
        width: 12vw;
        height: 12vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .personalListDetails{
        height: 12vw;
        border-bottom-color: rgb(235, 237, 240);
        border-bottom-style: solid;
        border-bottom-width: 0.4vw;
        .operationOptions{
          width: 85vw;
          height: 11.6vw;
          display: flex;
          justify-content:space-between;
          align-items: center;
          .operationOptionsTitle{
            font-size: .4rem;
          }
        }
      }
    }
  }
</style>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  data(){
    return {
      // 个人中心数据
      List:[
        {id:1,title:'我的地址',icon:'location-o',url:'address'},
        {id:2,title:'我的收藏',icon:'like-o',url:'address'},
        {id:3,title:'推荐有礼',icon:'point-gift-o',url:'address'},
        {id:4,title:'我的客服',icon:'service-o',url:'address'},
        {id:5,title:'规则中心',icon:'description',url:'address'}
      ],
    }
  },
  methods:{
    goto(url){
      this.$router.push(url);
    // console.log(url)
    }
  },

  components:{
  }
}
</script>

