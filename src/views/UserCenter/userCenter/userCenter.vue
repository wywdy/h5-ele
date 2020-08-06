<template>
    <div class="All">
        <ul class="pensonal">
            <li class="pensonalInfo">
                <b>头像</b>
                <span class="pensonalInfoImg">
                    <input type="file" accept="image/jpeg,image/jpg,image/png" class="UPImg">
                    <img src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_60,h_60,m_fixed" style="width: 1.6rem; height: 1.6rem;">
                    <van-icon name="arrow" class="pensonalInfoImgIcon" />
                </span>
            </li>
            <li class="userName">
                <b>用户名</b>
                <span>809920d7838
                    <van-icon name="arrow" />
                </span>
            </li>
        </ul>
        <h2 class="accountBinding">账号绑定</h2>
        <div class="securitySetting"></div>
        <div class="logOut"></div>
    </div>
</template>

<style lang="less">
.All{
    margin: 0;
    padding: 0;
    line-height: 1.2;
    background-color: #f5f5f5;
    .pensonal{
       background-color: #fff;
        width: 100%;
        font-size: .426667rem;
        color: #333;
        .pensonalInfo{
            padding: .266667rem .373333rem;
            padding: 2.666667vw 3.733333vw;
            cursor: pointer;
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            -webkit-align-items: center;
            align-items: center;
            .pensonalInfoImg{
                display: -webkit-flex;
                display: flex;
                -webkit-align-items: center;
                align-items: center;
                &>input{
                    display: block;
                    position: absolute;
                    opacity: 0;
                    top: 0;
                    left: 0;
                }
                &>img{
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                }
                .pensonalInfoImgIcon{
                    fill: #ddd;
                    line-height: 1.2rem;
                    line-height: 12vw;
                }
            }
        }
        .userName{
            padding: .373333rem;
            padding: 3.733333vw;
            border-top: 1px solid #eee;
            cursor: pointer;
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            -webkit-align-items: center;
            align-items: center;
            &>span{
                color: #666;
                &>van-icon{
                    fill: #ddd;
                    height: .48rem;
                    height: 4.8vw;
                    width: .48rem;
                    width: 4.8vw;
                    display: inline-block;
                    line-height: 1.2rem;
                    line-height: 12vw;
                    padding-top: .133333rem;
                    padding-top: 1.333333vw;
                }
            }
        }
    }
    .accountBinding{
        margin: .426667rem 0 .186667rem .373333rem;
        margin: 4.266667vw 0 1.866667vw 3.733333vw;
        font-size: .32rem;
        color: #999;
        font-weight: 400;
    }
}
</style>

<script>
export default {
    
}
</script>
