export const state = () => ({
    collapsed: false,
    defaultselectedkeys: 10,
});

export const mutations = {
    toggleSidebar(state) {
        state.collapsed = !state.collapsed;
    }
}