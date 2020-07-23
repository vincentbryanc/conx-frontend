<template>
	<div>
		<a-layout id="components-layout-fixed" style="min-height: 100vh">
            <AppHeader />
            <a-layout-content :style="{ marginTop: '63px' }" >
                <a-row>
                    <a-col :lg="{ span: 12, offset: 6 }" :md="{ span: 24 }" sm="{ span: 24 }">
                        <a-card class="card">
                            <h1 class="text-center">Upload your Resume</h1>
                            <a-steps v-model="current" type="navigation" size="small" :style="stepStyle" @change="onChange">
                                <a-step
                                    title="Person Information"
                                    sub-title=""
                                    status="process"
                                    description="" />
                                <a-step
                                    title="Work Information"
                                    sub-title=""
                                    status="process"
                                    description="" />
                                <a-step
                                    title="Resume"
                                    sub-title=""
                                    status="process"
                                    description="" />
                                <a-step
                                    title="Summary"
                                    sub-title=""
                                    status="process"
                                    description="" />
                            </a-steps>
                            <div class="steps-content" style="min-height: 425px;">
                                <SkilledWorkerPersonalInformation v-if="current === 0" />
                                <SkilledWorkerWorkInformation v-if="current === 1" />
                                <SkilledWorkerResume v-if="current === 2" />
                                <SkilledWorkerSummary v-if="current === 3" />
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
                                        v-if="current < 1">Cancel Uploading of Resume</a-button>
                                </nuxt-link>
                                <a-button 
                                    type="primary"
                                    v-if="current < steps.length - 1" 
                                    style="float: right"
                                    @click="next">Next <a-icon type="right" /></a-button>
                                <!-- <a-button
                                    type="primary"
                                    v-if="current == steps.length - 1"
                                    style="float: right"
                                    @click="$message.success('Registration completed!')">Finish <a-icon type="check" /></a-button> -->
                                <nuxt-link to="/skilled-worker/confirm-email-address">
                                    <a-button
                                        type="primary"
                                        v-if="current == steps.length - 1"
                                        style="float: right">
                                        Finish <a-icon type="check" />
                                    </a-button>
                                </nuxt-link>
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
import SkilledWorkerPersonalInformation from '../../components/upload-resume/SkilledWorkerPersonalInformation';
import SkilledWorkerWorkInformation from '../../components/upload-resume/SkilledWorkerWorkInformation';
import SkilledWorkerResume from '../../components/upload-resume/SkilledWorkerResume';
import SkilledWorkerSummary from '../../components/upload-resume/SkilledWorkerSummary';
export default {
	head() {
        return {
            title: 'Upload Resume',
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
        SkilledWorkerPersonalInformation,
        SkilledWorkerWorkInformation,
        SkilledWorkerResume,
        SkilledWorkerSummary,
    },
    data() {
        return {
            current: 0,
            steps: [
                {
                    title: 'Personal Information',
                    content: '',
                },
                {
                    title: 'Work Information',
                    content: '',
                },
                {
                    title: 'Resume',
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
    
</style>