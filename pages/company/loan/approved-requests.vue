<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Loan</a-breadcrumb-item>
                    <a-breadcrumb-item>Approved Requests</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">List of Approved Requests</h1>
                    </div>
                    <div>
                        <a-tabs default-active-key="approved-requests" @change="callback">
                            <a-tab-pane key="pending-requests" tab="Pending">
                                <LoanPendingRequests />
                            </a-tab-pane>
                            <a-tab-pane key="approved-requests" tab="Approved" force-render>
                                <LoanApprovedRequests />
                            </a-tab-pane>
                            <a-tab-pane key="declined-requests" tab="Declined" force-render>
                                <LoanDeclinedRequests />
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
import LoanPendingRequests from '../../../components/company/loan/requests/LoanPendingRequests';
import LoanApprovedRequests from '../../../components/company/loan/requests/LoanApprovedRequests';
import LoanDeclinedRequests from '../../../components/company/loan/requests/LoanDeclinedRequests';

export default {
    head() {
        return {
            title: 'Company Loan Requests',
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
        LoanPendingRequests,
        LoanApprovedRequests,
        LoanDeclinedRequests,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'loan-requests',
            openkey: 'loan',
        });
    },
    methods: {
        callback(key) {
            this.$router.push('/company/loan/' + key);
        }
    },
}
</script>

<style>

</style>