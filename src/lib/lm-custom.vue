<template>
 <div style="width: 100%;height: 100%;">
    <div
      :id=this.cfCustom.id
      :style="{
      width:this.cfCustom.w,
      height:this.cfCustom.h,
    }">
    </div>
 </div>
</template>

<script>
export default {
  name: "lm-custom",
  props:{
    cfCustom:{
      type:Object,
      default:()=>({
        id:'',
        backgroundColor:'',
        w:'',
        h:'',
        title:'',
        xData:{
          data:[]
        },
        yData:{

        },
        serveData:{
          name:'',
          showBackground:true,
          barWidth:'',
          type:'bar',
          data:[]
        }
      })
    }
  },
  data(){
    return{
      myChartBar:null
    }
  },
  methods:{
    drawBar(){
      this.myChartBar = this.$echarts.init(document.getElementById(this.cfCustom.id));
      // 绘制图表
      this.myChartBar.setOption({
        backgroundColor: this.cfCustom.backgroundColor===''?'transparent':this.cfCustom.backgroundColor,
        title: this.cfCustom.title,
        tooltip: {},
        xAxis: {
          data: this.cfCustom.xData.data
        },
        yAxis: {

        },
        series: [{
          name: this.cfCustom.serveData.name,
          barWidth:this.cfCustom.serveData.barWidth,
          showBackground:this.cfCustom.serveData.showBackground,
          type: this.cfCustom.serveData.type,
          data: this.cfCustom.serveData.data,
        }]
      });
      this.$emit('onChangeData',{
        el:this.myChartBar,
      })
    }
  },
  mounted() {
    this.drawBar()
  }
}
</script>

<style scoped>
.aa{
  background: transparent;
}

</style>
