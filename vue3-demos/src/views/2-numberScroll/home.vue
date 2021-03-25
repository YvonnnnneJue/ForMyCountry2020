<template>
  <div>
    <!-- <h1>{{ name }}</h1> -->
    <ul class="ig-box box">
      <li
        v-for="(val, i) in value.toString().split('')"
        :key="i"
        :style="{ top: '-' + val * 63 + 'px' }"
      >
        <span v-for="(num, i) in numbers.toString().split('')" :key="i">
          {{ num }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
const name = "2_数字滚动";
export default {
  components: {},
  data() {
    return {
      // name: "2_数字滚动",
      // value值 可传入前为0的字符串
      // value: '0549621',
      // 0-9数字
      value: "556448",
      numbers: "0123456789",
    };
  },

  created() {
    this.$emit("title", name);
  },
  mounted() {
    // test interval
    let n = Number(this.value);
    let timer = setInterval(() => {
      n += 78875;
      this.value = "0" + n;
    }, 3000);
    console.log(timer);
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.ig-box {
  background: #000;
  margin: 100px;
  display: inline-block;

  font-family: bahnschrift;
  font-size: 38px;
  color: #fff;
  box-sizing: border-box;
  height: 63px;
  overflow: hidden;

  > li {
    position: relative;
    height: 100%;
    display: inline-block;
    color: #fff;
    width: 40px;
    transition: all 1s;

    > span {
      background: url(./images/bg.png);
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
}
</style>
