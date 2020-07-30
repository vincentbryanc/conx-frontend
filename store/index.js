export const state = () => ({
    companyname: 'Agents of Value',
    collapsed: false,
    defaultselectedkey: '',
    defaultopenkey: '',
    defaultselectedtab: '',
    hascreditcard: false,
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
    changedefaultselectedtab(state, payload) {
        state.defaultselectedtab = payload.selectedkey;
    },
    addcreditcard(state) {
        state.hascreditcard = true;
    },
    removecreditcard(state) {
        state.hascreditcard = false;
    },
    actionresolve(state) {
        state.action = 'resolve';
    },
    actionupdate(state) {
        state.action = 'update';
    }
}