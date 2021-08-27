
import lmecharts from './lm-echarts'
import echarts from 'echarts'
const lmcustom = {
  install(Vue, options) {
    Vue.component(lmecharts.name, lmecharts)
    Vue.prototype.$echarts = echarts
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(lmcustom);
}

export default lmcustom
