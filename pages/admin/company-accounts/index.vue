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
                            <a-button 
                                type="primary">
                                Add Company <a-icon type="plus" />
                            </a-button>
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
import AppHeader from '../../../components/admin/AppHeader';
import AppSider from '../../../components/admin/AppSider';
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
    },
}
</script>

<style scoped>
    .role-card {
        background-color: #f7fafc; 
        padding: 15px;
    }

    li {
        line-height: 20px;
    }
</style>