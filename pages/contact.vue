<template>
	<div>
		<a-layout id="components-layout-fixed" style="min-height: 100vh">
            <AppHeader />
            <a-layout-content :style="{ marginTop: '63px' }" >
                <h1 class="text-center">Contact Us</h1>
            </a-layout-content>
            <AppFooter />
		</a-layout>
	</div>
</template>

<script>
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
export default {
	head() {
        return {
            title: 'Contact Us',
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

</style>