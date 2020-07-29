<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Administrator</a-breadcrumb-item>
                    <a-breadcrumb-item>Financials</a-breadcrumb-item>
                    <a-breadcrumb-item>Borrowers Invoice</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">List of Approved Invoices</h1>
                    </div>
                    <div>
                        <BorrowersInvoice />
                    </div>
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
import BorrowersInvoice from '../../../components/admin/financials/BorrowersInvoice';

export default {
    head() {
        return {
            title: 'Borrowers Invoice',
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
        BorrowersInvoice,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'financial-borrowers-invoice',
            openkey: 'loan',
        });
    },
}
</script>

<style>

</style>