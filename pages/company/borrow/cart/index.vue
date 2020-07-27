<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Borrow</a-breadcrumb-item>
                    <a-breadcrumb-item>Make Reservation</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <h1 class="title">Make Reservation</h1>
                    <br />
                    <BorrowCart />
                </a-layout-content>
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../../components/company/AppHeader';
import AppSider from '../../../../components/company/AppSider';
import AppFooter from '../../../../components/AppFooter';
import BorrowCart from '../../../../components/company/borrow/cart/BorrowCart';

export default {
    head() {
        return {
            title: 'Borrow Cart',
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
        BorrowCart,
    },
}
</script>

<style>

</style>