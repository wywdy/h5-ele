<template>
  <div id="Personal" class="All">
    <div class="headPersonal">
      <div class="userInfo">
        <div class="username"><span>用户名</span></div>
        <div class="phoneNumber">
          <span style="font-size: .32rem;color:#777">再忙也记得要吃饭哟</span>
        </div>
      </div>
      <div class="personalImg" style="width: 80px; height: 80px;">
        <img class="img" src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_120,h_120,m_fixed" alt="头像">
      </div>
    </div>
    <div class="Assets">
      <div class="redEnvelope" style="margin-right:2vw">
        <div class="redEnvelopeNameDiv">
          <span class="redEnvelopeName">红包</span>
          <img class="redEnvelopeImg" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//gAPTGF2YzU3LjI0LjEwMv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIASABBAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQcEBggDAgH/xABFEAABAQQCDQgIBgICAwAAAAAAAgEDBAUHNgYREhUhIlVzdJOywdETFjFBUWGRlBQyM1NxgaGxI0JSYnKSQ1Qk8DVj0v/EABsBAQACAwEBAAAAAAAAAAAAAAADBQIEBgcB/8QANREAAgEBBAgGAQMDBQAAAAAAAAECAwQRElEFITM0UnGRwQYTFDEyckEiI2EkodFCYoGx8P/aAAwDAQACEQMRAD8A6dAPxSkoSpSlJYlmFrW4GMZ3tAP0Ebf6T5UgdckX+k+VIHXJMcccyb01bgfRkkCNv9J8qQOuSL/SfKkDrkjHHMemrcD6MkgRt/pPlSB1yRf6T5UgdckY45j01bgfRkkCNv8ASfKkDrki/wBJ8qQOuSMccx6atwPoySBG3+k+VIHXJF/pPlSB1yRjjmPTVuB9GSQI2/0nypA65Iv9J8qQOuSMccx6atwPoySBG3+k+VIHXJF/pPlSB1yRjjmPTVuB9GSQI2/0nypA65Iv9J8qQOuSMccx6atwPoySBG3+k+VIHXJF/pPlSB1yRjjmPTVuB9GSQI2/0nypA65Iv9J8qQOuSMccx6atwPoySBG3+k+VIHXJF/pPlSB1yRjjmPTVuB9GSQI2/wBJ8qQOuSL/AEnypA65IxxzHpq3A+jJIEbf6T5UgdckX+k+VIHXJGOOY9NW4H0ZJAjb/SfKkDrki/0nypA65IxxzHpq3A+jJIGNBx0HG3XokS5iLnp5N4xVr42jJPqd5FKLi7pK5gAH0+A0ull6tFjLtKVNSl5EIQvvZaa203utsYboaRS5V1xpKdlRDaNnIsdEJO20r8ypAAUh6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT9gL1bqy+Xcmq5u1tQvvS1jbbGl5lFWC1vled3NL1LSw/B8zhPFK/qYP/b3YABunMg0ilyrrjSU7KjdzSKXKuuNJTsqIbRs5FloffaXMqQAFIengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE7YNW+V53c0vUoqwat8rzu5pepaWH4PmcL4p3mH17sAA3TmAaRS5V1xpKdlRu5pFLlXXGkp2VENo2ciy0PvtLmVIACkPTwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACdsGrfK87uaXqUVYNW+V53c0vUtLD8HzOF8U7zD692AAbpzANIpcq640lOyo3c0ilyrrjSU7KiG0bORZaH32lzKkABSHp4AAAAAAAAAAAAAJ2T2NRMbcvH/8Ax3HezGV8GdXxaR1KsKSxTdxFWr06EcVR3Igj1cwsQ+9g4er/AIoa0sSBkkBBezcJWr9bzGb9egkyunpRLVCJS1dOxTupwv5lX3sj/wDSiNW3gYz5w9c+1dLR/NLWfctk+VJYpNyrGT3ka0pL8xIY6enf+qH9ypQWLMLHYCLuvweRefrd4PFnQ01CcSKKlv4ntXHvEdXxZ1G7RttKq7vZlpZtJ0bQ8Ps8mRIANwsQAAAAAAAAAAACdsGrfK87uaXqUVYNW+V53c0vUtLD8HzOF8U7zD692AAbpzAK9pufLc2Lwjx3/uJ+eIosIrmnaqUJpidhZDaNnIsNFb5T5lVQcUiJRi4FdbP+9Rkmqu1qQq6Sq0phNwMcl9ivMV59G/DgUh6ZCpfqZngAEoAAAAAAANisOlTIuJ9Lfp/ActwJ/Uvgwjq1VSg5yIbRXjZ6bqS/BIWM2PpdJTFx6bp50u3bfy97WdvcbUCNnColwnlnDxSUp9dlpmDvOcqVZV53yZxdevO1VMU2SQI2Tx3pCVO3ntE/VhJEMk4u5mvKLi7mAAfD4D5Um6xVELER0RER3IwSrlPQzAzD3/AmXaVJSlKlXSutvaZSi4+5lKLj7mmWTSD0e6i4JP4P+R3+nvZ3dxrJbXrYqsYruyWWXtmH4fsHuM77u1ny+xc2C1up+3P3/B0midIOr+zVev8AH8kSACzL0AAAAAAH5btYVHnEPkOU3TxVzv8AgQkZGriMX1XfZxBhKaibZYLHcrZ3JXbj2fLYVduBv0OhjmejWvslz+5p0wWlh+D5nCeJW3aIN8PdgAG6c4CuadqpQmmJ2FljFc07VShNMTsLIbRs5G/ove6fMogAFIeiEjBzJqPw3+Mnt62fHtJhK0rTdJVbSasesPEPIdV07V8upoJY1Wvc2YGDCzB0/wAVWIr93R8mmcDYUk/YAAH0et6paMphEwMvcOE/kZh71Nwt+pXshc+kTmER/wCxjfDDuLNKjSlTXGH/ACc5p2s74Ulz/wDf3B8qYlSblXWfQKg581mMcrl8WlTv1elDdzSfg4hMU4S8T82djewRkOmKcKdq+TexvaQUC+XL4tTt56tu0viTbSP8on2kf5RshFzqN5J1yDtWMvp7mGbGRSIeGU9Vjdne3qIeVw6ouJVEv8ZKW+KuBjCP+pmEIpfqZmyeC9Hdco89ov6M7CSAMG3J3swlJyd7BEWVQXpcofe8c/iI+XSzwJc+VJSpKkq/Ng8TKnN05Ka/BnRqOlUU1+GVKD0iHXJP3jv9C2s8GnmdUnfrO+TvV6ABixEa5h/WVdK7GdJ9DaWtmUYEZMUOsV3jq+jOJHRUc8iMX1E9jN7TEBDKrkfb56t6q6eKulHwACE2WjWvslz+5p0wcz0a19kuf3NOmC0sPwfM43xJvEPr3YABunOgrmnaqUJpidhZYxXNO1UoTTE7CyG0bORv6L3unzKIABSHogAAAMmHjXzn810nsbuMYA+ptexOw8xcvfWxFfu6PEzjVD1cvnrn2bxSft4AljWu9zfrEf8Az8P/ABV9mliFP2JzhSLIIDl0pxnjEW2YOnBvLgKPSauqp/wc5prXWjJZd2D5UtKE3SlJSntafR4xTn0hwpzdXN11/MrkU5+elQ/v3X92EdOEQ8Q65V29dcojvZhZxP28iPer8GHw8kqEO1K5ZWKxrehnUSxwJ3pk0cCd6ZHO1LilOXLx5cu0dbehjDYXb6FdO0u3b50lKejHYa/LYVMW/wCTUpScFsk7yI96vwYZVMLdzZnVwt3NkimIcrVcpeoUrsS1h7EZCypMO/S+5VSrXd3EmQySXsa8kl8QAFKSnGV+XCYnwq2cWmTSNzqvu0iYiYOXXqqu1ft4kXMot7Gxb98p4pSVvFLYzqwttmIdZBXRSO4hUcYKJmREwfPsVOInsZxMMAyMW2/cAAHwAAA2WjWvslz+5p0wcz0a19kuf3NOmC0sPwfM47xJvEPr3YABunOgrmnaqUJpidhZYxXNO1UoTTE7CyG0bORv6L3unzKIABSHogAAAAAAAAB+pU1CkvE4qktY1nxYX1J45EzlcNFu/wDIhjW9yutnjbKEN7oznqYd+qVxKrl2+bduWt6l9bPn9/iaGkKLqU8S90Vuk7O6tLHH3j/0WYY8c6W+hnjt2q5U21a8TIBQp3HOJ3EBeqM98n+7T8VKotKVKU+Tisb+dpsB5xHsHn8G/Yk82RKqsjV4GHexT25cKuVWrfTa+xm3qjPfJ/u0/JClqYtV0lScRvV3sNgM6lRxdyM6lRp3Ih4GXxLmJdvHjxKks729hMAEMpOXuQSk5a2CBs2mSZbY7Equrl4+ZyDv4qwN+ltpPFQWfTtk2mnIuFXUJDW0I7FK61bjZsdF1aqyXubdhoOtVWS1s1cAHRnUgAAAAAAAAGy0a19kuf3NOmDmejWvslz+5p0wWlh+D5nHeJN4h9e7AAN050Fc07VShNMTsLLGK5p2qlCaYnYWQ2jZyN/Re90+ZRAAKQ9EAAAAAAAAAASpSVXScVSQAC17CbK0TN27go94lEezAxTeh6z/AOu75m4HPHq/tN4sds7fwqUuJslUQ7TgY+Z67Pj2/wDekp7Vo93udLp/gpLZox346PT/AAWeCPlc4l0zTdQUW6e/st2ls+LG4SQKuUXF3NFNKLi7pK5gAGJ8AIibWRSuVJV6XFo5T3aMZfh1fQruySzWMmqVOIRKoSEbgbabjrZ3t6md31NqjZKlZ6lcszbs9iq13qVyzJizqy1ly8lsreXV1gfPmdHelLfu35FdgF9QoxoxwxOks9nhZ4YIgAExMAAAAAAAAAbLRrX2S5/c06YOZ6Na+yXP7mnTBaWH4Pmcd4k3iH17sAA3TnQVzTtVKE0xOwssYrmnaqUJpidhZDaNnI39F73T5lEAApD0QAAAAAAAAAAAAAAAJVc4xKQtkE3hU3LiYxKU9jVtUzwaRYMZRjLVJXmMoRlqkryf53z7KK/6J4GBFTuaReLEx8StPZyjWM8GEeDFUaa1qK6GKo0461FdAACQkAAAAAAAAAAAAAAANlo1r7Jc/uadMHM9GtfZLn9zTpgtLD8HzOO8SbxD692AAbpzoK5p2qlCaYnYWWMVzTtVKE0xOwshtGzkb+i97p8yiAAUh6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbLRrX2S5/c06YOZ6Na+yXP7mnTBaWH4Pmcd4k3iH17sAA3TnQVzTtVKE0xOwssYrmnaqUJpidhZDaNnI39F73T5lEAApD0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2WjWvslz+5p0wcz0a19kuf3NOmC0sPwfM47xJvEPr3YABunOgrmnaqUJpidhZYxXNO1UoTTE7CyG0bORv6L3unzKIABSHogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABstGtfZLn9zTpg5no1r7Jc/uadMFpYfg+Zx3iTeIfXuwADdOdBXNO1UoTTE7CyxiuadqpQmmJ2FkNo2cjf0XvdPmUQACkPRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADZaNa+yXP7mnTBzPRrX2S5/c06YLSw/B8zjvEm8Q+vdgAG6c6CuadqpQmmJ2FljFc07VShNMTsLIbRs5G/ove6fMogAFIeiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGy0a19kuf3NOmDmejWvslz+5p0wWlh+D5nHeJN4h9e7AAN050Fc07VShNMTsLLGNLpck8TOLEHiYJ216+hnqYjk2YWqSxjWNtM622m27XcRV03TaRu6NnGFqpyk7lec7AAoz0YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2WjWvslz+5p0wc9UQyeJmFl8NGu3avRIJrXjx5+W3aaxibfbbb0dh0KWtiTUGzi/EU4ytEUn7LuwADcKAAAAjYqQyeJfqexMrgXrxvStcOhrW/FtrCePNeQ5Fl3l0cCYBjgjkSqtUWpSfUh+a8hyLLvLo4DmvIciy7y6OBMAYI5Dz6vE+rIfmvIciy7y6OA5ryHIsu8ujgTAGCOQ8+rxPqyH5ryHIsu8ujgOa8hyLLvLo4EwBgjkPPq8T6sh+a8hyLLvLo4DmvIciy7y6OBMAYI5Dz6vE+rIfmvIciy7y6OA5ryHIsu8ujgTAGCOQ8+rxPqyH5ryHIsu8ujgOa8hyLLvLo4EwBgjkPPq8T6sh+a8hyLLvLo4DmvIciy7y6OBMAYI5Dz6vE+rIfmvIciy7y6OA5ryHIsu8ujgTAGCOQ8+rxPqyH5ryHIsu8ujgOa8hyLLvLo4EwBgjkPPq8T6sh+a8hyLLvLo4DmvIciy7y6OBMAYI5Dz6vE+rIfmvIciy7y6OA5ryHIsu8ujgTAGCOQ8+rxPqyH5ryHIsu8ujgOa8hyLLvLo4EwBgjkPPq8T6sh+a8hyLLvLo4DmvIciy7y6OBMAYI5Dz6vE+rPKFh3MK4S5hnLpy7T0IdoYlLPkw9QDIjbb1sAAHw/9k=" >
        </div>
        <div class="redEnvelopeNumDiv">
          <span class="redEnvelopeNum" style="color: rgb(255, 95, 62);">0</span>
          <span class="redEnvelopeCompany">个未使用</span>
        </div>
      </div>
      <div class="redEnvelope" style="margin-left:2vw">
        <div class="redEnvelopeNameDiv">
          <span class="redEnvelopeName">钱包</span>
          <img class="redEnvelopeImg" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3967436763,3618724292&fm=26&gp=0.jpg" >
        </div>
        <div class="redEnvelopeNumDiv">
          <span class="redEnvelopeNum" style="color: rgb(255, 95, 62);">￥0</span>
        </div>
      </div>
    </div>
    <div class="order">

    </div>
    <List />
  </div>
</template>

<style lang="less">
.All{
  margin: 0;
  padding: .466667rem .2rem;
  padding: 4.666667vw 2vw;
  .headPersonal{
    -webkit-align-items: center;
    display: flex;
    align-items:flex-start;
    margin-bottom: 2vw;
    margin-bottom: .2rem;
    .personalImg{
      overflow:hidden;
      padding: 0 4vw;
      .img{
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
    .userInfo{
      padding-left: 5vw;
      overflow: hidden;
      -webkit-flex-grow: 1;
      flex-grow: 1;
      .username{
        font-size: .8rem;
        margin-bottom: .213333rem;
        margin-bottom: 2.133333vw;
        font-weight: 700;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        .phoneNumber{
          color: #cccccc;
        }
      }
      .personalImg{
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        font-size: .32rem;

      }
    }
  }
  .Assets{
    display: flex;
    height: 2.24rem;
    height: 22.4vw;
    padding-bottom: 0.2rem;
    padding-bottom: 2vw;
    justify-content:center;
    align-items:center;
    .redEnvelope{
      width:50%;
      height: 16vw;
      padding: 0.3rem;
      padding: 3vw;
      // margin: 0.1rem;
      // margin: 1vw;
      border-radius: 0.2rem;
      border-radius: 2vw;
      vertical-align: middle;
      background-color: #f0f0f0;
      .redEnvelopeNameDiv{
        height: 10vw;
        display: flex;
        .redEnvelopeName{
          -webkit-flex-grow: 1;
          flex-grow: 1;
          font-size: .5rem;
          font-weight: 700;
        }
        .redEnvelopeImg{
          overflow:hidden;
          width: 20px; 
          height: 20px;
        }
      }
      .redEnvelopeNumDiv{
        display: flex;
        height: 6vw;
        align-items:flex-end;
        .redEnvelopeNum{
          font-size: .5rem;
          font-weight: 600;
        }
        .redEnvelopeCompany{
          font-size: .4rem;
          color: #888;
        }
      }
    }
    .goldCoin{
      display: table-cell;
      width: 33.3333%;
      vertical-align: middle;
      text-align: center;
    }
  }
  .order{
    display: flex;
    align-items: center;
    background-image: linear-gradient(90deg,#eee,#fff);
    padding: 0.3rem;
    padding: 3vw;
    border-radius: 0.2rem;
    border-radius: 2vw;
  }
}


</style>

<script>
import List from './child/List'
export default {
    data(){
        return {
  
        }
    },
    methods:{
    },
    components:{
      List
    }
}
</script>