<template>
    <a-layout-header class="header" :style="{ position: 'fixed', zIndex: 999, width: '100%' }">
        <div class="logo">
            <img src="~assets/logo.png" />
        </div>
        <a-menu
            theme="dark"
            mode="horizontal"
            :style="{ lineHeight: '64px' }">
                <!-- <a-icon
                    class="trigger"
                    :type="this.$store.state.collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="toggleSidebar" /> -->
                <a-icon  
                    type="bell"
                    class="bell" />
                <a-sub-menu>
                    <span slot="title" class="submenu-title-wrapper">
                        <span>Agents of Value</span>
                    </span>
                    <a-menu-item key="account">
                        Profile
                    </a-menu-item>
                    <a-menu-item key="logout">
                        <nuxt-link to="/">Logout</nuxt-link>
                    </a-menu-item>
                </a-sub-menu>
        </a-menu>
    </a-layout-header>
</template>
<script>
export default {
    name: "AppHeader",
    // methods: {
    //     toggleSidebar() {
    //         this.$store.commit('toggleSidebar');
    //     }
    // }
};
</script>

<style>
.logo {
    width: 120px;
    margin: 0px 28px 0px 0;
}

.trigger, .bell, .user {
    font-size: 18px;
    line-height: 62px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

.trigger:hover {
    color: #FFBB00;
}
</style>