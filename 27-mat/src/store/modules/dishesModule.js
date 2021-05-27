
export default{
    state: {
        dishes: [
            {name: 'dish 1', theme: 'Thai'},
            {name: 'dish 2', theme: 'Sverige'},
            {name: 'dish 3', theme: 'Kinesiska'}
        ],
        searchVal: '',
        weekDishes: []
        },
    getters: {
        dishes: state => state.dishes,
        weekDishes: state => state.weekDishes,
    
    },
    mutations: {
        ADD_DISH: (state, dish) => {
            state.dishes = [...state.dishes, {
                name: dish.name,
                theme: dish.theme                
            }]
        },
        DELETE_DISH: (state, dish) => {
            const startIndex = state.dishes.indexOf(dish)
            state.dishes.splice(startIndex,1)  
        },
        ADD_WEEK_DISHES:(state,dish) => {
            state.weekDishes =  [...state.weekDishes, dish]
        },
        ADD_RANDOM_DISH:(state) => {
            let dishes = state.dishes
            let randomDish = dishes[Math.floor(Math.random()*dishes.length)]
            state.weekDishes.push(randomDish)
        },
        DELETE__WEEK_DISH: (state, weekDish) => {
            const startIndex = state.weekDishes.indexOf(weekDish)
            state.weekDishes.splice(startIndex,1)  
        },
        SET_STORAGE :(state) =>{
            localStorage.setItem('dishes',JSON.stringify(state.dishes))
        }

    },
    actions:{ 
        addDish: ({commit}, dish ) => {
            commit('ADD_DISH', dish  )
            console.log(dish)    
       },
        deleteDish: ({commit},dish) =>{
            commit('DELETE_DISH', dish)
            console.log('deleting a dish')
       },
       addWeekDishes:({commit},dish) =>{
           commit('ADD_WEEK_DISHES', dish)
           
       },
       addRndomDish:({commit}) =>{
        commit('ADD_RANDOM_DISH')
        
       },
       deleteWeekDish: ({commit},weekDish) =>{
        commit('DELETE__WEEK_DISH', weekDish)
        console.log('deleting a weekDish')
      }, 
      setStorage: ({commit}) => {
        commit('SET_STORAGE')
      }   
  }
}    

