export const state = () => ({
  isMobile: false
})
export const getters = {
  isMobile: state => state.isMobile
}

export const mutations = {
  SET_MOBILE(state, action) {
    state.isMobile = action
  }
}
