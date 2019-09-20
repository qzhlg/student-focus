import {UserLogin} from '../services/request'
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

        let {userval, pwdval}=payload;
        let data={
          username:userval,
          password:pwdval
        }
        let result=yield call(UserLogin,data)
        console.log(result)
        yield put({ type:'save'});
        return 11
      },
    },
  
    reducers: { 
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
}