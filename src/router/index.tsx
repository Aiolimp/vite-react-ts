import React, { lazy } from 'react'
// import Home from '../components/Home'
// import About from '../components/About'
// Navigate重定向组件
import { Navigate } from 'react-router-dom'
// 路由懒加载
const About = lazy(() => import('../view/about'))
const Home = lazy(() => import('../view/home'))
const Page1 = lazy(() => import('../view/page1'))
const Page2 = lazy(() => import('../view/page2'))
const Page301 = lazy(() => import('../view/page301'))
const Page302 = lazy(() => import('../view/page302'))
// 懒加载模式需要外面包裹fallback提示
const withLoadingComponents = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>loading</div>}>
        {comp}
    </React.Suspense>
)
const routes = [
    {
        path: '/',
        element: <Navigate to="/Page1" />
    },
    {
        path: '/',
        element: (<Home/>),
        children: [
            {
                path: '/page1',
                element: withLoadingComponents(<Page1 />)
            },
            {
                path: '/page2',
                element: withLoadingComponents(<Page2 />)
            },
            {
                path: '/page3/page301',
                element: withLoadingComponents(<Page301 />)
            },
            {
                path: '/page3/page302',
                element: withLoadingComponents(<Page302 />)
            },
        ]
    },
    // {
    //     path: '/home',
    //     element: withLoadingComponents(<Home />)
    // },
    // {
    //     path: '/about',
    //     element: withLoadingComponents(<About />)
    // },
]
export default routes