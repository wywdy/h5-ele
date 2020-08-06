<template>
  <div id="List">
    <div class="AllList">
        <div class="personalList" >
            <div class="personalListIcon">
              <van-icon name="location" size="6vw" />
            </div>
            <div class="personalListDetails">
              <div class="operationOptions">
                <span class="operationOptionsTitle">我的地址</span>
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
      
    }
  },
  components:{
  }
}
</script>

