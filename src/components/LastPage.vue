<template>
  <div>
    <el-carousel :interval="1500" arrow="always" width="200px">
      <el-carousel-item v-for="item in image" :key="item">
        <img :src="item" alt="" width="400">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'LastPage',
    data() {
      return {
        image: [
          'http://b.zol-img.com.cn/soft/6/794/ceVGHSUcsAc1o.jpg',
          'http://img.boqiicdn.com/Data/Bbs/Users/167/16783/1678307/img28831394607483.jpg',
          'http://img000.hc360.cn/y2/M07/97/94/wKhQdFR4YiSEZ5PbAAAAAN4VAoc594.jpg',
          'http://hbimg.huabanimg.com/f8712f95b524e53a1954183cdc75e6b86267da7a95ea-eXQKJO_fw658',
          'https://img.3dmgame.com/uploads/images2/news/20191016/1571200504_993288.jpg',
          'http://pic.macdown.com/pic/201910/19155717_457afbf1e6.jpeg',
        ],
      };
    }
  };
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
