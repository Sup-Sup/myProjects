import vue from 'vue'
import Vuex from 'vuex'   

vue.use(Vuex)

const modulesA = {
  state: {
    name: '张三'
  },
  mutations: {
    updateName(state,payload){
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context){
      setTimeout(() => {
        context.commit('updateName','李四')
      },2000)
    }
  },
  getters: {
    fullName(state){
      return state.name + '11111'
    },
    fullName2(state,getters){
      return getters.fullName + '2222'
    },
    fullName3(state,getters,rootState){
      return getters.fullName2 + rootState.students[0].name 
    }
  }
}


const store = new Vuex.Store({
  state: {
    // 初始数据 -- 保存状态的地方
    counter: 0,
    students: [
      {id: 0,name: 'kobe', height: 198},
      {id: 1,name: 'alan', height: 183},
      {id: 2,name: 'chaoqi', height: 172}
    ],
    info: {name: 'lily', age: 18, height:165}
  },
  mutations:{
    // 方法, 会自动将state当做参数传输进来
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
     incrementCounter(state,count){
      state.counter += count
    }
  },
  actions: {
    // 主要是异步操作，做完了异步操作，再去mutations 中做数据的操作
    // context 等同于store
    aChangeInfo(context,payload){
      setTimeout(() => {
        context.commit('changeInfo')
        console.log(payload);
      },1000)
    }
  },
  getters: {
      // 类似computed 属性
          // 默认传递一个state对象
    squareCounter(state){
      return state.counter * state.counter
    },
    higher(state){
      return state.students.filter( s => s.height > 180)
    },
    //另一种形式来获取数据,后边都是getters 参数
    higherLenght(state,getters) {
      return getters.higher.length
    },
    getHigher(state) {
      return function (height) {
        return state.students.filter( s => s.height > height)
      }
    },
    changeInfo(state){
      //  state.info.name = 'lilei'
      // state.info['address'] = "费城"  不是响应 式的
      // Vue.set(state.info,'address','费城')  // 响应式
      // delete state.info.age // 不是响应式的
      Vue.delete(state.info,'age') //响应式的
    }
  },
  modules: {
    // 模块化
    a: modulesA
  }
})


export default store