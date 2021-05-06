import Icon from './icon/icon'
import Line from './line/line'

const components = [
    Icon,
    Line
]

const install = function(Vue){
    components.forEach((item)=>{
        Vue.component(item.name,item)
    })
}

// 如果Vue是全局对象则自动安装插件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
}