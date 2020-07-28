<template>
    <div>
        <a-table :data-source="data" :columns="columns" :pagination="false">
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
                <a-button @click="showModal">Edit <a-icon type="edit" /></a-button>
            </span>
        </a-table>
        <a-modal v-model="visible" title="Add User" on-ok="handleOk" :width="700">
            <template slot="footer">
                <a-button 
                    type="primary"
                    key="back" @click="handleCancel">Close</a-button>
                <a-button 
                    type="success"
                    @click="handleCancel">Update <a-icon type="check" /></a-button>
            </template>
            <div>
                <a-form>
                    <a-form-item label="Email Address">
                        <a-input
                            v-decorator="[
                                'emailaddress', { rules: [{ required: true, message: 'This field is required' }] },
                            ]"
                            placeholder="Email Address" />
                    </a-form-item>
                    <a-form-item label="Password">
                        <a-input
                            type="password"
                            v-decorator="[
                                'password', { rules: [{ required: true, message: 'This field is required' }] },
                            ]"
                            placeholder="Password" />
                    </a-form-item>
                    <a-row>
                        <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                            <a-form-item label="First Name">
                                <a-input
                                    v-decorator="[
                                        'firstname', { rules: [{ required: true, message: 'This field is required' }] },
                                    ]"
                                    placeholder="First Name" />
                            </a-form-item>
                        </a-col>
                        <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1  }" :sm="{ span: 24 }">
                            <a-form-item label="Last Name">
                                <a-input
                                    v-decorator="[
                                        'lastname', { rules: [{ required: true, message: 'This field is required' }] },
                                    ]"
                                    placeholder="Last Name" />
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-form-item label="Role">
                        <a-row>
                            <a-col :lg="{ span: 12 }" :md="{ span: 11 }" :sm="{ span: 24 }">
                                <a-form-item class="role-card">
                                    <a-checkbox>Admin</a-checkbox>
                                    <ul>
                                        <li>Administrator Transaction Access</li>
                                        <ul>
                                            <li>Company Account</li>
                                            <li>Financials</li>
                                            <li>Reports</li>
                                        </ul>
                                        <li>System Access</li>
                                        <ul>
                                            <li>Subscription Rate</li>
                                            <li>System Users</li>
                                        </ul>
                                    </ul>
                                </a-form-item>
                            </a-col>
                            <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                                <a-form-item class="role-card">
                                    <a-checkbox>Manager</a-checkbox>
                                    <ul>
                                        <li>Administrator Transaction Access</li>
                                        <ul>
                                            <li>Company Account</li>
                                            <li>Financials</li>
                                            <li>Reports</li>
                                        </ul>
                                    </ul>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-form-item>
                </a-form>
            </div>
        </a-modal>
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        name: 'Georgie Le',
        emailaddress: 'gergie.le@conx.com',
        role: 'Super admin',
    },
    {
        key: '2',
        name: 'Sharmin Vickers',
        emailaddress: 'sharmin.vickers@conx.com',
        role: 'Admin',
    },
];

export default {
    name: "Users",
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
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
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
                    key: 'role',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.role
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

<style scoped>
.ant-form-item {
    margin-bottom: 5px;
}
.role-card {
    background-color: #f7fafc; 
    padding: 15px;
}

li {
    line-height: 20px;
}
</style>