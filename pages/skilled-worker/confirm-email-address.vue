<template>
	<div>
		<a-layout id="components-layout-fixed" style="min-height: 100vh">
            <AppHeader />
            <a-layout-content :style="{ marginTop: '63px' }" >
                <a-row>
                    <a-col :lg="{ span: 8, offset: 8 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                        <a-card class="registration-card text-center">
                            <h1>Verify your Email Address</h1>
                            <br />
                            <p>
                                To successfully add your resume to our job listing, we've sent
                                you an email with a link to verify your email address.
                            </p>
                            <br />
                            <a-button
                                type="primary"
                                @click="$message.success('Email Successfully sent!')">Resend Email Confirmation</a-button>
                            <br />
                            <nuxt-link to="/">
                                <a-button
                                    type="link">Back to Home</a-button>
                            </nuxt-link>
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
export default {
	head() {
        return {
            title: 'Confirm Email Address',
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
    },
}
</script>

<style>
    .registration-card {
        margin-top: 50px;
    }
</style>