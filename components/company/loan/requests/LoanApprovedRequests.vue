<template>
    <div>
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
            <span slot="action">
                <a-button @click="showModal">View <a-icon type="eye"></a-icon></a-button>
            </span>
        </a-table>
        <a-modal v-model="visible" title="Request Details" on-ok="handleOk" :width="550">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">
                    Close
                </a-button>
            </template>
            <div>
                <p><b>Employee ID: </b> AOV000001</p>
                <p><b>Employee Name: </b> Steve Rogers</p>
                <p><b>Hourly Rate ($/hr): </b> $85</p>
                <p><b>Requested Date: </b> July 15, 2020</p>
                <p><b>Company Name: </b> Stark Industries</p>
                <p><b>Duration of Request: </b> July 20, 2020 - July 24, 2020</p>
                <p><b>Contact Name: </b> Natasha Romanoff</p>
                <p><b>Contact Number: </b> (646) 552-0791</p>
                <p><b>Address: </b> 200 Park Avenue, New York</p>
                <p><b>Approved Date: </b> July 15, 2020</p>
                <p><b>Approved By: </b> Danny Sullivan (Owner)</p>
                <p><b>Requester Note: </b> Requesting this employees</p>
                <p><b>Approver Note: </b> Good to go. Approved!</p>
            </div>
        </a-modal>
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        approveddate: 'July 15, 2020',
        employeename: 'Steve Rogers',
        clientname: 'Stark Industries',
        contactname: 'Natasha Romanoff',
        contactnumber: '(646) 552-0791',
        note: 'Good to go. Approved!',
    },
    {
        key: '2',
        approveddate: 'July 15, 2020',
        employeename: 'Thor Odinson',
        clientname: 'Stark Industries',
        contactname: 'Natasha Romanoff',
        contactnumber: '(646) 552-0791',
        note: 'Good to go. Approved!',
    },
    {
        key: '3',
        approveddate: 'July 16, 2020',
        employeename: 'Luke Charles',
        clientname: 'Stark Industries',
        contactname: 'Natasha Romanoff',
        contactnumber: '(646) 552-0791',
        note: 'Good to go. Approved!',
    },
    {
        key: '4',
        approveddate: 'July 10, 2020',
        employeename: 'Rylan Bain',
        clientname: 'Stark Industries',
        contactname: 'Natasha Romanoff',
        contactnumber: '(646) 552-0791',
        note: 'Good to go. Approved!',
    },
    {
        key: '5',
        approveddate: 'July 10, 2020',
        employeename: 'Gail Vo',
        clientname: 'Stark Industries',
        contactname: 'Natasha Romanoff',
        contactnumber: '(646) 552-0791',
        note: 'Good to go. Approved!',
    },
];
export default {
    name: "LoanApprovedRequests",
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
                    title: 'Approved Date',
                    dataIndex: 'approveddate',
                    key: 'approveddate',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.approveddate
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
                    title: 'Employee Name',
                    dataIndex: 'employeename',
                    key: 'employeename',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.employeename
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
                    title: 'Client Name',
                    dataIndex: 'clientname',
                    key: 'clientname',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.clientname
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
                    title: 'Contact Name',
                    dataIndex: 'contactname',
                    key: 'contactname',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.contactname
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
                    title: 'Contact Number',
                    dataIndex: 'contactnumber',
                    key: 'contactnumber',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.contactnumber
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
                    title: 'Note',
                    dataIndex: 'note',
                    key: 'note',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.note
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
        showModal() {
            this.visible = true;
        },
        handleCancel(e) {
            this.visible = false;
        },
    },
}
</script>

<style>
/* .ant-pagination-item {
    display: none!important;
} */
.ant-modal-body {
    padding: 24px 40px;
}
</style>