import dva from 'dva';
import RouterView from './router/index'
import login from './models/login'
// require('./models').default.forEach(key => {
//     app.model(key.default)
// });
const createHashHistory = require('history').createHashHistory
const app = dva({
    history: createHashHistory()
})

app.model(login)
app.router(RouterView)
app.start('#root')

