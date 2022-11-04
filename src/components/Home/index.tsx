// 模块化引入，（全局引入会影响其他界面样式）
import style from './comp1.module.scss'
const home = () => {
    return (
        <div className={style.box}>
            我是组件home
        </div>
    )
}
export default home