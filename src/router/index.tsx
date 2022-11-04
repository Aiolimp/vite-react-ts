import React, { lazy } from 'react'
// import Home from '../components/Home'
// import About from '../components/About'
// Navigate重定向组件
import { Navigate } from 'react-router-dom'
// 路由懒加载
const About = lazy(() => import('../components/About'))
const Home = lazy(() => import('../components/Home'))
// 懒加载模式需要外面包裹fallback提示
const withLoadingComponents = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>loading</div>}>
        {comp}
    </React.Suspense>
)
const routes = [
    {
        path: '/',
        element: <Navigate to="/home"></Navigate>
    },
    {
        path: '/home',
        element: withLoadingComponents(<Home />)
    },
    {
        path: '/about',
        element: withLoadingComponents(<About />)
    },
]
export default routes