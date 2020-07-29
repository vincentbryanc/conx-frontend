<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Administrator</a-breadcrumb-item>
                    <a-breadcrumb-item>Users</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <a-row>
                        <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 12 }">
                            <div>
                                <h1 class="title">Users</h1>
                            </div>
                        </a-col>
                        <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 12 }">
                            <div class="text-right">
                                <a-button 
                                    type="primary"
                                    @click="showModal">
                                    Add New User <a-icon type="plus" />
                                </a-button>
                            </div>
                        </a-col>
                    </a-row>
                    <div>
                        <Users />
                    </div>
                </a-layout-content>
                <a-modal v-model="visible" title="Add User" on-ok="handleOk" :width="700">
                    <template slot="footer">
                        <a-button key="back" @click="handleCancel">Close</a-button>
                        <a-button type="success" @click="handleCancel">Save <a-icon type="check" /></a-button>
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
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../components/admin/AdminHeader';
import AppSider from '../../../components/admin/AdminSider';
import AppFooter from '../../../components/AppFooter';
import Users from '../../../components/admin/users/Users';

export default {
    head() {
        return {
            title: 'Users',
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