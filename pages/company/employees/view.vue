<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>{{ this.$store.state.companyname }}</a-breadcrumb-item>
                    <a-breadcrumb-item>Employees</a-breadcrumb-item>
                    <a-breadcrumb-item>Employee Information</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <nuxt-link to="/company/employees">
                        <a-button type="primary"><a-icon type="arrow-left" /> Back</a-button>
                    </nuxt-link>
                    <br /><br />
                    <a-row>
                        <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 24 }">
                            <h1 class="title">Employee Information</h1>
                            <p><b>Employee ID: </b> <span>AOV000001</span></p>
                            <p><b>Employee Name: </b> <span>Steve Rogers</span></p>
                            <p><b>Level of Experience: </b> <span>Master</span></p>
                            <p><b>Address: </b> <span>123 St. Mt. Rainer, Milpitas Avenue, California 95035</span></p>
                            <p><b>Hourly Rate ($ / hour) : </b> <span>$85</span></p>
                            <p>
                                <b>Additional Details: </b> 
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            </p>
                            <p><b>Areas of Work: </b> <span>Commercial, Industrial, Residential</span></p>
                            <p><b>Date Hired: </b> <span>June 01, 2020</span></p>
                        </a-col>
                        <a-col :lg="{ span: 14, offset: 2 }" :md="{ span: 14, offset: 2 }" :sm="{ span: 24 }">
                            <h1 class="title">Work History</h1>
                            <WorkHistory />
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
import WorkHistory from '../../../components/company/employees/WorkHistory';

export default {
    head() {
        return {
            title: 'View Employee Information',
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
        WorkHistory,
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'company-employees',
            openkey: '',
        });
    }
}
</script>

<style>

</style>