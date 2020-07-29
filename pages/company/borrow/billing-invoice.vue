<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Borrow</a-breadcrumb-item>
                    <a-breadcrumb-item>Billings</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">Billings</h1>
                    </div>
                    <div>
                        <a-tabs default-active-key="billing-invoice" @change="callback">
                            <a-tab-pane key="billing-summary" tab="Summary">
                                <BorrowBillingSummary />
                            </a-tab-pane>
                            <a-tab-pane key="billing-invoice" tab="Billing Invoice" force-render>
                                <BorrowBillingInvoice />
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
import BorrowBillingSummary from '../../../components/company/borrow/billings/BorrowBillingSummary';
import BorrowBillingInvoice from '../../../components/company/borrow/billings/BorrowBillingInvoice';

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
        BorrowBillingSummary,
        BorrowBillingInvoice,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'borrow-billings',
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