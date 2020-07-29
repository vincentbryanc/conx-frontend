<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Borrow</a-breadcrumb-item>
                    <a-breadcrumb-item>Active Borrowed Workers</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <h1 class="title">Active Borrowed Workers</h1>
                    <br />
                    <ActiveBorrowedWorkers />
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
import ActiveBorrowedWorkers from '../../../../components/company/borrow/activeworkers/ActiveBorrowedWorkers';

export default {
    head() {
        return {
            title: 'Active Borrowed Workers',
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
        ActiveBorrowedWorkers,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'borrow-active-workers',
            openkey: 'borrow',
        });
    },
}
</script>

<style>

</style>