// 模块化引入，（全局引入会影响其他界面样式）
import style from './comp1.module.scss'
const com1 = () => {
    return (
        <div className={style.box}>
            我是组件com1
        </div>
    )
}
export default com1