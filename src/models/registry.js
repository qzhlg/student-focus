import {UserRegistry} from '../services/request'
export default {
    namespace: 'registry',

    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *registry({ payload }, { call, put }) {  // eslint-disable-line
        console.log(payload)

        let {userval, pwdval}=payload;
        let data={
          username:userval,
          password:pwdval
        }
        let result=yield call(UserRegistry,data)
        console.log(result)
        // yield put({ type:'save'});
       return 1
      },
    },
  
    reducers: { 
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
}