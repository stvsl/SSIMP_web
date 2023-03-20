<template>
  <div class="articledetails">
    <el-carousel :interval="5000" height="150px" arrow="always">
      <el-carousel-item v-for="item in items" :key="item">
        <div class="panel">
          <img :src="item.coverimg" alt="图片加载失败" />
          <div class="content">
            <h1 class="title">{{ item.title }}</h1>
            <h3 class="summary">{{ item.introduction }}</h3>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ArticleDetails",
  created() {},
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },
  methods: {},
  setup(props) {
    const items = ref("[]");
    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");

    var raw = JSON.stringify({
      name: props.title,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
      body: raw,
    };

    fetch("http://127.0.0.1:6521/api/article/recommendlist", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        items.value = JSON.parse(result);
        var x = items.value.data;
        items.value = JSON.parse(x);
      })
      .catch((error) => console.log("error", error));
    return {
      items,
    };
  },
};
</script>

<style scoped>
.el-carousel__item {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.134), rgba(0, 0, 0, 0.5));
}
.el-carousel__item .panel img {
  /* 缩放图片 */
  background-size: contain;
  /* 背景图片大小 */
  background-position: center center;
  /* 背景图片位置 */
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.panel {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.el-carousel__item h3 {
  opacity: 0.75;
  margin: 0;
  margin-left: 25px;
}

.summary {
  position: relative;
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--main-text-color-white);
  margin: 0;
  margin-top: 10px;
  text-align: left;
  margin-left: 30px;
  text-shadow: var(--main-text-shadow);
  top: 38%;
}
.title {
  position: relative;
  font-size: 1.2rem;
  font-weight: 250;
  color: var(--main-text-color-white);
  margin: 0;
  text-align: left;
  margin-left: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.437);
  letter-spacing: 2px;
  font-family: logoFont;
  line-height: 20px;
  top: 37%;
}
.content {
  position: absolute;
  top: 70%;
  left: 50%;
  height: 60%;
  transform: translate(-50%, -50%);
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.779));
}
.articledetails {
  margin: left;
  margin-left: 22px;
  width: 70%;
  height: 150px;
}
</style>
