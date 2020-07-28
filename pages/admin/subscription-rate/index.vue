<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Administrator</a-breadcrumb-item>
                    <a-breadcrumb-item>Subscription Rate</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <div>
                        <h1 class="title">Subscription Rate</h1>
                    </div>
                    <div>
                        <SubscriptionRate />
                    </div>
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
import SubscriptionRate from '../../../components/admin/subscription-rate/SubscriptionRate';

export default {
    head() {
        return {
            title: 'Subscription Rate',
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
        SubscriptionRate,
    },
}
</script>

<style>

</style>