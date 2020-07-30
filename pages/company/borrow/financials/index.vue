<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>{{ this.$store.state.companyname }}</a-breadcrumb-item>
                    <a-breadcrumb-item>Borrow</a-breadcrumb-item>
                    <a-breadcrumb-item>Financials</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">List of Approved Invoices</h1>
                    </div>
                    <div>
                        <BorrowFinancials />
                    </div>
                </a-layout-content>
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../../components/company/CompanyHeader';
import AppSider from '../../../../components/company/CompanySider';
import AppFooter from '../../../../components/AppFooter';
import BorrowFinancials from '../../../../components/company/borrow/financials/BorrowFinancials';

export default {
    head() {
        return {
            title: 'Company Borrow Financials',
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
        BorrowFinancials,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'borrow-financials',
            openkey: 'borrow',
        });
    },
}
</script>

<style>

</style>