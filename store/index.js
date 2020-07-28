export const state = () => ({
    collapsed: false,
    defaultselectedkey: '',
    defaultopenkey: '',
    defaultselectedtab: '',
    action: '',
});

export const mutations = {
    toggleSidebar(state) {
        state.collapsed = !state.collapsed;
    },
    changedefaultselectedkeyandopenkey(state, payload) {
        state.defaultselectedkey = payload.selectedkey;
        state.defaultopenkey = payload.openkey;
    },
    actionresolve(state) {
        state.action = 'resolve';
    },
    actionupdate(state) {
        state.action = 'update';
    }
}