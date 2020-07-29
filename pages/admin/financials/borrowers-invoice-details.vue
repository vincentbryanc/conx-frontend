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
                    <a-breadcrumb-item>Invoice Details</a-breadcrumb-item>
                </a-breadcrumb>
                <BorrowersInvoiceDetails />
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../components/admin/AdminHeader';
import AppSider from '../../../components/admin/AdminSider';
import AppFooter from '../../../components/AppFooter';
import BorrowersInvoiceDetails from '../../../components/admin/financials/BorrowersInvoiceDetails';

export default {
    head() {
        return {
            title: 'Borrowers Invoice Details',
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
        BorrowersInvoiceDetails,
    },
}
</script>

<style>

</style>