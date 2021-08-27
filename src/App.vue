<template>
  <div id="app">
    <div style="width: 500px;height: 300px;">
      <lm-echarts
        :cfCustom="cfCustom"
        @onChangeData="onChangeData"
      ></lm-echarts>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      cfCustom:{
        id:'customBar',
        backgroundColor:'#ccc',
        w:'100%',
        h:'100%',
        title:'',
        xData:{
          data:['1','2']
        },
        yData:{

        },
        serveData:{
          type:'bar',
          barWidth:'20',
          showBackground: true,
          data:[100,200]
        }
      },


    }
  },
  methods:{
    onChangeData(el){
      console.log(el);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
