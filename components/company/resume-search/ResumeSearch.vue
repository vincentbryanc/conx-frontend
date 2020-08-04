<template>
    <div>
        <div class="text-right">
            <a-form layout="inline">
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
                    <a-button type="primary">Search <a-icon type="search"></a-icon></a-button>
                </a-form-item>
            </a-form>
        </div>
        <br />
        <div class="table-responsive">
            <a-table :data-source="data" :columns="columns" :loading="loading">
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
                    <a-button @click="showModal">View Profile <a-icon type="eye" /></a-button>
                </span>
            </a-table>
        </div>
        <a-modal v-model="visible" title="View Profile" on-ok="handleOk" :width="550">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">Close</a-button>
            </template>
            <div>
                <p><b>Name: </b> Nelson Gale</p>
                <p><b>Email Address: </b> nelson.gale@gmail.com</p>
                <p><b>Phone Number: </b> +1 234 5678 901</p>
                <p><b>Address: </b> 123 St., Mt. Rainier Avenue, California 95035</p>
                <p><b>Experise: </b> Electrical</p>
                <p><b>Level of Experience: </b> Master</p>
                <p><b>Distance willing to travel: </b> 15 Miles</p>
                <p><b>Areas of Work: </b> Commercial</p>
                <p><b>Resume Link: </b> <nuxt-link to="#">https://conx.com/resume/my-resume.pdf</nuxt-link></p>
            </div>
        </a-modal>
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        name: 'Nelson Gale',
        zipcode: '95035',
        expertise: 'Electrical',
        levelofexperience: 'Master',
        areaofwork: 'Commercial',
        dateuploaded: 'July 15, 2020',
    },
    {
        key: '2',
        name: 'Bruce Banner',
        zipcode: '95035',
        expertise: 'Electrical',
        levelofexperience: 'Master',
        areaofwork: 'Industrial, Fire Alarm, Security',
        dateuploaded: 'July 14, 2020',
    },
];
export default {
    name: "ResumeSearch",
    data() {
        return {
            visible: false,
            loading: false,
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
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    sorter: (a, b) => { return a.name.localeCompare(b.name)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.name
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
                    sorter: (a, b) => { return a.zipcode.localeCompare(b.zipcode)},
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
                    title: 'Expertise',
                    dataIndex: 'expertise',
                    key: 'expertise',
                    sorter: (a, b) => { return a.expertise.localeCompare(b.expertise)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.expertise
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
                    sorter: (a, b) => { return a.levelofexperience.localeCompare(b.levelofexperience)},
                    filters: [
                        {
                            text: 'Master',
                            value: 'Master',
                        },
                        {
                            text: 'Journeyman',
                            value: 'Journeyman',
                        },
                        {
                            text: '1st Year',
                            value: '1st Year',
                        },
                        {
                            text: '2nd Year',
                            value: '2nd Year',
                        },
                        {
                            text: '3rd Year',
                            value: '3rd Year',
                        },
                        {
                            text: '4th Year',
                            value: '4th Year',
                        },
                    ],
                    filterMultiple: true,
                    onFilter: (value, record) => record.levelofexperience.indexOf(value) === 0,
                },
                {
                    title: 'Area of Work',
                    dataIndex: 'areaofwork',
                    key: 'areaofwork',
                    sorter: (a, b) => { return a.areaofwork.localeCompare(b.areaofwork)},
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
                    title: 'Date Uploaded',
                    dataIndex: 'dateuploaded',
                    key: 'dateuploaded',
                    sorter: (a, b) => { return a.dateuploaded.localeCompare(b.dateuploaded)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.dateuploaded
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
</style>