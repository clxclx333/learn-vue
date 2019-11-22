<template>
  <div>
    <h1>第一页</h1>
    <el-card class="box-card">
      <h3>v-html</h3>
      <p v-html="msg2">{{ msg2 }}</p>
    </el-card>
    <el-card class="box-card">
      <h3>插值表达式标签内的值不会被替换</h3>
      <p>{{ msg }}不会被替换</p>
    </el-card>
    <el-card class="box-card">
      <h3>v-text标签内的值会被替换</h3>
      <p v-text="msg">此处会被替换</p>
    </el-card>
    <el-card class="box-card">
      <h3 v-if="vueif1">v-if语句为true显示</h3>
      <h3 v-if="vueif2">v-if语句为false不显示</h3>
    </el-card>
    <el-card class="box-card">
      <h3>v-show语句</h3>
      <p v-show="show1">显示</p>
      <p v-show="show2">不显示</p>
    </el-card>

    <el-card class="box-card">
      <h3>v-for</h3>
      <ul>
        <li v-for="site in sites" :key="site.name"> //只写site会报错，key不能绑对象

          <input type="checkbox">
          {{ site.name }}
        </li>
      </ul>
    </el-card>


    <!--<button v-bind:title='mytitle'>按钮1</button> v-bind简写为:  -->
    <el-card class="box-card">
      <h3>v-bind语句绑定数据</h3>
      <button :title='mytitle'>按钮1</button>
      <br>
      <div>
        <a :href="url" target="_blank">百度一下</a>
      </div>
      <div v-bind:class="{ active: isActive }"></div>
    </el-card>
    <!--<input type="button" value="按钮">-->

    <!--<button v-on:click="show">按钮2</button>    v-on简写为@   -->
    <el-card class="box-card">
      <h3>v-on语句绑定事件</h3>
      <input v-model="inputStr" />
      <button  @click="show">搜索</button>
    </el-card>

    <el-card class="box-card">
      <h3>v-model双向绑定</h3>
      <p>input 元素：</p>
      <input v-model="message1">
      <p>消息是: {{ message1 }}</p>

      <p>textarea 元素：</p>
      <p style="white-space: pre">{{ message2 }}</p>
      <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
    </el-card>
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
        message2: '',
        url: '//www.baidu.com',
        inputStr: '',
      sites: [
        {name: 's'},
        {name: 'm'},
        {name: 'l'}
      ]
      };
    },
    methods: {
      show() {
        window.location.href = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=monline_4_dg&wd=' + this.inputStr;
      }
    }
  };
</script>

<style scoped>
  .box-card {
    width: 800px;
    margin: 20px auto;
    text-align: center;
  }
</style>
