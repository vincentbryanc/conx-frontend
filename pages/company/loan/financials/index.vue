<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Loan</a-breadcrumb-item>
                    <a-breadcrumb-item>Financials</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">Financials</h1>
                    </div>
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

export default {
    head() {
        return {
            title: 'Company Loan Financials',
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
    },
}
</script>

<style>

</style>