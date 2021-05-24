export default {
    state: {
        authorized: true,
        sessionId: "17bf70e1-99f4-44eb-a0e4-15a18788b9aa"
    },

    getters: {},

    mutations: {},

    actions: {
        signUp:  () => {},
        signIn:  () => {
            sessionStorage.setItem('accessToken', 'f34b9493-8623-4337-890f-54c91c6648b7')
        },
        signOut: () => {
            sessionStorage.removeItem('accessToken')
            window.location = "/"
        }
    }
}