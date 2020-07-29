<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Administrator</a-breadcrumb-item>
                    <a-breadcrumb-item>Company Accounts</a-breadcrumb-item>
                    <a-breadcrumb-item>Add Company</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title text-center">Add Company</h1>
                    </div>
                    <a-row>
                        <a-col :lg="{ span: 10, offset: 7 }" :md="{ span: 24 }" sm="{ span: 24 }">
                            <a-steps v-model="current" type="navigation" size="small" :style="stepStyle" @change="onChange">
                                <a-step
                                    title="Account Information"
                                    sub-title=""
                                    status="process"
                                    description="" />
                                <a-step
                                    title="Company Details"
                                    sub-title=""
                                    status="process"
                                    description="" />
                                <a-step
                                    title="Summary"
                                    sub-title=""
                                    status="process"
                                    description="" />
                            </a-steps>
                            <div class="steps-content" style="min-height: 400px; max-height: 400px;">
                                <CompanyAccountInformation v-if="current === 0" />
                                <CompanyDetails v-if="current === 1" />
                                <CompanySummary v-if="current === 2" />
                            </div>
                            <div class="steps-action">
                                <a-button 
                                    type="primary"
                                    v-if="current > 0" 
                                    style="margin-left: 8px"
                                    @click="prev"><a-icon type="left" /> Previous</a-button>
                                <nuxt-link to='/admin/company-accounts'>
                                    <a-button 
                                        type="primary"
                                        v-if="current < 1">Back</a-button>
                                </nuxt-link>
                                <a-button 
                                    type="primary"
                                    v-if="current < steps.length - 1" 
                                    style="float: right"
                                    @click="next">Next <a-icon type="right" /></a-button>
                                <nuxt-link to='/admin/company-accounts'>
                                    <a-button
                                        type="primary"
                                        v-if="current == steps.length - 1"
                                        style="float: right"
                                        @click="$message.success('Invitation successfully sent!')">Send Invitation <a-icon type="check" /></a-button>
                                </nuxt-link>
                            </div>
                        </a-col>
                    </a-row>
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
import CompanyAccountInformation from '../../../components/admin/company-accounts/add-company/AdminAddCompanyAccountInformation';
import CompanyDetails from '../../../components/admin/company-accounts/add-company/AdminAddCompanyDetails';
import CompanySummary from '../../../components/admin/company-accounts/add-company/AdminAddCompanySummary';

export default {
    head() {
        return {
            title: 'Add New Company',
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
        CompanyAccountInformation,
        CompanyDetails,
        CompanySummary,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'company-accounts',
            openkey: '',
        });
    },
    data() {
        return {
            current: 0,
            steps: [
                {
                    title: 'Account Information',
                    content: '',
                },
                {
                    title: 'Company Details',
                    content: '',
                },
                {
                    title: 'Summary',
                    content: '',
                },
            ],
            stepStyle: {
                marginBottom: '20px',
                boxShadow: '0px -1px 0 0 #e8e8e8 inset',
            },
        };
    },
    methods: {
        onChange(current) {
            console.log('onChange:', current);
            this.current = current;
        },
        next() {
            this.current++;
        },
        prev() {
            this.current--;
        },
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