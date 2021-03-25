<template>
  <div>
    <ul>
      <li v-for="item in demoNames" :key="item.NO" @click="go(item)">
        {{ `${item.NO}-${item.EN}` }} （{{ item.CN }}）
      </li>
      <!-- <li @click="go('1')">1-hello world</li>
      <li @click="go('2')">2-数字滚动</li> -->
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",

  components: {},
  computed: {
    ...mapGetters(["demoNames"]),
  },
  methods: {
    go(item) {
      let value = `${item.NO}-${item.EN}`;
      console.log(value);
      this.$router.push({ name: value });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
ul {
  li {
    width: 200px;
    height: 200px;
    margin: 10px;
    background: #fff;
    float: left;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      transform: translate(2px, 2px);
      box-shadow: 0 0 16px #e5e9ef;
      background: #ecf5ff;
    }
  }
}
</style>
