<template>
    <div>
        <a-row>
            <a-col :lg="{ span: 13, offset: 5 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                <a-row>
                    <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 12 }">
                        <br /><h1 class="title">Active Loan Details</h1>
                    </a-col>
                    <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 12 }">
                        <div class="text-right">
                            <a-button>Download <a-icon type="download"></a-icon></a-button>
                            <a-button>Print <a-icon type="printer"></a-icon></a-button>
                        </div>
                    </a-col>
                </a-row>
                <a-row>
                    <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                        <div>
                            <b>Employee Name: </b> <span>Steve Rogers</span> <br />
                        </div>
                        <div>
                            <b>Level of Experience: </b> <span>Master</span> <br />
                        </div>
                        <div>
                            <b>Area of Work: </b> <span>Commercial, Industrial, Residential</span> <br />
                        </div>
                        <div>
                            <b>Zip Code: </b> <span>95035</span> <br />
                        </div>
                        <div>
                            <b>Duration of Work: </b> <br> 
                            <b>Start Date: </b><span>July 20, 2020</span>
                            <b>End Date: </b><span>July 24, 2020</span> <br />
                        </div>
                    </a-col>
                    <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                        <div>
                            <b>Invoice #: </b> <span>IVN-07272020-0001</span> <br />
                        </div>
                        <div>
                            <b>Loaning Company: </b> <span>Agents of Value</span> <br />
                        </div>
                        <div>
                            <b>Borrowing Company: </b> <span>Stark Industries</span> <br />
                        </div>
                        <div>
                            <b>Hourly Rate ($/hr): </b> <span>$85</span> <br />
                        </div>
                        <div>
                            <b>Additional Details: </b> <br />
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> <br /><br />
                        </div>
                    </a-col>
                    <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                        <a-table :columns="columns" :data-source="data" :pagination="false">
                        </a-table><br />
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
    name: "ActiveLoanAndBorrowDetails",
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