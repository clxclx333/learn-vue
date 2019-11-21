<template>
  <div class="todo-list">
    <h1>第二页</h1>
    <h3>ToDo List</h3>
    <TodoLists :dataSource="list" :infoSource="newDataList" @changeToOpposite="changeToOpposite" ></TodoLists>
  </div>
  <!--  <div>-->
  <!--    <h3>Add List</h3>-->
  <!--    <TodoLists :infoSource="newDataList" @getNewDataList="context"></TodoLists>-->
  <!--  </div>-->
</template>

<script>
  import TodoLists from '@/components/TodoList.vue';

  export default {
    name: 'Todo',
    components: {
      TodoLists,
    },
    data() {
      return {
        url: 'https://api.myjson.com/bins/hxx9m',
        list: [],
        newDataList: []
      };
    },
    async created() { // dispatch异步提交数据到 actions,然后actions commit给mutations去完成整体的数据变化
      this.fetch();
      await this.$store.dispatch('querydatalist', {
        url: this.url
      });
      this.newDataList = this.$store.state.list;
    },
    methods: {
      async fetch() {
        const { data } = await this.$http.get(this.url);
        this.list = data.data;
      },
      changeToOpposite(item) {
        // eslint-disable-next-line no-param-reassign
        item.done = !item.done;
        console.log('成功调用了父组件的方法');
      }
    },

  };
</script>

<!--scope作用域-->
<style scoped lang="less">

</style>
