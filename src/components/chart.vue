<template>
  <div>
    <div
      id="myChart"
      style="width:300px; height:300px; margin:auto;"
    ></div>
  </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  data() {
    return {
      res: {}
    };
  },
  created() {
    this.$store.commit("result");
    [this.res.red, this.res.blue, this.res.yellow, this.res.green] = [
      this.$store.state.res.red,
      this.$store.state.res.blue,
      this.$store.state.res.yellow,
      this.$store.state.res.green
    ];
    console.log(this.$store.state.res);
    console.log(this.res);
  },
  mounted() {
    this.drowchart();
  },
  methods: {
    drowchart() {
      let myChart = echarts.init(document.getElementById("myChart"));
      var option = {
        title: {
          text: "你的性格色彩"
        },
        tooltip: {},
        legend: {
          data: ["测试"]
        },
        xAxis: {
          data: ["红色", "蓝色", "黄色", "绿色"]
        },
        yAxis: {},
        series: [
          {
            name: "测试",
            type: "bar",
            data: [
              this.res.red,
              this.res.blue,
              this.res.yellow,
              this.res.green
            ],
            itemStyle: {
              normal: {
                color(params){
                  let colorList =["#f00", "#1C86EE", "#EEEE00", "#00EE00"];
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      console.log(1);
    }
  }
};
</script>