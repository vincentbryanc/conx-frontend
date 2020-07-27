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
        <a-modal v-model="visible" title="Request Details" on-ok="handleOk" :width="1000">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">Close</a-button>
                <a-button type="danger" @click="handleCancel">Cancel Request <a-icon type="close"></a-icon></a-button>
            </template>
            <div>
                <a-row>
                    <a-col :lg="{ span: 14 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                        <div><b>Requested Date: </b> July 15, 2020</div>
                        <div><b>Duration of Request: </b> July 20, 2020 - July 24, 2020</div>
                        <div><b>Requested By: </b> Danny Sullivan</div>
                    </a-col>
                    <a-col :lg="{ span: 9, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                        <div>
                            <b>Requester Note: </b>
                            <p>Requesting for this employees</p>
                        </div>
                    </a-col>
                </a-row>
                <br />
                <a-row>
                    <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                        <h3 class="text-center">List of Requested Employees</h3>
                        <ListOfRequestedEmployees />
                    </a-col>
                </a-row>
            </div>
        </a-modal>
    </div>
</template>

<script>
import ListOfRequestedEmployees from './ListOfRequestedEmployees';
const data = [
    {
        key: '1',
        requesteddate: 'July 15, 2020',
        requestedby: 'Danny Sullivan',
        requesternote: 'Requesting for this employees',
    },
    {
        key: '2',
        requesteddate: 'July 16, 2020',
        requestedby: 'Danny Sullivan',
        requesternote: 'Requesting for this employees',
    },
];
export default {
    name: "BorrowPendingRequests",
    data() {
        return {
            visible: false,
            data,
            searchText: '',
            searchInput: null,
            searchedColumn: '',
        };
    },
    components: {
        ListOfRequestedEmployees,
    },
    computed: {
        columns() {
            const columns = [
                {
                    title: 'Requested Date',
                    dataIndex: 'requesteddate',
                    key: 'requesteddate',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.requesteddate
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
                    title: 'Requested By',
                    dataIndex: 'requestedby',
                    key: 'requestedby',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.requestedby
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
                    title: 'Requester Note',
                    dataIndex: 'requesternote',
                    key: 'requesternote',
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