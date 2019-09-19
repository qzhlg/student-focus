import {UserLogin} from '../services/request'
console.log(UserLogin)
export default {
    namespace: 'user',

    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *login({ payload }, { call, put }) {  // eslint-disable-line
        console.log(payload)
        let result=yield call(UserLogin,payload)
        console.log(result)
        yield put({ type: 'login'});
      },
     
    },
  
    reducers: { 
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
}