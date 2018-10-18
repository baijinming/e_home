<template>
  <div>
    <Header></Header>
    <div id="container"></div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    components: {
      Header
    },
    methods: {
      initMap() {
        let map = new BMap.Map("container");
        let point = new BMap.Point(116.404, 39.915);
        let point2 = new BMap.Point(114.01, 32.58);
        map.centerAndZoom(point2, 5);

        map.addControl(new BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_LEFT}));

        //创建标注
        let marker = new BMap.Marker(point);
        let marker2 = new BMap.Marker(point2);
        map.addOverlay(marker);
        map.addOverlay(marker2);

        //创建文本标注
        let opts = {
          position : point,    // 指定文本标注所在的地理位置
          offset   : new BMap.Size(10, -40)    //设置文本偏移量
        };
        let opts2 = {position : point2, offset : new BMap.Size(10, -40)};
        let opts3 = {position : point2, offset : new BMap.Size(10, -62)};
        let label = new BMap.Label("信息工程学院学生流动党支部 支部书记：高洋 电话：13526395586", opts);
        let labe2 = new BMap.Label("信息工程学院党总支 总支书记：柳晓阳 电话：0396-2853187", opts2);
        let labe3 = new BMap.Label("信息工程学院学生党支部 支部书记：杨鑫 电话：0396-285032", opts3);
        label.setStyle({
          color : "#000",
          fontSize : "12px",
          height : "20px",
          lineHeight : "20px",
          fontFamily:"微软雅黑"
        });
        map.addOverlay(label);
        map.addOverlay(labe2);
        map.addOverlay(labe3);
      },
    },
    mounted() {
      this.initMap()
    }
  }
</script>

<style scoped>
  #container {
    width: 7.5rem;
    position: absolute;
    top: 44px;
    bottom: 0;
  }
</style>
