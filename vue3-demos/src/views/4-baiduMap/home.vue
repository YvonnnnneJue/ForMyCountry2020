<template>
  <el-button @click="toggle()">
     toggle
  </el-button>
 
  <div id="container"> </div>
</template>

<script>
 
export default {
  data() {
    return {
      normalType: true,
      map: null,
      name: "1_hello xct",
    };
  },
 
  computed: {},
  created() {
  },
 

  mounted() {
     
    // 创建地图实例 
    let map = this.map = new BMapGL.Map("container");
    // 创建点坐标 
    var point = new BMapGL.Point(116.404, 39.915);
    // 初始化地图，设置中心点坐标和地图级别 
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true)
    var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
    map.addControl(scaleCtrl);
  },
  methods: {
    toggle() {
      let map = this.map;
      this.normalType = !this.normalType;
      this.normalType ? map.setMapType(BMAP_NORMAL_MAP):map.setMapType(BMAP_EARTH_MAP);
    }
  }
};
</script>
<style scoped lang="scss">
#container {
  width: 100%;
  height: 100%;
}
</style>
