<template>
    <div class="All">
        <ul class="pensonal">
            <li class="pensonalInfo">
                <b>头像</b>
                <span class="pensonalInfoImg">
                    <input type="file" accept="image/jpeg,image/jpg,image/png" class="UPImg">
                    <img src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_60,h_60,m_fixed" style="width: 1.6rem; height: 1.6rem;">
                    <van-icon name="arrow" class="pensonalInfoImgIcon" size="5vw"/>
                </span>
            </li>
            <li class="userName">
                <b>用户名</b>
                <span>809920d7838
                    <van-icon name="arrow" size="5vw"/>
                </span>
            </li>
        </ul>
        <h2 class="accountBinding">账号绑定</h2>
        <ul class="phoneNum">
            <li>
                <span class="Phone">
                    <i>
                        <van-icon name="phone" color="#00AAFF" size="5vw" />
                    </i>
                    <b>手机</b>
                </span>
                <span class="Num">
                    <span>139****8361</span>
                    <van-icon name="arrow" size="5vw"/>
                </span>
            </li>
        </ul>
        <h2 class="accountBinding">安全设置</h2>
        <ul class="securitySetting">
            <li>
                <span>登陆密码</span>
                <span class="setting">
                    <span>未设置</span>
                    <van-icon name="arrow" size="5vw"/>
                </span>
            </li>
        </ul>
        <button type="button" class="logOut">退出登录</button>
    </div>
</template>

<style lang="less" scoped>
.All{
    margin: 0;
    padding: 0;
    line-height: 1.2;
    height: 100vh;
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
            display: flex;
            justify-content: space-between;
            align-items: center;
            .pensonalInfoImg{
                display: flex;
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
            display: flex;
            justify-content: space-between;
            align-items: center;
            &>span{
                color: #666;
                display: flex;
                align-items: center;
                &>van-icon{
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
    .phoneNum{
        background-color: #fff;
        width: 100%;
        font-size: .426667rem;
        color: #333;
        &>li{
            border-top: 1px solid #eee;
            padding: .266667rem .373333rem;
            padding: 2.666667vw 3.733333vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .Phone{
                display: flex;
                justify-content:center;
                align-items: center;
                &>i{
                    display: flex;
                    justify-content:center;
                    padding: .053333rem;
                    padding: .533333vw;
                    border-radius: .106667rem;
                    border-radius: 1.066667vw;
                    margin-right: .133333rem;
                    margin-right: 1.333333vw;
                    &>van-icon{
                        height: .426667rem;
                        height: 4.266667vw;
                        width: .426667rem;
                        width: 4.266667vw;
                    }
                }
            }
            .Num{
                display: flex;
                justify-content:center;
                align-items: center;
                &>span{
                    color: #666;
                }
                &>van-icon{
                    height: .48rem;
                    height: 4.8vw;
                    width: .48rem;
                    width: 4.8vw;
                    line-height: 1.2rem;
                    line-height: 12vw;
                    padding-top: .133333rem;
                    padding-top: 1.333333vw;
                }
            }
        }
    }
    .securitySetting{
        background-color: #fff;
        width: 100%;
        font-size: .426667rem;
        color: #333;
        &>li{
            padding: .373333rem;
            padding: 3.733333vw;
            border-top: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .setting{
                display: flex;
                justify-content:center;
                align-items: center;
                &>span{
                    color: #0097ff;
                }
                &>van-icon{
                    height: .48rem;
                    height: 4.8vw;
                    width: .48rem;
                    width: 4.8vw;
                    line-height: 1.2rem;
                    line-height: 12vw;
                    padding-top: .133333rem;
                    padding-top: 1.333333vw;
                }
            }
        }
    }
    .logOut{
        display: block;
        width: 100%;
        text-align: center;
        padding: .373333rem 0;
        padding: 3.733333vw 0;
        margin: .533333rem 0;
        margin: 5.333333vw 0;
        color: #ff5339;
        border-radius: .08rem;
        border-radius: .8vw;
        font-size: .426667rem;
        font-weight: 700;
        background-color: #fff;
        outline: none;
        border: none;
    }
}
</style>

<script>
export default {
    
}
</script>
