import LoginPage from '../pages/login/index.jsx'
import Visual from '../pages/home/visual/index.jsx';
export default [
    {
        path:'/login',
        component:LoginPage
    },{
        path:'/home/visual',
        component:Visual
    },
    {
        path:'/',
        redirect:'/login'
    }
]