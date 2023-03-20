<template>
  <div class="carouselpanel">
    <el-carousel :interval="5000" :height="height" arrow="always">
      <el-carousel-item v-for="item in items" :key="item">
        <div class="panel">
          <img :src="item.coverimg" alt="图片加载失败" />
          <div class="content">
            <h1 class="title">{{ item.title }}</h1>
            <h3 class="summary">
              {{ item.introduction }}
            </h3>
            <div class="right">
              <h5 class="data">
                {{ item.updatetime }}
              </h5>
              <h5 class="look">浏览量:{{ item.pageviews }}</h5>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

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
  setup() {
    const items = ref("[]");
    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:6521/api/article/carousel", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        items.value = JSON.parse(result);
        var x = items.value.data;
        items.value = JSON.parse(x);
        var array = items.value;
        for (var i = 0; i < array.length; i++) {
          array[i].updatetime =
            array[i].updatetime.substring(0, 4) +
            "年" +
            array[i].updatetime.substring(5, 7) +
            "月" +
            array[i].updatetime.substring(8, 10) +
            "日";
        }
        items.value = array;
      })
      .catch((error) => console.log("error", error));
    return {
      items,
    };
  },
};
</script>

<style scoped>
.right {
  position: relative;
  text-align: right;
  margin-right: 20px;
  margin-top: 120px;
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
  top: 75px;
  left: 25px;
  color: var(--main-text-color-white);
  margin: 0;
  margin-top: 10px;
  text-align: left;
  margin-left: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.content {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--main-bg-color);
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.779));
}
.title {
  position: relative;
  top: 80px;
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
img {
  width: 100%;
  /* 将图片的宽度设置为容器的宽度 */
  height: 100%;
  /* 将图片的高度设置为容器的高度 */
  object-fit: cover;
  /* 将图片等比例缩放，占满整个容器 */
  object-position: center;
  margin: auto;
}
</style>
