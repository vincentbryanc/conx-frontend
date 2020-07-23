<template>
	<div>
		<a-layout id="components-layout-fixed" style="min-height: 100vh">
            <AppHeader />
            <a-layout-content :style="{ marginTop: '63px' }" >
                <a-row>
                    <a-col :lg="{ span: 8, offset: 8 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                        <a-card class="card">
                            <h1 class="text-center">My Resume</h1>
                            <br />
                            <p><b>Email Address: </b> dannysullivan@aov.com</p>
                            <p><b>Name: </b> Danny Sullivan</p>
                            <p><b>Phone Number: </b> (724) 824-1233</p>
                            <p><b>Address: </b> 5804 Forbes Ave, Pittsburgh, PA 15217</p>
                            <p><b>Experise: </b> Electrical</p>
                            <p><b>Level of Experience: </b> Master</p>
                            <p><b>Distance willing to travel: </b> 15 Miles</p>
                            <p><b>Areas of Work: </b> Commercial, Industrial, Residential, Fire alarm</p>
                            <p><b>Resume Link: </b> <nuxt-link to="#">https://conx.com/resume/my-resume.pdf</nuxt-link></p>
                            <br />
                            <div class="text-center">
                                <a-button
                                    type="danger">Deactivate Resume</a-button>
                                <a-button
                                    type="warning"
                                    @click="showModal">Edit Resume <a-icon type="edit" /></a-button>
                            </div>
                        </a-card>
                    </a-col>
                </a-row>
            </a-layout-content>
            <AppFooter />
		</a-layout>
        <a-modal v-model="visible" title="Edit Information" on-ok="handleOk" :width="750">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">
                    Close
                </a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                    Update
                </a-button>
            </template>
            <div>
                <a-steps v-model="current" type="navigation" size="small" :style="stepStyle">
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
                </a-steps>
                <div class="steps-content">
                    <SkilledWorkerPersonalInformation v-if="current === 0" />
                    <SkilledWorkerWorkInformation v-if="current === 1" />
                    <SkilledWorkerResume v-if="current === 2" />
                    <br>
                    <p v-if="current === 2"><b>Resume Link: </b> <nuxt-link to="#">https://conx.com/resume/my-resume.pdf</nuxt-link></p>
                </div>
            </div>
        </a-modal>
	</div>
</template>

<script>
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import SkilledWorkerPersonalInformation from '../../components/upload-resume/SkilledWorkerPersonalInformation';
import SkilledWorkerWorkInformation from '../../components/upload-resume/SkilledWorkerWorkInformation';
import SkilledWorkerResume from '../../components/upload-resume/SkilledWorkerResume';
export default {
	head() {
        return {
            title: 'My Resume',
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
    },
    data() {
        return {
            loading: false,
            visible: false,
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
            ],
            stepStyle: {
                marginBottom: '20px',
                boxShadow: '0px -1px 0 0 #e8e8e8 inset',
            },
        };
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            this.loading = true;
            setTimeout(() => {
                this.visible = true;
                this.loading = false;
            }, 1000);
        },
        handleCancel(e) {
            this.visible = false;
        },
    },
}
</script>

<style>

</style>