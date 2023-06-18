import { createApp } from 'vue'
import Vuex from 'vuex'

createApp(Vuex)

const store = new Vuex.Store({
    state: {  //用于存放数据
        count: 123456,
        token: ''
    },

    //dispatch
    mutations: { //同步的更改数据
        setItem(state, token) {    // 只能接受两个参数，用于修改store存的值
            state.token = token;
        },
    },

    //commit
    actions: {//可异步的更改数据
        login ({ commit }, id) {
            commit('login', id)
        },
    }
})

export default store;

