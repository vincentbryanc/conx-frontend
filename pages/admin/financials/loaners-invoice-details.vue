<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Administrator</a-breadcrumb-item>
                    <a-breadcrumb-item>Financials</a-breadcrumb-item>
                    <a-breadcrumb-item>Loaners Invoice</a-breadcrumb-item>
                    <a-breadcrumb-item>Invoice Details</a-breadcrumb-item>
                </a-breadcrumb>
                <LoanersInvoiceDetails />
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../components/admin/AdminHeader';
import AppSider from '../../../components/admin/AdminSider';
import AppFooter from '../../../components/AppFooter';
import LoanersInvoiceDetails from '../../../components/admin/financials/LoanersInvoiceDetails';

export default {
    head() {
        return {
            title: 'Loaners Invoice Details',
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
        LoanersInvoiceDetails,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'financial-loaners-invoice',
            openkey: 'loan',
        });
    },
}
</script>

<style>

</style>