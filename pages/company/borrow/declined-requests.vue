<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>{{ this.$store.state.companyname }}</a-breadcrumb-item>
                    <a-breadcrumb-item>Borrow</a-breadcrumb-item>
                    <a-breadcrumb-item>Declined Requests</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">List of Declined Requests</h1>
                    </div>
                    <div>
                        <a-tabs default-active-key="declined-requests" @change="callback">
                            <a-tab-pane key="pending-requests" tab="Pending">
                                <BorrowPendingRequests />
                            </a-tab-pane>
                            <a-tab-pane key="approved-requests" tab="Approved" force-render>
                                <BorrowApprovedRequests />
                            </a-tab-pane>
                            <a-tab-pane key="declined-requests" tab="Declined" force-render>
                                <BorrowDeclinedRequests />
                            </a-tab-pane>
                            <a-tab-pane key="cancelled-requests" tab="Cancelled" force-render>
                                <BorrowCancelledRequests />
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
import BorrowPendingRequests from '../../../components/company/borrow/requests/BorrowPendingRequests';
import BorrowApprovedRequests from '../../../components/company/borrow/requests/BorrowApprovedRequests';
import BorrowDeclinedRequests from '../../../components/company/borrow/requests/BorrowDeclinedRequests';
import BorrowCancelledRequests from '../../../components/company/borrow/requests/BorrowCancelledRequests';

export default {
    head() {
        return {
            title: 'Company Borrow Requests',
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
        BorrowPendingRequests,
        BorrowApprovedRequests,
        BorrowDeclinedRequests,
        BorrowCancelledRequests,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'borrow-requests',
            openkey: 'borrow',
        });
    },
    methods: {
        callback(key) {
            this.$router.push('/company/borrow/' + key);
        }
    },
}
</script>

<style>

</style>