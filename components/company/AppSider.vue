<template>
    <a-layout-sider width="200" :style="{ background: '#fff' }" v-model="this.$store.state.collapsed" :collapsedWidth="0" :trigger="null" collapsible>
        <a-menu
            mode="inline"
            :default-selected-keys="['10']"
            :style="{ height: '100%', borderRight: 0 }">
            <a-menu-item-group key="transactions" title="Transactions">
                <a-sub-menu key="loan">
                    <span slot="title"><a-icon type="project" /><span>Loan</span></span>
                    <a-menu-item key="1">
                        Requests
                    </a-menu-item>
                    <a-menu-item key="2">
                        Billings
                    </a-menu-item>
                    <a-menu-item key="3">
                        Financials
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="borrow">
                    <span slot="title"><a-icon type="interaction" /><span>Borrow</span></span>
                    <a-menu-item key="4">
                        Search
                    </a-menu-item>
                    <a-menu-item key="5">
                        Borrow Cart
                    </a-menu-item>
                    <a-menu-item key="6">
                        Requests
                    </a-menu-item>
                    <a-menu-item key="7">
                        Billings
                    </a-menu-item>
                    <a-menu-item key="8">
                        Financials
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <a-icon type="search" />
                    <span>Resume Search</span>
                </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group key="company" title="Company" :style="{ marginTop: '25px' }">
                <a-menu-item key="10">
                    <a-icon type="contacts" />
                    <span>Employees</span>
                </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group key="adminstrator" title="Administrator" :style="{ marginTop: '25px' }">
                <a-menu-item key="11">
                    <a-icon type="team" />
                    <span>Users</span>
                </a-menu-item>
                <a-menu-item key="12">
                    <a-icon type="file" />
                    <span>Reports</span>
                </a-menu-item>
            </a-menu-item-group>
        </a-menu>
    </a-layout-sider>
</template>

<script>
export default {
    name: "AppSider",
}
</script>

<style>

</style>