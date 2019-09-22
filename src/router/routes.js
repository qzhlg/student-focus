import LoginPage from '../pages/login/index.jsx'
import Visual from '../pages/home/visual/index.jsx';
import Allachivement from '../pages/home/allachivements/index.jsx';
import President from '../pages/home/president/indexPresident.jsx';
// import indexPresident from '../pages/home/president/indexPresident.jsx';
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
        path:'/home/president',
        component:President
    },
    {
        path:'/',
        redirect:'/login'
    }
]