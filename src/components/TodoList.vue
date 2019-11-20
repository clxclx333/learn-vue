<template>
  <div class="todo-list">
    <input v-model="childInfo" @keyup.enter="pushStore"> </input>
    <div>
      <ul>
        <li v-for="(item,index) in infoSource" :key="index" @click="changeToOpposite(item)">
          <span v-if="item.done">{{ item.todo }}</span>
          <del v-else class="no-finish">{{ item.todo }}</del>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoList',
    props: { // 子组件只有通过props数组把父组件传进来的dataSource属性定义一下，才可以在子组件中使用，数据来自父组件，只可读
      dataSource: Array,
      infoSource: Array,
    },
    data() {
      return {
        url: 'https://api.myjson.com/bins/hxx9m',
        info: [
          {
            todo: '去散步',
            done: true,
          },
        ],
        childInfo: '',
      };
    },
    methods: {
      changeToOpposite(item) {
        this.$emit('changeToOpposite', item);
      },
      async pushStore() {
        await this.$store.dispatch('pushList', this.childInfo);
      }
    }
  };
</script>

<style scoped lang="less">
  .noFinish {
    color: aquamarine;
  }
</style>
