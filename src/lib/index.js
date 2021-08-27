
import lmEcharts from './lm-echarts'
import echarts from 'echarts'
const lmcustom = {
  install(Vue, options) {
    Vue.component(lmEcharts.name, lmEcharts)
    Vue.prototype.$echarts = echarts
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(lmcustom);
}

export default lmcustom
