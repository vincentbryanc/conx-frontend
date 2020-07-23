export const state = () => ({
    collapsed: false
});

export const mutations = {
    toggleSidebar(state) {
        state.collapsed = !state.collapsed;
    }
}