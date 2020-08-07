<template>
    <van-form @submit="onSubmit" class="All">
        <div class="Picker">
            <van-picker 
                :columns="columns" 
                :show-toolbar=false
                @change="onChange" 
                :item-height=50
                :visible-item-count=5
                />
        </div>
        <div class="usingDay">重复周期</div>
        <div class="buttenDiv">
     
        </div>
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
            提交
            </van-button>
        </div>
    </van-form>
</template>
<style lang="less" scoped>
.All{
    .usingDay{
        padding-left: 5vw;
        height: 20vw;
        display: flex;
        align-items: center;
        font-size: 0.5rem;
        color: #666;
    }
}
</style>
<script>
import Vue from 'vue';
import { Form } from 'vant';

Vue.use(Form);
    export default {
        data() {
            return {
                time:{
                    hour:'12',
                    minute:'00'
                },
                columns: [
                    // 第一列
                    {
                    values: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                    defaultIndex: 12,
                    },
                    // 第二列
                    {
                    values: ['00', '10', '20' , '30' , '40' , '50' ],
                    defaultIndex: 0,
                    },
                ],
            };
        },

        methods: {
            onSubmit(values) {
                console.log(this.time.hour , this.time.minute);
            },
            //修改时间
            onChange(picker, value, index) {
                this.time.hour=value[0]
                this.time.minute=value[1]
            },
            filter(type, options) {
                if (type === 'minute') {
                    return options.filter((option) => option % 10 === 0);
                }
                return options;
            },

        },
    }

</script>