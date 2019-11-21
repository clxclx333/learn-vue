<template>
  <div class="hello">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      const checkusername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          } else {
            callback();
          }
        }, 1000);
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          pass: ''
        },
        rules: {
          username: [
            {
              validator: checkusername,
              trigger: 'blur'
            }
          ],
          pass: [
            {
              validator: validatePass,
              trigger: 'blur'
            }
          ]
        }
      };
    },
    methods: {
      async submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '登录成功',
              type: 'success',
            });
            this.$router.push('/select');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // {
      // await this.$store.dispatch(login, {
      //   loginState: true,
      // });
      // this.$message({
      //   message: '欢迎您 ' + this.ruleForm.username,
      //   type: 'success',
      // });
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
