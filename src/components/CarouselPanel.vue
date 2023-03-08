<template>
  <div class="carouselpanel">
    <el-carousel :interval="5000" :height="height" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item"> </el-carousel-item>
      <div class="panel">
        <img src="@/assets/photo/1.png" alt="图片加载失败" />
        <div class="content">
          <h1 class="title">标题</h1>
          <h3 class="summary">
            简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
          </h3>
          <div class="right">
            <h5 class="data">2023年1月25日</h5>
            <h5 class="look">浏览量</h5>
          </div>
        </div>
      </div>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselPanel",
  created() {},
  data() {
    return {};
  },
  props: {
    height: {
      type: String,
      default: "500px",
    },
  },
  methods: {},
};
</script>

<style scoped>
.right {
  position: relative;
  text-align: right;
  margin-right: 20px;
  margin-top: 80px;
}
.look {
  position: relative;
  color: var(--main-text-color-white);
  margin: 0;
  text-align: right;
  margin-right: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: SimSun;
  display: inline-block;
}
.data {
  position: relative;
  color: var(--main-text-color-white);
  margin: 0;
  text-align: right;
  margin-right: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: SimSun;
  display: inline-block;
}
.summary {
  position: relative;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--main-text-color-white);
  margin: 0;
  text-align: left;
  margin-left: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: SimSun;
}
.content {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 100%;
}
.title {
  position: relative;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--main-text-color-white);
  margin: 0;
  text-align: left;
  margin-left: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  font-family: logoFont;
}
.carouselpanel {
  width: 100%;
  background-color: var(--main-bg-color);
  overflow: hidden;
}
.el-carousel__item h3 {
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.el-carousel__item {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.134), rgba(0, 0, 0, 0.5)),
    url("@/assets/photo/1.png") no-repeat center center;
}
.panel {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.el-carousel__item .panel img {
  /* 缩放图片 */
  background-size: contain;
  /* 背景图片大小 */
  background-position: center center;
  /* 背景图片位置 */
  background-repeat: no-repeat;
  max-width: 100%;
  max-height: 100%;
}
</style>
