import LoginPage from '../pages/login/index.jsx'
export default [
    {
        path:'/login',
        component:LoginPage
    },{
        path:'/',
        redirect:'/login'
    }
]