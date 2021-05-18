import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 10,
        students:[
            {id:1, name:"Molly", age:3},
            {id:2, name:"Oli", age:4},
            {id:3, name:"Sofia", age:5}

        ]
    },
    mutations:{
        increment(state){
           state.counter++
        },
        decrement(state){
            state.counter--
        },
        
        incrementCount(state, count){
            state.counter += count
        },
        addStudent(state, student4){
            state.students.push(student4)
        }

    },
    getters:{
        more4(state){
           return state.students.filter(student => student.age>4)
        },
        more4length(state,getters){
            return getters.more4.length
        },
        morethanAge(state){
            return function(age){
               return  state.students.filter(s => s.age>age)
            }
        }

    }
})

export default store