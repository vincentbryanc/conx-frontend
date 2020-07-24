<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Loan</a-breadcrumb-item>
                    <a-breadcrumb-item>Billings</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">Billings</h1>
                    </div>
                    <div>
                        <a-tabs default-active-key="1">
                            <a-tab-pane key="1" tab="summary">
                                Summary
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="clientinvoice" force-render>
                                Client invoice
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
import AppHeader from '../../../../components/company/AppHeader';
import AppSider from '../../../../components/company/AppSider';
import AppFooter from '../../../../components/AppFooter';
// import LoanBillingSummary from '../../../../components/company/loan/billings/LoanBillingSummary';
// import LoanBillingClientInvoice from '../../../../components/company/loan/billings/LoanBillingClientInvoice';

export default {
    head() {
        return {
            title: 'Company Loan Billings',
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
        // LoanBillingSummary,
        // LoanBillingClientInvoice,
    },
}
</script>

<style>

</style>