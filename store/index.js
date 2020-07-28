export const state = () => ({
    collapsed: false,
    defaultselectedkeys: 10,
    action: '',
});

export const mutations = {
    toggleSidebar(state) {
        state.collapsed = !state.collapsed;
    },
    actionresolve(state) {
        state.action = 'resolve';
    },
    actionupdate(state) {
        state.action = 'update';
    }
}