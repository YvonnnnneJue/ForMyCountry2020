<template>
  <!-- <h1>HELLO XCT!!!!</h1> -->
  <h1>{{msg}}</h1>
  <input type="text" v-model="msg"/>
  <a href='myprotocol://http://192.168.10.85:8080/cs/restfull/operationRestfullApi/excuteSqlByCode?authorJson={“loginAccount”:“admin”}&parmJson={"code":"HuoQuTongDaoGISLieBiao","params":{}}'>Lorem </a> 
  <ul class="todo-main">
    <li class="input">
      <div>
        <el-input v-model="todo.date" placeholder="请输入日期"></el-input>
      </div>
      <div>
        <el-input v-model="todo.time" placeholder="请输入哪一顿"></el-input>
      </div>
      <div>
        <el-input v-model="todo.eat" placeholder="请输入食物"></el-input>
      </div>
      <div>
        <el-button  @click="add()" size="mini" type="danger" icon="el-icon-plus" circle />
      </div>
    </li>
    <li v-for="(item, i) in todoList" :key="i">
      <div>{{item.date}}</div>
      <div>{{item.time}}</div>
      <div>{{item.eat}}</div>
      <div>
        <el-button @click="del(i)" size="mini" type="danger" icon="el-icon-delete" circle />
      </div>
    </li>
  </ul>
 
</template>

<script lang="ts">
// <script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: "1_hello xct",
  data() {
    return {
      msg: 'use ts',
      todo: {'date':null,'time':null,'eat':null},
      todoList: [
        {'date':'2021-3-21','time': '晚餐','eat':'沙县'},
        {'date':'2021-3-22','time': '午餐','eat':'黄焖鸡'},
      ]
    };
  },
 
  components: {},
  computed: {},
  created() {},
  methods: {
    add() {
      // this.todoList.push(this.todo);
      // this.todo 直接push进去的话，只是push了对象的指针
      this.todoList.push({...this.todo});
    },
    del(i) {
      this.todoList.splice(i,1);
    }
  }
})
</script>
<style lang='scss' scoped>
.todo-main {
  width: 400px;
  margin: auto;
  > li {
    display: flex;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    > div {
      display: inline-block;
    }
    &:nth-child(odd) {
      background: red;
    }
    &:nth-child(even) {
      background: pink;
    }
  }
}
</style>
