// import axios from 'axios'
export default{
    state: {
        customers: [
            {name: 'customer 1', active: true,},
            {name: 'customer 2', active: true,},
            {name: 'customer 3', active: false,}
        ],
        searchVal: ''
        },
    getters: {
        customers: state => state.customers,
        filterCustomer: state => {
            return state.customers.filter(customer => customer.name.toLowerCase().match(state.searchVal.toLowerCase()))
        }
    },
    mutations: {
        ADD_CUSTOMER: (state, customerName) => {
            state.customers = [...state.customers, {
                name: customerName,
                active: true
            }]
            // localStorage.setItem('customers',JSON.stringify(state.customers))
        },
        REMOVE_CUSTOMER: (state,customer) => {
            const startIndex = state.customers.indexOf(customer)
            state.customers.splice(startIndex,1)                   
        },
        TOGGLE_ACTIVE_STATE:(state,customer) => {
            customer.active = !customer.active
        },
        SEARCH: (state,val ) =>{
            state.searchVal = val
        },
        SET_STORAGE: (state) => {
            localStorage.setItem('customers',JSON.stringify(state.customers))
        },
        SET_CUSTOMERS: (state,customers )=>{
            state.customers = customers
        }

    },
    actions:{ 
        addCustomer: ({commit},custmerName) => {
            commit('ADD_CUSTOMER',custmerName )
            commit('SET_STORAGE')        
        },
        removeCustomer: ({commit}, customer) => {
            commit('REMOVE_CUSTOMER', customer)
            commit('SET_STORAGE')
        },
        toggleActive: ({commit}, customer) => {
            commit('TOGGLE_ACTIVE_STATE', customer)
            
        },
        search: ({commit},val) =>{
            commit('SEARCH',val)
        },
        setStorage: ({commit}) => {
            commit('SET_STORAGE')
        },
        checkUsers: ({commit}) => {
            let customers= JSON.parse(localStorage.getItem('customers'))
            console.log(customers)

            if(customers){
                commit('SET_CUSTOMERS', customers)
            }
            
        }
    }
    
}

