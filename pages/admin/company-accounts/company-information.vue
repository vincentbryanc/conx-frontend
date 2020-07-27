<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Administrator</a-breadcrumb-item>
                    <a-breadcrumb-item>Company Account</a-breadcrumb-item>
                    <a-breadcrumb-item>Company Information</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <nuxt-link to="/admin/company-accounts">
                        <a-button type="primary"><a-icon type="arrow-left" />Back</a-button>
                    </nuxt-link>
                    <br /><br />
                    <a-collapse default-active-key="company-information" :bordered="false">
                        <a-collapse-panel key="company-information" header="Company Information">
                            <a-button slot="extra" type="primary">Edit <a-icon type="edit" /></a-button>
                            <a-row>
                                <a-col :lg="{ span: 8, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                                    <p><b>Company Name</b> <span>Stark Industries</span></p>
                                    <p><b>Company Address</b> <span>200 Park Avenue, New York, USA</span></p>
                                    <p><b>Phone Number</b> <span>(631) 613-6324</span></p>
                                    <p><b>Email Address</b> <span>Natasha@avengers.com</span></p>
                                    <p><b>Signup Status</b> <span>Direct</span></p>
                                </a-col>
                                <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                                    <p><b>Office Number</b> <span>(631) 613-6324</span></p>
                                    <p><b>Contact Person</b> <span>Natasha Romanoff</span></p>
                                    <p><b>Phone Number</b> <span>(631) 613-6324</span></p>
                                    <p><b>Email Address</b> <span>Natasha@avengers.com</span></p>
                                </a-col>
                            </a-row>
                        </a-collapse-panel>
                        <a-collapse-panel key="billing-information" header="Billing Information">
                            <a-row>
                                <a-col :lg="{ span: 8, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                                    <p><b>Card Type</b> <span>Visa</span></p>
                                    <p><b>Credit Card Number</b> <span>**** **** **** 3456</span></p>
                                    <p><b>Subscription Plan</b> <span>Full access, $50 per month. Next billing date 08/15/2020</span></p>
                                    <p><b>Auto-renew Subscription </b> <span>Yes</span></p>
                                </a-col>
                            </a-row>
                        </a-collapse-panel>
                        <a-collapse-panel key="company-users" header="Company Users">
                            <CompanyUsers />
                        </a-collapse-panel>
                        <a-collapse-panel key="company-employees" header="Company Employees">
                            <CompanyEmployees />
                        </a-collapse-panel>
                    </a-collapse>
                </a-layout-content>
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../components/admin/AppHeader';
import AppSider from '../../../components/admin/AppSider';
import AppFooter from '../../../components/AppFooter';
import CompanyUsers from '../../../components/admin/company-accounts/CompanyUsers';
import CompanyEmployees from '../../../components/admin/company-accounts/CompanyEmployees';
export default {
    head() {
        return {
            title: 'Company Information',
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
        CompanyUsers,
        CompanyEmployees,
    },
}
</script>

<style scoped>
.layout-content {
    background: #f0f2f5;
    padding: 24px 0px;
}
</style>