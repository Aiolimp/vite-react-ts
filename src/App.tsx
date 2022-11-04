import { Button } from 'antd';
import { useRoutes,Link } from 'react-router-dom'
import router from './router'
function App() {
  const outlet = useRoutes(router);
  return (
    <div className="App">
      {/* <Link to="/home">home</Link> | 
      <Link to="/about">about</Link> */}
      {/* 占位符组件，类似于窗口，用来展示组件的，像VUE中的router-view */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
