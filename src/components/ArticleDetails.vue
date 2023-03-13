<template>
  <div class="articledetails">
    <el-carousel :interval="5000" height="150px" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item"> </el-carousel-item>
      <div class="panel">
        <img src="@/assets/photo/北镇闾山.jpg" alt="图片加载失败" />
        <div class="content">
          <h1 class="title">标题</h1>
          <h3 class="summary">简介简介简介简介简介简介</h3>
        </div>
      </div>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "ArticleDetails",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.el-carousel__item {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.134), rgba(0, 0, 0, 0.5)),
    url("@/assets/photo/北镇闾山.jpg") no-repeat center center;
}
.el-carousel__item .panel img {
  /* 缩放图片 */
  background-size: contain;
  /* 背景图片大小 */
  background-position: center center;
  /* 背景图片位置 */
  background-repeat: no-repeat;
  max-width: 250px;
  max-height: 150px;
  overflow: hidden;
}
.panel {
  width: 250px;
  height: 140px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.el-carousel__item h3 {
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.summary {
  position: relative;
  font-size: 1rem;
  font-weight: 400;
  color: var(--main-text-color-white);
  margin: 0;
  margin-top: 10px;
  text-align: left;
  margin-left: 25px;
  text-shadow: var(--main-text-shadow);
}
.title {
  position: relative;
  font-size: 2rem;
  font-weight: 500;
  color: var(--main-text-color-white);
  margin: 0;
  text-align: left;
  margin-left: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  font-family: logoFont;
  line-height: 20px;
}
.content {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.articledetails {
  margin: left;
  margin-left: 22px;
  width: 60%;
  height: 150px;
}
</style>
