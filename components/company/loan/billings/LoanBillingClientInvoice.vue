<template>
    <div>
        <div>
            <a-form layout="inline">
                <a-form-item label="Client">
                    <a-select 
                        default-value="Stark Industries"
                        style="width: 200px">
                        <a-select-option value="Stark Industries">Stark Industries</a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </div>
        <br />
        <a-table :data-source="data" :columns="columns">
            <div
                slot="filterDropdown"
                slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
                style="padding: 8px">
                <a-input
                    v-ant-ref="c => (searchInput = c)"
                    :placeholder="`Search ${column.title}`"
                    :value="selectedKeys[0]"
                    style="width: 188px; margin-bottom: 8px; display: block;"
                    @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                    @pressEnter="() => handleSearch(selectedKeys, confirm, column.dataIndex)" />
                <a-button
                    type="primary"
                    icon="search"
                    size="small"
                    style="width: 90px; margin-right: 8px"
                    @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)" >
                    Search
                </a-button>
                <a-button size="small" style="width: 90px" @click="() => handleReset(clearFilters)">
                    Reset
                </a-button>
            </div>
            <a-icon
                slot="filterIcon"
                slot-scope="filtered"
                type="search"
                :style="{ color: filtered ? '#108ee9' : undefined }" />
            <template slot="customRender" slot-scope="text, record, index, column">
                <span v-if="searchText && searchedColumn === column.dataIndex">
                    <template
                        v-for="(fragment, i) in text
                            .toString()
                            .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))">
                        <mark
                            v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                            :key="i"
                            class="highlight">{{ fragment }}</mark>
                        <template v-else>{{ fragment }}</template>
                    </template>
                </span>
                <template v-else>
                    {{ text }}
                </template>
            </template>
            <span slot="action" slot-scope="text, record">
                <a-button @click="showModal(action = 'resolve')" v-if="record.status === 'Request Modification'">Resolve</a-button>
                <a-button @click="showModal(action = 'update')" v-if="record.status === 'Pending' || record.status === 'Work in Progress'">Update</a-button>
                <a-button v-if="record.status === 'Pending'">Send</a-button>
            </span>
        </a-table>
        <a-modal v-model="visible" title="Billing Details" :width="1000" :style="{ maxHeight: 100 }">
            <template slot="footer">
                <a-button 
                    key="back" 
                    @click="handleCancel">Close</a-button>
                <a-button 
                    type="primary" 
                    @click="handleCancel" 
                    v-if="this.$store.state.action === 'resolve'">Resolve <a-icon type="check" /></a-button>
                <a-button 
                    type="primary" 
                    @click="handleCancel" 
                    v-if="this.$store.state.action === 'update'">Update Billing <a-icon type="check" /></a-button>
            </template>
            <div>
                <LoanBillingDetails />
            </div>
        </a-modal>
    </div>
</template>

<script>
import LoanBillingDetails from './LoanBillingDetails';
const data = [
    {
        key: '1',
        loanedworker: 'Thor Odinson',
        initialdate: 'Jul 20, 2020',
        cutoffdate: 'Jul 24, 2020',
        rate: '$60',
        renderedhours: '40',
        otherexpenses: '$0.00',
        totalbill: '$2904.00',
        status: 'Request Modification',
    },
    {
        key: '2',
        loanedworker: 'Steve Rogers',
        initialdate: 'Jul 20, 2020',
        cutoffdate: 'Jul 24, 2020',
        rate: '$85',
        renderedhours: '40',
        otherexpenses: '$0.00',
        totalbill: '$4,114.00',
        status: 'Pending',
    },
    {
        key: '3',
        loanedworker: 'Luke Charles ',
        initialdate: 'Jul 27, 2020',
        cutoffdate: 'Jul 31, 2020',
        rate: '$100',
        renderedhours: '0',
        otherexpenses: '$0.00',
        totalbill: '$0.00',
        status: 'Work in Progress',
    },
];
export default {
    name: "LoanBillingSummary",
    data() {
        return {
            visible: false,
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
                    title: 'Loaned Worker',
                    dataIndex: 'loanedworker',
                    key: 'loanedworker',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.loanedworker
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    title: 'Initial Date',
                    dataIndex: 'initialdate',
                    key: 'initialdate',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.initialdate
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    title: 'Cut-off Date',
                    dataIndex: 'cutoffdate',
                    key: 'cutoffdate',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.cutoffdate
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    title: 'Hourly Rate ($/hr)',
                    dataIndex: 'rate',
                    key: 'rate',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.rate
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    title: 'Rendered Hours',
                    dataIndex: 'renderedhours',
                    key: 'renderedhours',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.renderedhours
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    title: 'Other Expenses',
                    dataIndex: 'otherexpenses',
                    key: 'otherexpenses',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.otherexpenses
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    title: 'Total Bill',
                    dataIndex: 'totalbill',
                    key: 'totalbill',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.totalbill
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.status
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    title: 'Action',
                    key: 'action',
                    scopedSlots: { customRender: 'action' },
                },
            ];
            return columns;
        },
    },
    methods: {
        handleSearch(selectedKeys, confirm, dataIndex) {
            confirm();
            this.searchText = selectedKeys[0];
            this.searchedColumn = dataIndex;
        },
        handleReset(clearFilters) {
            clearFilters();
            this.searchText = '';
        },
        showModal(action) {
            this.visible = true;
            console.log(action);
            if (action === 'resolve') 
                this.$store.commit('actionresolve');
            else if (action === 'update') 
                this.$store.commit('actionupdate');

        },
        handleCancel(e) {
            this.visible = false;
        },
        action() {
            
        }
    },
}
</script>

<style scoped>
.ant-fullcalendar-fullscreen .ant-fullcalendar-content {
    height: 50px;
}
.events {
    list-style: none;
    margin: 0;
    padding: 0;
}
.events .ant-badge-status {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 12px;
}
.notes-month {
    text-align: center;
    font-size: 28px;
}
.notes-month section {
    font-size: 28px;
}
</style>