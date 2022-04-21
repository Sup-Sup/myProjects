import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

// store.state.a  -> moduleA 的状态
const modulesA = {
  state: {
    name: '宋江'
  },
  getters: {
    fullname(state) {
      return state.name + '牛'
    },
    fullname1(state,getters) {  // 这里要严格按照顺序来，具体原因得看这个源码
      return getters.fullname + '哇'
    },
    fullname2(state,getters,rootState) {
      return getters.fullname1 + rootState.counter
    }
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    sChangeName(context, payload) {
      return new Promise((resolve, reject) => {

        setTimeout(() => {
          context.commit('changeName', payload)
        }, 1000)
        console.log('内部执行成功');
        resolve('-----------')
      })
    }
  }
}

const store = new vuex.Store({
  state: {
    counter: 15,
    stu: null,
    info: {
      message: 'hello, this is inner information'
    }
  },
  getters: {
    doubleCouter(state) {
      return state.counter * 2
    },
    useDoubleCouter(state,getters) {  // 此处的state不能省略，虽然没有使用到
      return getters.doubleCouter
    },
    inputCounter(state) {
      return function(con) {
        return state.counter * con
      }
    }
  },
  mutations: {
    addCounter(state) {
      state.counter++
    },
    addStudents(state, stu) {
      state['stu'] = stu
    },
    updateInfo(state, payload) {
      state.info.message = payload.message
    }
  },
  actions: {
    AupdateInfo(context, payload) {
      // setTimeout(() => {
      //   context.commit('updateInfo', payload)
      //   console.log(payload);
      //   payload.success();
      // }, 2000)

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo', payload)

          resolve('111111111111111111')
        }, 1000);
      })
    }
  },
  modules: {
    a:modulesA
  }
})

export default store 