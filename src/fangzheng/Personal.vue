<template>
  <div id="Personal" class="All">
    <div class="headPersonal">
      <div class="personalImg" style="width: 120.064px; height: 120.064px;">
        <img class="img" src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_120,h_120,m_fixed" alt="头像">
      </div>
      <div class="userInfo">
        <div class="username"><span style="font-size: .56rem;">用户名</span></div>
        <div class="phoneNumber"><van-icon name="phone-o" /><span>139****8361</span></div>
      </div>
      <div class="out">
        >
      </div>
    </div>
    <div class="">
      <div class="redEnvelope">

      </div>
      <div class="line"></div>
      <div class="goldCoin">

      </div>
    </div>

  </div>
</template>

<style lang="less">
.All{
  .headPersonal{
    padding: .666667rem .4rem;
    padding: 6.666667vw 4vw;
    background-color: #0085ff;
    -webkit-align-items: center;
    color: #fff;
    display: flex;
    align-items:center;
    .personalImg{

      overflow:hidden;
      .img{
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
    .userInfo{
      margin-left: 10px;
      background-color: gold;

    }
    .out{
      margin-left: auto;
      margin-right: 5px;
    }
  }
}


</style>

<script>

</script>