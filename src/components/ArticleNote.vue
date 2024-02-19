<template>
  <div class="article">
    <router-link :to="'/article?aid=' + aid">
      <el-container
        ><el-aside
          ><div class="img-container"><img :src="coverimg" /></div></el-aside
        ><el-main
          ><h2 class="title">{{ title }}</h2>
          <h3 class="text">
            {{ introduction }}
          </h3>
          <h5 class="look">
            浏览量:{{ look }} <span>发布时间:{{ time }}</span>
          </h5>
        </el-main></el-container
      >
    </router-link>
  </div>
</template>
<script>
export default {
  name: "ArticalNote",
  created() {},

  data() {
    return {};
  },

  props: {
    title: {
      type: String,
      default: "标题",
    },
    introduction: {
      type: String,
      default: "简介",
    },
    look: {
      type: Number,
      default: 0,
    },
    time: {
      type: String,
      default: "2021年1月1日",
    },
    coverimg: {
      type: String,
      default: "../assets/photo/1.png",
    },
    aid: {
      type: Number,
      default: 1000000001,
    },
  },

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
  margin-top: 5px;
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
  color: var(--main-text-color-shade);
  margin: 0;
  text-align: right;
  margin-right: 20px;
  font-family: SimSun;
}

.el-aside {
  width: 210px;
  height: 150px;
}

.text {
  width: 90%;
  height: 55%;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: SimSun;
  color: var(--main-text-color-shade);
  text-align: left;
  text-overflow: ellipsis;
  /* 允许多行,但都不可以超出宽度和高度 */
  overflow: hidden;
  /* 超出宽度和高度的部分隐藏 */
  display: -webkit-box;
  /* 通过伪元素显示省略号 */
  -webkit-line-clamp: 3;
  /* 限制在一个块元素显示的文本的行数 */
  -webkit-box-orient: vertical;
  line-height: 1.5em;
  /* 首行缩进 */
  text-indent: 2em;
}

.img-container {
  width: 190px;
  height: 100%;
  overflow: hidden;
  position: relative;
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
  margin: auto;
}

.el-container {
  width: 100%;
  min-width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: var(--main-box-shadow);
}

.article {
  width: 100%;
  margin: auto;
  height: 150px;
}
</style>
