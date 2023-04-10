<template>
  <div>
    <div class="article">
      <img class="topimg" :src="article.contentimg" />
      <div class="content">
        <h1 class="biaoti">{{ article.title }}</h1>
        <h2 class="jianjie">
          {{ article.introduction }}
        </h2>
      </div>
    </div>
    <div class="text">
      <div class="one"></div>
      <div class="two artcont" v-html="text"></div>
      <div class="three">
        <div class="center">
          <p>发布日期：{{ article.writetime }}</p>
          <p>更新日期：{{ article.updatetime }}</p>
          <p>浏览量:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ article.pageviews }}</p>
          <p>相关推荐</p>
        </div>
        <div class="tuijian">
          <ArticleDetails height="150px" :title="article.title"> </ArticleDetails>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleDetails from "@/components/ArticleDetails";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  name: "ArticleView",
  created() { },
  ArticleDetails,
  data() {
    return {};
  },
  props: {},
  methods: {},
  components: { ArticleDetails },
  setup() {
    const text = ref("");
    const article = ref({});
    const route = useRoute();
    console.log(route.query.aid);
    var number = route.query.aid;
    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      aid: number,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:6521/api/article/detail", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        article.value = JSON.parse(JSON.parse(result).data);
        text.value = article.value.text;
        article.value.updatetime =
          article.value.updatetime.substring(0, 4) +
          "年" +
          article.value.updatetime.substring(5, 7) +
          "月" +
          article.value.updatetime.substring(8, 10) +
          "日";
        article.value.writetime =
          article.value.writetime.substring(0, 4) +
          "年" +
          article.value.writetime.substring(5, 7) +
          "月" +
          article.value.writetime.substring(8, 10) +
          "日";
      })
      .catch((error) => console.log("error", error));
    return {
      article,
      text,
    };
  },
};
</script>

<style scoped>
.tuijian {
  width: 90%;
  margin-left: 3%;
}

.center {
  margin: left;
  width: 162px;
  font-weight: 100;
  font-size: 13px;
  margin-left: 38px;
}

.content {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--main-bg-color);
  width: 100%;
  height: 200px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}

.artcont {
  font-size: 1.2rem;
  color: var(--main-text-color);
  text-align: left;
  justify-content: left;
  align-items: left;
  margin-left: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: SimSun;
  max-width: 70%;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  margin: auto;
}

.jianjie {
  position: relative;
  font-size: 1.2rem;
  color: var(--main-text-color-white);
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: SimSun;
  max-width: 70%;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  margin: auto;
}

.biaoti {
  text-align: center;
  width: 100%;
  text-shadow: var(--main-text-shadow);
  font-size: 4em;
  color: var(--main-text-color-white);
  font-weight: 400;
  font-family: logofont;
  position: relative;
  height: 35px;
}

.three {
  flex-grow: 1;
  text-align: left;
  margin-left: 15px;
}

.two {
  flex-grow: 5;
  max-width: 66%;
  letter-spacing: 1px;
  line-height: 25px;
  text-align: left;
  font-weight: 800px;
  overflow: hidden;
}

.one {
  flex-grow: 1;
}

.article {
  width: 100%;
  position: relative;
}

.topimg {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.text {
  display: flex;
  margin-top: 45px;
  margin-bottom: 45px;
  min-height: 45vh;
}
</style>

<style>
.two img {
  width: 80% !important;
  height: 100%;
  margin-left: 10%;
  object-fit: cover;
}
</style>