<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <a-row>
            <a-col :lg="{ span: 15, offset: 2 }" :md="{ span: 24, offset: 1 }" :sm="{ span: 24 }">
                <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '63px', textAlign: 'center' }">
                    <a-menu-item key="0" class="logo"> 
                        <nuxt-link to='/'><img src="~assets/logo.png" /></nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <nuxt-link to='/about'>About</nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <nuxt-link to='/history'>History</nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="4">
                        <nuxt-link to='/services'>Services</nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="5">
                        <nuxt-link to='/contact'>Contact Us</nuxt-link>
                    </a-menu-item>
                </a-menu>
            </a-col>
        </a-row>
    </a-layout-header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style>
    .logo {
        float: left;
    }
</style>