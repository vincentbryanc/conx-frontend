<template>
    <div>
        <a-row>
            <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                <div style="float: right">
                    <a-button>Print <a-icon type="printer"></a-icon></a-button>
                </div>
                <div>
                    <b>Employee Name: </b> Steve Rogers <br /> 
                </div>
                <div>
                    <b>Duration of Work </b> <br />
                    Start Date: <span>July 20, 2020</span>
                    End Date: <span>July 24, 2020</span>
                </div>
            </a-col>
        </a-row>
        <br />
        <a-row>
            <a-col :lg="{ span: 22, offset: 1 }" :md="{ span: 22, offset: 1 }" :sm="{ span: 24 }">
                <a-calendar>
                    <div slot="dateCellRender" slot-scope="value" class="events">
                        <span v-for="item in getListData(value)" :key="item.content">
                            <p class="hoursworked" @click="showModal">{{ item.hoursworked }} hours</p>
                        </span>
                    </div>
                </a-calendar>
            </a-col>
        </a-row>
        <br />
        <a-row>
            <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                <a-form>
                    <a-form-item>
                        <label>Other Expenses</label>
                        <a-input
                            placeholder="Other Expenses" />
                    </a-form-item>
                    <label v-if="this.$store.state.action === 'resolve'">Client Request Message</label>
                    <label v-else>Note</label>
                    <a-form-item>
                        <a-input type="textarea" rows="3" />
                    </a-form-item>
                </a-form>
            </a-col>
            <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                <br />
                <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                    <div class="text-right">
                        <b>Subtotal</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                    <div class="text-right">
                        <b>$3,400.00</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                    <div class="text-right">
                        <b>Service Charge (10%)</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                    <div class="text-right">
                        <b>$340.00</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                    <div class="text-right">
                        <b>Other Expenses</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                    <div class="text-right">
                        <b>$0.00</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                    <div class="text-right">
                        <b>Tax</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                    <div class="text-right">
                        <b>$374.00</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                    <div class="text-right">
                        <h2><b>Invoice Total</b></h2>
                    </div>
                </a-col>
                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                    <div class="text-right">
                        <h2><b>$4,114.00</b></h2>
                    </div>
                </a-col>
            </a-col>
        </a-row>
        <a-modal v-model="visible" title="Edit Hours Worked" :width="380" centered>
            <template slot="footer">
                <a-button 
                    key="back" 
                    @click="handleCancel">Close</a-button>
                <a-button 
                    type="primary" 
                    @click="handleCancel">Update <a-icon type="check" /></a-button>
            </template>
            <div>
                <label>Hours Worked</label>
                <a-input
                    type="number"
                    v-decorator="[
                        'hoursworked', { rules: [{ required: true, message: 'This field is required' }] },
                    ]"
                    placeholder="Hours Worked"
                    value="8" />
            </div>
        </a-modal>
    </div>
</template>

<script>
export default {
    name: "LoanBillingDetails",
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        getListData(value) {
            let listData;
            switch (value.date()) {
                case 20:
                    listData = [
                        { hoursworked: 8 },
                    ];
                    break;
                case 21:
                    listData = [
                        { hoursworked: 8 },
                    ];
                    break;
                case 22:
                    listData = [
                        { hoursworked: 8 },
                    ];
                    break;
                case 23:
                    listData = [
                        { hoursworked: 8 },
                    ];
                    break;
                case 24:
                    listData = [
                        { hoursworked: 8 },
                    ];
                    break;
                default:
            }
            return listData || [];
        },
        showModal(action) {
            this.visible = true;
        },
        handleCancel(e) {
            this.visible = false;
        },
    },
}
</script>

<style scoped>
.hoursworked {
    color: #12109C;
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
}
</style>