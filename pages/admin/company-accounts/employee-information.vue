<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Administrator</a-breadcrumb-item>
                    <a-breadcrumb-item>Company Account</a-breadcrumb-item>
                    <a-breadcrumb-item>Employee Information</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <nuxt-link to="/admin/company-accounts/company-information">
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
                            <EmployeeWorkHistory />
                        </a-col>
                    </a-row>
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
import EmployeeWorkHistory from '../../../components/admin/company-accounts/EmployeeWorkHistory';

export default {
    head() {
        return {
            title: 'Company Employee Information',
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
        EmployeeWorkHistory,
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