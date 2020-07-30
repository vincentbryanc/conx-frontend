<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>{{ this.$store.state.companyname }}</a-breadcrumb-item>
                    <a-breadcrumb-item>Employees</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">Employees</h1>
                        <div class="text-right">
                            <nuxt-link to='employees/add'><a-button type="primary">Add Employee <a-icon type="plus" /></a-button></nuxt-link>
                        </div>
                    </div>
                    <div>
                        <a-tabs default-active-key="reserved" @change="callback">
                            <a-tab-pane key="reserved" tab="Reserved">
                                <ReservedEmployees />
                            </a-tab-pane>
                            <a-tab-pane key="for-lease" tab="For Lease" force-render>
                                <ForLeaseEmployees />
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                </a-layout-content>
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../components/company/CompanyHeader';
import AppSider from '../../../components/company/CompanySider';
import AppFooter from '../../../components/AppFooter';
import ReservedEmployees from '../../../components/company/employees/ReservedEmployees';
import ForLeaseEmployees from '../../../components/company/employees/ForLeaseEmployees';

export default {
    head() {
        return {
            title: 'Company Employees',
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
        ReservedEmployees,
        ForLeaseEmployees,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'company-employees',
            openkey: '',
        });
    },
    methods: {
        callback(key) {
            this.$router.push('/company/employees/' + key);
        }
    },
}
</script>

<style>

</style>