<template>
    <div>
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
                    <a-button  @click="showModal">Edit <a-icon type="edit" /></a-button>
                    <a-button type="danger">Deactivate <a-icon type="close" /></a-button>
                </span>
            </a-table>
        </div>
        <a-modal v-model="visible" title="Edit User" on-ok="handleOk" :width="700">
            <template slot="footer">
                <a-button type="primary" key="back" @click="handleCancel">Cancel <a-icon type="close" /></a-button>
                <a-button type="success" @click="handleCancel">Update <a-icon type="check" /></a-button>
            </template>
            <div>
                <a-form>
                    <label>Email Address</label>
                    <a-form-item>
                        <a-input
                            v-decorator="[
                                'emailAddress', { rules: [{ required: true, message: 'Please enter your email address' }] },
                            ]"
                            placeholder="Email Address">
                        </a-input>
                    </a-form-item>
                    <a-row>
                        <a-col :lg="{ span: 12 }" :md="{ span: 11 }" :sm="{ span: 24 }">
                            <label>First Name</label>
                            <a-form-item>
                                <a-input
                                    v-decorator="[
                                        'firstName', { rules: [{ required: true, message: 'Please enter your first name' }] },
                                    ]"
                                    placeholder="First Name">
                                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                                </a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                            <label>Last Name</label>
                            <a-form-item>
                                <a-input
                                    v-decorator="[
                                        'lastName', { rules: [{ required: true, message: 'Please enter your last name' }] },
                                    ]"
                                    placeholder="Last Name">
                                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                                </a-input>
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <label>Role</label>
                    <a-row>
                        <a-col :lg="{ span: 12 }" :md="{ span: 11 }" :sm="{ span: 24 }">
                            <a-form-item class="role-card">
                                <a-checkbox>Admin</a-checkbox>
                                <ul>
                                    <li>Manage Company Transactions</li>
                                    <ul>
                                        <li>Manage Loan Requests</li>
                                        <li>Manage Loan Billings</li>
                                        <li>View Loan Financials</li>
                                        <li>Search/Reserve Company Employees</li>
                                        <li>Manage Borrow Requests</li>
                                        <li>Manage Borrow Billings</li>
                                        <li>View Borrow Financials</li>
                                        <li>Access Resume Search</li>
                                    </ul>
                                    <li>Manage Company Employees</li>
                                    <li>Administrator Access</li>
                                    <ul>
                                        <li>Manage Users</li>
                                        <li>Reports</li>
                                    </ul>
                                </ul>
                            </a-form-item>
                        </a-col>
                        <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                            <a-form-item class="role-card">
                                <a-checkbox>Manager</a-checkbox>
                                <ul>
                                    <li>Manage Company Transactions</li>
                                    <ul>
                                        <li>Manage Loan Requests</li>
                                        <li>Manage Loan Billings</li>
                                        <li>View Loan Financials</li>
                                        <li>Search/Reserve Company Employees</li>
                                        <li>Manage Borrow Requests</li>
                                        <li>Manage Borrow Billings</li>
                                        <li>View Borrow Financials</li>
                                        <li>Access Resume Search</li>
                                    </ul>
                                    <li>Manage Company Employees</li>
                                </ul>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-form>
            </div>
        </a-modal>
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        name: 'Kim Tan',
        emailaddress: 'steve.jobs@aov.com',
        role: 'Admin',
    },
    {
        key: '2',
        name: 'Bill Gates',
        emailaddress: 'bill.gates@aov.com',
        role: 'Manager',
    },
];

export default {
    name: "CompanyUsers",
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
                    title: 'Email Address',
                    dataIndex: 'emailaddress',
                    key: 'emailaddress',
                    sorter: (a, b) => { return a.emailaddress.localeCompare(b.emailaddress)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.emailaddress
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
                    title: 'Role',
                    dataIndex: 'role',
                    sorter: (a, b) => { return a.role.localeCompare(b.role)},
                    filters: [
                        {
                            text: 'Admin',
                            value: 'Admin',
                        },
                        {
                            text: 'Manager',
                            value: 'Manager',
                        },
                    ],
                    filterMultiple: true,
                    onFilter: (value, record) => record.role.indexOf(value) === 0,
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

<style scoped>
    .role-card {
        background-color: #f7fafc; 
        padding: 15px;
    }

    li {
        line-height: 20px;
    }
</style>