<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Administrator</a-breadcrumb-item>
                    <a-breadcrumb-item>Reports</a-breadcrumb-item>
                    <a-breadcrumb-item> Active Loans and Borrows</a-breadcrumb-item>
                    <a-breadcrumb-item>Details</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <nuxt-link to="/admin/reports">
                        <a-button type="primary"><a-icon type="arrow-left" />Back</a-button>
                    </nuxt-link>
                    <ActiveLoanAndBorrowDetails />
                </a-layout-content>
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../components/admin/AdminHeader';
import AppSider from '../../../components/admin/AdminSider';
import AppFooter from '../../../components/AppFooter';
import ActiveLoanAndBorrowDetails from '../../../components/admin/reports/ActiveLoanAndBorrowDetails';

export default {
    head() {
        return {
            title: 'Active Loan and Borrow Details',
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
        ActiveLoanAndBorrowDetails,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'admin-reports',
            openkey: '',
        });
    },
}
</script>

<style>

</style>