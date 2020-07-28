<template>
    <div>
        <div class="text-right">
            <a-form layout="inline">
                <a-form-item label="Duration of Request">
                    <a-range-picker
                        :disabled-date="disabledDate"
                        format="YYYY-MM-DD"
                        style="width: 200px" />
                </a-form-item>
                <a-form-item label="Zip Code">
                    <a-input
                        placeholder="Zip Code"></a-input>
                </a-form-item>
                <a-form-item label="Zip Code Range">
                    <a-input
                        placeholder="Zip Code Range (Miles)"></a-input>
                </a-form-item>
                <a-form-item label="Level of Experience">
                    <a-select
                        placeholder="Level of Experience" style="width: 180px">
                        <a-select-option value="master">Master</a-select-option>
                        <a-select-option value="journeyman">Journeyman</a-select-option>
                        <a-select-option value="1styear">1st Year</a-select-option>
                        <a-select-option value="2ndyear">2nd Year</a-select-option>
                        <a-select-option value="3rdyear">3rd Year</a-select-option>
                        <a-select-option value="4thyear">4th Year</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item>
                    <a-button>Search <a-icon type="search"></a-icon></a-button>
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
            <span slot="action">
                <a-button @click="showModal">View <a-icon type="eye"></a-icon></a-button>
                <a-button>Reserve <a-icon type="plus"></a-icon></a-button>
            </span>
        </a-table>
        <a-modal v-model="visible" title="Employee Information" on-ok="handleOk" :width="550">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">
                    Close
                </a-button>
            </template>
            <div>
                <p><b>Employee ID: </b> AOV000001</p>
                <p><b>Zip Code: </b> 95035</p>
                <p><b>Level of Experience: </b> Master</p>
                <p><b>Areas of Work: </b> Commercial</p>
                <p><b>Hourly Rate: </b> $85</p>
                <p><b>Additional Details: </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </a-modal>
    </div>
</template>

<script>
import moment from 'moment';
const data = [
    {
        key: '1',
        employeeid: 'AOV000001',
        zipcode: '95035',
        levelofexperience: 'Master',
        areaofwork: 'Commercial',
        hourlyrate: '$85',
    },
    {
        key: '2',
        employeeid: 'AOV000002',
        zipcode: '95035',
        levelofexperience: 'Industrial, Fire Alarm, Security',
        areaofwork: 'Industrial, Fire Alarm, Security',
        hourlyrate: '$60',
    },
    {
        key: '3',
        employeeid: 'AOV000003',
        zipcode: '95035',
        levelofexperience: 'Residential',
        areaofwork: 'Industrial, Fire Alarm, Security',
        hourlyrate: '$100',
    },
    {
        key: '4',
        employeeid: 'AOV000004',
        zipcode: '95035',
        levelofexperience: 'Commercial, Industrial, Residential',
        areaofwork: 'Industrial, Fire Alarm, Security',
        hourlyrate: '$100',
    },
    {
        key: '5',
        employeeid: 'AOV000005',
        zipcode: '95035',
        levelofexperience: 'Commercial, Industrial, Residential',
        areaofwork: 'Industrial, Fire Alarm, Security',
        hourlyrate: '$100',
    },
    {
        key: '6',
        employeeid: 'AOV000006',
        zipcode: '95035',
        levelofexperience: 'Commercial, Industrial, Residential',
        areaofwork: 'Industrial, Fire Alarm, Security',
        hourlyrate: '$100',
    },
];
export default {
    name: "SearchEmployees",
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
                    title: 'Employee ID',
                    dataIndex: 'employeeid',
                    key: 'employeeid',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.employeeid
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
                    title: 'Zip Code',
                    dataIndex: 'zipcode',
                    key: 'zipcode',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.zipcode
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
                    title: 'Level Of Experience',
                    dataIndex: 'levelofexperience',
                    key: 'levelofexperience',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.levelofexperience
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
                    title: 'Area of Work',
                    dataIndex: 'areaofwork',
                    key: 'areaofwork',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.areaofwork
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
                    dataIndex: 'hourlyrate',
                    key: 'hourlyrate',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.hourlyrate
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
        moment,
        range(start, end) {
            const result = [];
            for (let i = start; i < end; i++) {
                result.push(i);
            }
            return result;
        },
        disabledDate(current) {
            return current < moment().subtract(1, "day");;
        },
    },
}
</script>

<style>
/* .ant-pagination-item {
    display: none!important;
} */
</style>