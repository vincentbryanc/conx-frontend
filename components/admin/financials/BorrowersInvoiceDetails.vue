<template>
    <div>
        <a-row>
            <a-col :lg="{ span: 13 }" :md="{ span: 13 }" :sm="{ span: 24 }">
                <a-layout-content class="layout-content">
                    <a-row>
                        <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 12 }">
                            <nuxt-link to="/admin/financials/borrowers-invoice">
                                <a-button type="primary"><a-icon type="arrow-left" />Back</a-button>
                            </nuxt-link>
                        </a-col>
                        <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 12 }">
                            <div class="text-right">
                                <a-button>Print <a-icon type="printer"></a-icon></a-button>
                            </div>
                        </a-col>
                        <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                            <br /><h1 class="title">Invoice</h1>
                        </a-col>
                        <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                            <div>
                                <b>Invoice No: </b> <br /> 
                                IVN-07242020-003 <br /><br />
                            </div>
                            <div>
                                <b>Billed to </b> <br />
                                Stark Industries <br />
                                200 Park Avenue <br />
                                New York, USA <br /><br />
                            </div>
                        </a-col>
                        <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                            <div>
                                <b>Issued Date: </b> <br /> 
                                July 24, 2020<br /><br />
                            </div>
                            <div>
                                <b>Conx Technologies </b> <br />
                                123 Street <br />
                                564-456-1111 <br />
                                conxtech@conx.com <br /><br />
                            </div>
                        </a-col>
                        <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                            <b>Employee ID: AOV000001</b><br /><br />
                        </a-col>
                        <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                            <div class="table-responsive">
                                <a-table :columns="columns" :data-source="data" :pagination="false">
                                </a-table><br />
                            </div>
                        </a-col>
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
                    </a-row>
                </a-layout-content>
            </a-col>
            <a-col :lg="{ span: 10, offset: 1 }" :md="{ span: 10, offset: 1 }" :sm="{ span: 24 }">
                <a-layout-content class="layout-content">
                    <h1 class="title">Payment Received</h1>
                    <b>Unpaid Balance: $4,114.00</b>
                    <a-form>
                        <a-form-item>
                            <a-radio-group>
                                <a-radio value="full-payment">Full Payment</a-radio>
                                <br /><br />
                                <a-radio value="partial">Partial</a-radio>
                            </a-radio-group>
                        </a-form-item>
                        <label>Amount</label>
                        <a-form-item>
                            <a-input
                                v-decorator="[
                                    'amount', { rules: [{ required: true, message: 'This field is required' }] },
                                ]"
                                placeholder="0.00">
                                <a-icon slot="prefix" type="dollar" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-button type="primary" block>Submit &amp; Print <a-icon type="check" /></a-button>
                        </a-form-item>
                    </a-form>
                </a-layout-content>
                <a-layout-content class="layout-content">
                    <h1 class="title">Payment History</h1>
                    <div class="table-responsive">
                        <a-table :columns="columnspaymenthistory" :data-source="paymenthistorydata" :pagination="false">
                        </a-table>
                    </div>
                </a-layout-content>
            </a-col>
        </a-row>
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        date: 'July 20, 2020',
        houlyrate: '$85',
        noofhours: '8',
        amount: '$680.00',
    },
    {
        key: '2',
        date: 'July 21, 2020',
        houlyrate: '$85',
        noofhours: '8',
        amount: '$680.00'
    },
    {
        key: '3',
        date: 'July 22, 2020',
        houlyrate: '$85',
        noofhours: '8',
        amount: '$680.00'
    },
    {
        key: '4',
        date: 'July 23, 2020',
        houlyrate: '$85',
        noofhours: '8',
        amount: '$680.00'
    },
    {
        key: '5',
        date: 'July 24, 2020',
        houlyrate: '$85',
        noofhours: '8',
        amount: '$680.00'
    },
];

const paymenthistorydata = [];

export default {
    name: "BorrowersInvoice",
    data() {
        return {
            data,
            paymenthistorydata,
        };
    },
    computed: {
        columns() {
            const columns = [
                {
                    title: 'Date',
                    dataIndex: 'date',
                    key: 'date',
                },
                {
                    title: 'Hourly Rate ($/hr)',
                    dataIndex: 'houlyrate',
                    key: 'houlyrate',
                },
                {
                    title: 'No. of Hours',
                    dataIndex: 'noofhours',
                    key: 'noofhours',
                },
                {
                    title: 'Amount',
                    dataIndex: 'amount',
                    key: 'amount',
                    align: 'right',
                },
            ];
            return columns;
        },
        columnspaymenthistory() {
            const columns = [
                {
                    title: 'Transaction Date',
                    dataIndex: 'date',
                    key: 'date',
                },
                {
                    title: 'Amount',
                    dataIndex: 'amount',
                    key: 'amount',
                },
                {
                    title: 'Running Balance',
                    dataIndex: 'runningbalance',
                    key: 'runningbalance',
                },
            ];
            return columns;
        },
    },
}
</script>

<style scoped>
.ant-form-item {
    margin-bottom: 5px;
}

.layout-content {
    min-height: auto;
    margin-bottom: 20px;
}
</style>