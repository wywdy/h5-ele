<template>
    <div class="product-list">
        <p><strong>热销</strong><span>大家喜欢吃,才叫真好吃</span></p>
        <van-list>
            <van-card
                    @click="handleClick(item)"
                    v-for="item in list" :key="item.key" :title="item.productName"
                    :origin-price="item.originalPrice"
                    :price='item.price'
                    :desc="item.desc"
                    :thumb="item.url"
            >
                <template #tags>
                    <p>月售{{item.sales}}份 好评率{{item.rate}}</p>
                    <van-tag plain type="danger" v-show="item.discount !==null">{{item.discount}}</van-tag>
                    <span class="discount-desc" v-show="item.discount !==null">{{item.limit}}</span>
                </template>
                <template #footer>
                    <van-icon class="icon-add" name="add" />
                </template>
            </van-card>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: "ProductList",
        data(){
            return{
                list: [],
                loading: false,
                finished: false,
                productInfo1:{
                    key:1,
                    productName:"(大杯)芋圆茉莉奶茶",
                    desc:"推荐糖度3分；茶香与茉莉花香交互融合，搭配芋圆，让你回味淡淡的清香。主要原料茉莉绿茶，辅料芋圆\n" +
                        "主要原料：其他",
                    sales:"110",
                    rate:'100%',
                    discount:"8折",
                    originalPrice:'17',
                    price:'13.6',
                    limit:'每单限一份优惠',
                    url:"https://cube.elemecdn.com/5/5b/731b4b14f27afc5af6ae67b54051dpng.png?x-oss-process=image/resize,m_lfit,w_141,h_141/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
                },
                productInfo2:{
                    key:2,
                    productName:"(中杯)芋圆鲜芋",
                    desc:"推荐糖度1分。软糯口渴的芋泥包裹着口感细软，绵甜香糯的芋圆，搭配健康味美的味全牛乳再加点淡淡的奶粉清香让整杯饮料更健康更清香。\n" +
                        "主要原料：其他",
                    sales:"6",
                    rate:'0%',
                    discount:null,
                    originalPrice:null,
                    price:'19',
                    limit:null,
                    url:"https://cube.elemecdn.com/2/ae/e952aa9a0c92861704a2b310e4f6dpng.png?x-oss-process=image/resize,m_lfit,w_141,h_141/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
                },
            }
        },
        methods:{
            handleClick(item){
                console.log(item)
            }
        },
         beforeMount() {
            this.list.push(this.productInfo1,this.productInfo2)
        }
    }
</script>

<style scoped lang="less">
.product-list{
    padding-left: 5px;
    width: 298px;
    position: relative;
    p{
        color: #333;
        display: flex;
        align-items: center;
        overflow: hidden;
        font-size: 12px;
        strong{
            margin-right: 1.333333vw;
            font-weight: 700;
            font-size: .32rem;
            color: #666;
            flex: none;
        }
        span{
            flex: 1;
            color: #999;
            font-size: .266667rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .van-list{

        .van-card{
            background-color: #ffffff;
            .van-card__header{

                .van-card__thumb{
                    width: 95px;
                    height: 95px;
                    .van-image{

                        img{

                        }
                    }
                }
                .van-card__content{

                    .van-card__title {
                        font-weight: 700;
                        overflow: hidden;
                        font-size: .4rem;
                        white-space: nowrap;
                        width: 40vw;
                        text-overflow: ellipsis;
                    }
                    .van-card__desc{
                        font-weight: 400;
                        margin: 1.333333vw 0;
                        font-size: 12px;
                        color: #999;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        width: 42.666667vw;
                        .van-tag{

                        }
                    }
                    p{
                        font-weight: 400;
                        margin: 1.333333vw 0;
                        font-size: 12px;
                        color: #999;
                    }
                    .discount-desc{
                        font-weight: 400;
                        margin: 1.333333vw 0;
                        font-size: 12px;
                        color: #f07373;
                        padding-left: 5px;
                    }

                    .van-card__bottom{

                        .van-card__price{
                            font-size: .4rem;
                            line-height: 4.266667vw;
                            color: rgb(255, 83, 57);
                            margin-right: .266667vw;
                        }
                    }
                }
            }
            .van-card__footer{
                .icon-add{
                    font-size: 22px;
                    position: relative;
                    top: -25px;
                    color: rgb(35, 150, 255);
                }
            }
        }
    }
}
</style>