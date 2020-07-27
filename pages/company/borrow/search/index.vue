<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Borrow</a-breadcrumb-item>
                    <a-breadcrumb-item>Search</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <h1 class="title">Search</h1>
                    <div class="text-right">
                        <nuxt-link to="/company/borrow/cart"><a-button type="primary">Borrow Cart <a-icon type="shopping" /></a-button></nuxt-link>
                    </div>
                    <br />
                    <SearchEmployees />
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
import SearchEmployees from '../../../../components/company/borrow/search/SearchEmployees';

export default {
    head() {
        return {
            title: 'Search Employees',
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
        SearchEmployees,
    },
}
</script>

<style>

</style>