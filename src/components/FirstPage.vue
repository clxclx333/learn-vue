<template>
  <div>
    <h1>第一页</h1>
    <h3>v-html</h3>
    <p v-html="msg2">{{ msg2 }}</p>
    <h3>插值表达式标签内的值不会被替换</h3>
    <p>{{ msg }}不会被替换</p>
    <h3>v-text标签内的值会被替换</h3>
    <p v-text="msg">此处会被替换</p>

    <h3 v-if="vueif2">v-if语句</h3>
    <template v-if="vueif1">
    </template>

    <h3>v-show语句</h3>
    <p v-show="show1">显示</p>
    <p v-show="show2">不显示</p>

    <h3>v-for</h3>
    <ul>
      <li v-for="site in sites" :key="site">
        <input type="checkbox">
        {{ site.name }}
      </li>
    </ul>


    <!--<button v-bind:title='mytitle'>按钮1</button> v-bind简写为:  -->
    <h3>v-bind语句绑定数据</h3>
    <button :title='mytitle'>按钮1</button>
    <br>
    <div v-bind:class="{ active: isActive }"></div>
    <!--<input type="button" value="按钮">-->

    <!--<button v-on:click="show">按钮2</button>    v-on简写为@   -->
    <h3>v-on语句绑定事件</h3>
    <button @click="show">按钮2</button>

    <h3>v-model双向绑定</h3>
    <p>input 元素：</p>
    <input v-model="message1">
    <p>消息是: {{ message1 }}</p>

    <p>textarea 元素：</p>
    <p style="white-space: pre">{{ message2 }}</p>
    <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'FirstPage',
    data() {
      return {
        msg: 'hello vue!',
        msg2: '<h3>第一页</h3>',
        vueif1: true,
        vueif2: false,
        show1: true,
        show2: false,
        mytitle: '这是:语句',
        isActive: true,
        message1: 'abcdef',
        message2: '123213',
      sites: [
        {name: 's'},
        {name: 'm'},
        {name: 'l'}
      ]
      };
    },
    methods: {
      show() {
        alert('hello');
      }
    }
  };
</script>

<style scoped>

</style>
