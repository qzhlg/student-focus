import LoginPage from '../pages/login/index.jsx'
import Visual from '../pages/home/visual/index.jsx';
import Allachivement from '../pages/home/allachivements/index.jsx';
export default [
    {
        path:'/login',
        component:LoginPage
    },{
        path:'/home/visual',
        component:Visual
    },
    {
        path:'/home/allachivements',
        component:Allachivement
    },
    {
        path:'/',
        redirect:'/login'
    }
]