<template>
    <!-- <a-layout-sider width="200" :style="{ background: '#fff' }" v-model="this.$store.state.collapsed" :collapsedWidth="0" :trigger="null" collapsible> -->
    <a-layout-sider breakpoint="lg" collapsed-width="0">
        <a-menu
            mode="inline"
            :default-selected-keys="[this.$store.state.defaultselectedkey]"
            :default-open-keys="[this.$store.state.defaultopenkey]"
            :style="{ height: '100%', borderRight: 0 }">
            <a-menu-item-group key="administrator" title="Administrator">
                <a-menu-item key="company-accounts">
                    <nuxt-link to="/admin/company-accounts">
                        <a-icon type="team" />
                        <span>Company Accounts</span>
                    </nuxt-link>
                </a-menu-item>
                <a-sub-menu key="loan">
                    <span slot="title"><a-icon type="project" /><span>Financials</span></span>
                    <a-menu-item key="financial-borrowers-invoice">
                        <nuxt-link to="/admin/financials/borrowers-invoice">
                            Borrowers Invoice
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="financial-loaners-invoice">
                        <nuxt-link to="/admin/financials/loaners-invoice">
                            Loaners Invoice
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="financial-earnings" >
                        <nuxt-link to="/admin/financials/earnings">
                            Earnings
                        </nuxt-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="admin-reports">
                    <nuxt-link to="/admin/reports">
                        <a-icon type="file" />
                        <span>Reports</span>
                    </nuxt-link>
                </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group key="system" title="System" :style="{ marginTop: '25px' }">
                <a-menu-item key="admin-subscription-rate">
                    <nuxt-link to="/admin/subscription-rate">
                        <a-icon type="file" />
                        <span>Subscription Rate</span>
                    </nuxt-link>
                </a-menu-item>
                <a-menu-item key="admin-users">
                    <nuxt-link to="/admin/users">
                        <a-icon type="team" />
                        <span>Users</span>
                    </nuxt-link>
                </a-menu-item>
            </a-menu-item-group>
        </a-menu>
    </a-layout-sider>
</template>

<script>
export default {
    name: "AppSider",
    methods: {
        toggleSidebar() {
            this.$store.commit('toggleSidebar');
        },
        changedefaultselectedkeyandopenkey(selectedkey, openkey) {
            this.$store.commit('changedefaultselectedkeyandopenkey', {
                selectedkey: selectedkey,
                openkey: openkey,
            });
        }
    },
}
</script>

<style>

</style>