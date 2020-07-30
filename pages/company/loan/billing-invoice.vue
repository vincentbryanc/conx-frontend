<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>{{ this.$store.state.companyname }}</a-breadcrumb-item>
                    <a-breadcrumb-item>Loan</a-breadcrumb-item>
                    <a-breadcrumb-item>Billing Invoice</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">Billing Invoice</h1>
                    </div>
                    <div>
                        <a-tabs default-active-key="billing-invoice" @change="callback">
                            <a-tab-pane key="billing-summary" tab="Summary">
                                <LoanBillingSummary />
                            </a-tab-pane>
                            <a-tab-pane key="billing-invoice" tab="Client Invoice" force-render>
                                <LoanBillingClientInvoice />
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
import LoanBillingSummary from '../../../components/company/loan/billings/LoanBillingSummary';
import LoanBillingClientInvoice from '../../../components/company/loan/billings/LoanBillingClientInvoice';

export default {
    head() {
        return {
            title: 'Company Loan Billing Invoice',
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
        LoanBillingSummary,
        LoanBillingClientInvoice,
    },
    beforeCreate() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'loan-billings',
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