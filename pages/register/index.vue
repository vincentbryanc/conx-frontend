<template>
	<div>
		<a-layout id="components-layout-fixed" style="min-height: 100vh">
            <AppHeader />
            <a-layout-content :style="{ marginTop: '63px' }" >
                <a-row>
                    <a-col :lg="{ span: 10, offset: 7 }" :md="{ span: 24 }" sm="{ span: 24 }">
                        <a-card class="card">
                            <h1 class="text-center">Create Account</h1>
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
                                <nuxt-link to='/'>
                                    <a-button 
                                        type="primary"
                                        v-if="current < 1">Cancel Creating Account</a-button>
                                </nuxt-link>
                                <a-button 
                                    type="primary"
                                    v-if="current < steps.length - 1" 
                                    style="float: right"
                                    @click="next">Next <a-icon type="right" /></a-button>
                                <a-button
                                    type="primary"
                                    v-if="current == steps.length - 1"
                                    style="float: right"
                                    @click="$message.success('Registration completed!')">Finish <a-icon type="check" /></a-button>
                            </div>
                        </a-card>
                    </a-col>
                </a-row>
            </a-layout-content>
            <AppFooter />
		</a-layout>
	</div>
</template>

<script>
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import CompanyAccountInformation from '../../components/company-registration/CompanyAccountInformation';
import CompanyDetails from '../../components/company-registration/CompanyDetails';
import CompanySummary from '../../components/company-registration/CompanySummary';
export default {
	head() {
        return {
            title: 'Company Registration',
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
        AppFooter,
        CompanyAccountInformation,
        CompanyDetails,
        CompanySummary,
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

<style>
    .steps-content {
        padding: 0px 40px;
    }

    .steps-content {
        margin-bottom: 20px;
    }
</style>