<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Users</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">Users</h1>
                        <div class="text-right">
                            <a-button 
                                type="primary"
                                @click="showModal">
                                Add New User <a-icon type="plus" />
                            </a-button>
                        </div>
                    </div>
                    <div>
                        <Users />
                    </div>
                </a-layout-content>
                <a-modal v-model="visible" title="Add User" on-ok="handleOk" :width="700">
                    <template slot="footer">
                        <a-button key="back" @click="handleCancel">Close</a-button>
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
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../components/company/AppHeader';
import AppSider from '../../../components/company/AppSider';
import AppFooter from '../../../components/AppFooter';
import Users from '../../../components/company/users/Users';

export default {
    head() {
        return {
            title: 'Company Users',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: ''
                }
            ]
        }
    },
    components: {
        AppHeader,
        AppSider,
        AppFooter,
        Users,
    },
    data() {
        return {
            visible: false,
        };
    },
    methods: {
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