<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <div v-if="this.$store.state.hascreditcard === false">
                    <br />
                    <a-alert type="warning" message="Please add your credit card information to access the system." banner />
                    <br />
                    <div  @click="$message.success('Email Sent Successfully!')" style="cursor:pointer;">
                        <a-alert type="warning" message="You need to confirm your email. Click here to receive a confirmation." banner />
                    </div>
                </div>
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Account Information</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <a-row>
                        <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                            <AccountInformation />
                        </a-col>
                        <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                            <BillingInformation v-if="this.$store.state.hascreditcard === true" />
                        </a-col>
                    </a-row>
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
import AccountInformation from '../../../components/company/account-information/AccountInformation';
import BillingInformation from '../../../components/company/account-information/BillingInformation';

export default {
    head() {
        return {
            title: 'Account Information',
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
        AccountInformation,
        BillingInformation,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: '',
            openkey: '',
        });
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