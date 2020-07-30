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
        <a-modal v-model="visible" title="Subscription Rate" on-ok="handleOk" :width="550">
            <template slot="footer">
                <a-button
                    type="primary"
                    key="back" @click="handleCancel">Cancel <a-icon type="close" /></a-button>
                <a-button 
                    type="success"
                    @click="handleCancel">Save <a-icon type="check" /></a-button>
            </template>
            <div>
                <a-form>
                    <a-form-item label="Name">
                        <a-input
                            v-decorator="[
                                'name', { rules: [{ required: true, message: 'This field is required' }] },
                            ]"
                            placeholder="Name" />
                    </a-form-item>
                    <a-form-item label="Description">
                        <a-input
                            type="textarea"
                            v-decorator="[
                                'description', { rules: [{ required: true, message: 'This field is required' }] },
                            ]"
                            placeholder="Description"
                            row="3" />
                    </a-form-item>
                    <a-form-item label="Price ($/month)">
                        <a-input
                            v-decorator="[
                                'price', { rules: [{ required: true, message: 'This field is required' }] },
                            ]"
                            placeholder="Price ($/month)" />
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
        name: 'Full Access',
        description: 'Full Access to system',
        price: '$50.00',
    },
];

export default {
    name: "SubscriptionRate",
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
                    title: 'Description',
                    dataIndex: 'description',
                    key: 'description',
                },
                {
                    title: 'Price',
                    dataIndex: 'price',
                    key: 'price',
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
.ant-modal-body {
    padding: 10px 24px;
}

.ant-form-item {
    margin-bottom: 5px;
}
</style>