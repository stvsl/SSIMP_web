<template>
  <div class="article">
    <el-container
      ><el-aside
        ><div class="img-container"><img src="../assets/photo/1.png" /></div></el-aside
      ><el-main
        ><h2 class="title">标题</h2>
        <h3 class="text">简介简介简介简介简介简介简介简介简介简介简介简介简介简介</h3>
        <h5 class="look">浏览量 <span>发布时间</span></h5>
      </el-main></el-container
    >
  </div>
</template>
<script>
export default {
  name: "ArticalNote",
  created() {},

  data() {
    return {};
  },

  props: {},

  methods: {},
};
</script>
<style scoped>
.left {
  text-align: left;
  margin-top: 0%;
  vertical-align: top;
}

.el-main {
  padding: 0;
  padding-left: 10px;
}

.title {
  color: var(--main-text-color);
  text-align: left;
  height: 20%;
  margin: 0;
  margin-bottom: 10px;
}

.look {
  position: relative;
  color: var(--main-text-color);
  margin: 0;
  text-align: right;
  margin-right: 0px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: SimSun;
}

.el-aside {
  width: 150px;
  height: 150px;
}

.text {
  height: 55%;
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-family: SimSun;
  color: var(--main-text-color);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: left;
  text-overflow: ellipsis;
}

.img-container {
  width: 140px;
  height: 140px;
  overflow: hidden;
  /* 隐藏超出容器范围的部分 */
  position: relative;
  /* 让子元素的定位相对于容器 */
}

.img-container img {
  width: 100%;
  /* 将图片的宽度设置为容器的宽度 */
  height: 100%;
  /* 将图片的高度设置为容器的高度 */
  object-fit: cover;
  /* 将图片等比例缩放，占满整个容器 */
  object-position: center;
  border-radius: 10px;
}

.el-container {
  width: 100%;
  min-width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: var(--main-box-shadow);
  padding: 5px;
}

.article {
  width: 85%;
  margin: auto;
  height: 150px;
}
</style>
