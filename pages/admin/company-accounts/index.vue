<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Administrator</a-breadcrumb-item>
                    <a-breadcrumb-item>Company Accounts</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">Company Accounts</h1>
                        <div class="text-right">
                            <nuxt-link to="/admin/company-accounts/add-company">
                                <a-button 
                                    type="primary">
                                    Add Company <a-icon type="plus" />
                                </a-button>
                            </nuxt-link>
                        </div>
                    </div>
                    <div>
                        <CompanyAccounts />
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
import CompanyAccounts from '../../../components/admin/company-accounts/CompanyAccounts';

export default {
    head() {
        return {
            title: 'Company Accounts',
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
        CompanyAccounts,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'company-accounts',
            openkey: '',
        });
    }
}
</script>

<style>

</style>