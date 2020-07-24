<template>
    <!-- <a-layout-sider width="200" :style="{ background: '#fff' }" v-model="this.$store.state.collapsed" :collapsedWidth="0" :trigger="null" collapsible> -->
    <a-layout-sider breakpoint="lg" collapsed-width="0">
        <a-menu
            mode="inline"
            :default-selected-keys="['0']"
            :style="{ height: '100%', borderRight: 0 }">
            <a-menu-item-group key="transactions" title="Transactions">
                <a-sub-menu key="loan">
                    <span slot="title"><a-icon type="project" /><span>Loan</span></span>
                    <a-menu-item key="1">
                        <nuxt-link to="loan/requests">
                            Requests
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <nuxt-link to="loan/billings">
                            Billings
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <nuxt-link to="loan/financials">
                            Financials
                        </nuxt-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="borrow">
                    <span slot="title"><a-icon type="interaction" /><span>Borrow</span></span>
                    <a-menu-item key="4">
                        <nuxt-link to="borrow/search">
                            Search
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="5">
                        <nuxt-link to="borrow/cart">
                            Borrow Cart
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="6">
                        <nuxt-link to="borrow/requests">
                            Requests
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="7">
                        <nuxt-link to="borrow/billings">
                            Billings
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="8">
                        <nuxt-link to="borrow/financials">
                            Financials
                        </nuxt-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <nuxt-link to="resume-search">
                        <a-icon type="search" />
                        <span>Resume Search</span>
                    </nuxt-link>
                </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group key="company" title="Company" :style="{ marginTop: '25px' }">
                <a-menu-item key="10">
                    <nuxt-link to="employees">
                        <a-icon type="contacts" />
                        <span>Employees</span>
                    </nuxt-link>
                </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group key="adminstrator" title="Administrator" :style="{ marginTop: '25px' }">
                <a-menu-item key="11">
                    <nuxt-link to="users">
                        <a-icon type="team" />
                        <span>Users</span>
                    </nuxt-link>
                </a-menu-item>
                <a-menu-item key="12">
                    <nuxt-link to="reports">
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
    // data() {
    //     return {
    //         defaultselectedkeys: 10,
    //     }
    // }
}
</script>

<style>

</style>