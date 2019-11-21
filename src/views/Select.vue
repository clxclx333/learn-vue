<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="第一页" name="first">
        <FirstPage></FirstPage>
      </el-tab-pane>
      <el-tab-pane label="第二页" name="second">
        <Todo></Todo>
      </el-tab-pane>
      <el-tab-pane label="第三页" name="third">
        <LastPage></LastPage>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Todo from './Todo.vue';
  import FirstPage from '../components/FirstPage';
  import LastPage from '../components/LastPage.vue';

  export default {
    name: 'Select',
    components: { LastPage, FirstPage, Todo },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>

</style>
