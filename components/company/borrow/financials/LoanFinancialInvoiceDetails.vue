<template>
    <div>
        <a-row>
            <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                <div class="text-right">
                    <a-button>Download <a-icon type="download"></a-icon></a-button>
                </div>
            </a-col>
            <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                <div>
                    <b>Invoice No: </b> <br /> 
                    IVN-07242020-003 <br /> 
                </div>
                <div>
                    <b>Billed to </b> <br />
                    Stark Industries <br />
                    200 Park Avenue <br />
                    New York, USA <br />
                </div>
            </a-col>
            <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                <div>
                    <b>Issued Date: </b> <br /> 
                    July 24, 2020
                </div>
                <div>
                    <b>Conx Technologies </b> <br />
                    123 Street <br />
                    564-456-1111 <br />
                    conxtech@conx.com <br />
                </div>
            </a-col>
            <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                <b>Employee ID: AOV000001</b>
            </a-col>
            <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                <a-table :columns="columns" :data-source="data" :pagination="false">
                </a-table>
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
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        date: 'July 20, 2020',
        hourlyrate: '$85',
        noofhours: '8',
        amount: '$680.00',
    },
    {
        key: '2',
        date: 'July 21, 2020',
        hourlyrate: '$85',
        noofhours: '8',
        amount: '$680.00',
    },
    {
        key: '3',
        date: 'July 22, 2020',
        hourlyrate: '$85',
        noofhours: '8',
        amount: '$680.00',
    },
    {
        key: '4',
        date: 'July 23, 2020',
        hourlyrate: '$85',
        noofhours: '8',
        amount: '$680.00',
    },
    {
        key: '5',
        date: 'July 24, 2020',
        hourlyrate: '$85',
        noofhours: '8',
        amount: '$680.00',
    },
];
export default {
    name: "LoanFinancialInvoiceDetails",
    data() {
        return {
            data,
            searchText: '',
            searchInput: null,
            searchedColumn: '',
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
                    dataIndex: 'hourlyrate',
                    key: 'hourlyrate',
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
    },
}
</script>

<style>

</style>