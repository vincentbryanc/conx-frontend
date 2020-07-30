<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Account Information</a-breadcrumb-item>
                    <a-breadcrumb-item>Billing History</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <nuxt-link to="/company/account-information">
                        <a-button type="primary"><a-icon type="arrow-left" />Back</a-button>
                    </nuxt-link>
                    <div>
                        <h1 class="title">Billing History</h1>
                    </div>
                    <div>
                        <BillingHistory />
                    </div>
                </a-layout-content>
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../components/company/CompanyHeader';
import AppSider from '../../../components/company/CompanySider';
import AppFooter from '../../../components/AppFooter';
import BillingHistory from '../../../components/company/account-information/BillingHistory';

export default {
    head() {
        return {
            title: 'Billing History',
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
        BillingHistory,
    },
}
</script>

<style>
</style>