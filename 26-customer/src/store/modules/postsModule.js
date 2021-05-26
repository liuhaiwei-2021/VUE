import axios from 'axios'


export default{
    state: {
        posts: [],
        post: {}
        },
    getters: {
        posts: state => state.posts,
        post: state => state.post,

        },
    mutations: {
        SET_POSTS: (state, posts) => state.posts = posts,
        SET_POST:  (state, post) => state.post = post,
        },
    
    actions: {
        getPosts: async ({commit}) => {
            console.log('getting posts...')
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            if(res.status === 200){
                commit('SET_POSTS', res.data)
            }
        },
        getPost: async ({commit},id) => {
            console.log('getting a post by id')
            console.log(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            if(res.status === 200){
                commit('SET_POST', res.data)
            }
        }
    }
}

