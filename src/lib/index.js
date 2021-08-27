
import lmcustom from './lm-custom'
import echarts from 'echarts'
const lmcustom_el = {
  install(Vue, options) {
    Vue.component(lmcustom.name, lmcustom)
    Vue.prototype.$echarts = echarts
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(lmcustom_el);
}

export default lmcustom_el
