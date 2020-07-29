<template>
    <!-- <a-layout-sider width="200" :style="{ background: '#fff' }" v-model="this.$store.state.collapsed" :collapsedWidth="0" :trigger="null" collapsible> -->
    <a-layout-sider breakpoint="lg" collapsed-width="0">
        <a-menu
            mode="inline"
            :default-selected-keys="[this.$store.state.defaultselectedkey]"
            :default-open-keys="[this.$store.state.defaultopenkey]"
            :style="{ height: '100%', borderRight: 0 }">
            <a-menu-item-group key="transactions" title="Transactions">
                <a-sub-menu key="loan">
                    <span slot="title"><a-icon type="project" /><span>Loan</span></span>
                    <a-menu-item key="loan-requests">
                        <nuxt-link to="/company/loan/pending-requests">
                            Requests
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="loan-billings">
                        <nuxt-link to="/company/loan/billing-summary">
                            Billings
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="loan-financials">
                        <nuxt-link to="/company/loan/financials">
                            Financials
                        </nuxt-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="borrow">
                    <span slot="title"><a-icon type="interaction" /><span>Borrow</span></span>
                    <a-menu-item key="borrow-search">
                        <nuxt-link to="/company/borrow/search">
                            Search
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="borrow-cart">
                        <nuxt-link to="/company/borrow/cart">
                            Borrow Cart
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="borrow-requests">
                        <nuxt-link to="/company/borrow/pending-requests">
                            Requests
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="borrow-active-workers">
                        <nuxt-link to="/company/borrow/active-workers">
                            Active Workers
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="borrow-billings">
                        <nuxt-link to="/company/borrow/billing-summary">
                            Billings
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="borrow-financials">
                        <nuxt-link to="/company/borrow/financials">
                            Financials
                        </nuxt-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="resume-search">
                    <nuxt-link to="/company/resume-search">
                        <a-icon type="search" />
                        <span>Resume Search</span>
                    </nuxt-link>
                </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group key="company" title="Company" :style="{ marginTop: '25px' }">
                <a-menu-item key="company-employees">
                    <nuxt-link to="/company/employees">
                        <a-icon type="contacts" />
                        <span>Employees</span>
                    </nuxt-link>
                </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group key="adminstrator" title="Administrator" :style="{ marginTop: '25px' }">
                <a-menu-item key="company-users">
                    <nuxt-link to="/company/users">
                        <a-icon type="team" />
                        <span>Users</span>
                    </nuxt-link>
                </a-menu-item>
                <a-menu-item key="company-reports">
                    <nuxt-link to="/company/reports">
                        <a-icon type="file" />
                        <span>Reports</span>
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
    }
}
</script>

<style>

</style>