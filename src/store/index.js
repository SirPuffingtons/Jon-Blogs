import { createStore } from 'vuex'

export default createStore({
  state: {
    sampleBlogCard: [
        {
            title: 'Blog Card #1 The Best Way',
            blogCoverPhoto: 'stock-1',
            blogDate: 'August 20, 2021'
        },
        {
            title: 'Blog Card #2',
            blogCoverPhoto: 'stock-2',
            blogDate: 'August 20, 2021'
        },
        {
            title: 'Blog Card #3',
            blogCoverPhoto: 'stock-3',
            blogDate: 'August 20, 2021'
        },
        {
            title: 'Blog Card #4',
            blogCoverPhoto: 'stock-4',
            blogDate: 'August 20, 2021'
        },
    ],
    editPosts: null
  },
  mutations: {
      toggleEditPosts(state, payload) {state.editPosts = payload}
  },
  actions: {
  },
  modules: {
  }
})