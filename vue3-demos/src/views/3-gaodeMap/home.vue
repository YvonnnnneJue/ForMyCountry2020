<template>
<div class="container">
  <div class="tool-box-1">
    <el-slider height="100px" vertical @change="setPitch()" :debounce="1000" v-model="pitch" />
  </div>
  <div id="G_container"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      pitch: 10,
      name: "1_hello xct",
    };
  },
  components: {},
  computed: {},
  created() {},
  mounted() {
    this.map = new AMap.Map('G_container', {
      resizeEnable: true, //是否监控地图容器尺寸变化
      zoom:11, //初始化地图层级
      center: [116.397428, 39.90923], //初始化地图中心点

      viewMode:'3D',//开启3D视图,默认为关闭
    });
    window.gaga = this.map;
  },
  methods: {
    setPitch() {
      let p = this.pitch;
      console.log(p)
      this.map.setPitch(p)
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .tool-box-1 {
    z-index: 9;
    width: 400px;
    background: #fff;
    position: absolute;
  }
  #G_container {
    width: 100%;
    height: 100%;
  }
}
</style>  