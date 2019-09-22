import dva from 'dva';
import RouterView from './router/index'
import login from './models/login'
import registry from './models/registry'
import './index.css'
// require('./models').default.forEach(key => {
//     app.model(key.default)
// });
const createHashHistory = require('history').createHashHistory
const app = dva({
    history: createHashHistory()
})

app.model(login)
app.model(registry)
app.router(RouterView)
app.start('#root')

