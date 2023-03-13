<template>
  <div>
    <div class="article">
      <img src="../assets/photo/北镇闾山.jpg" />
      <div class="content">
        <h1 class="biaoti">标题</h1>
        <h2 class="jianjie">
          简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
        </h2>
      </div>
    </div>
    <div class="text">
      <div class="one"></div>
      <div class="two">
        欢迎来到锦州北镇医巫闾山！
        我们的医巫闾山位于辽宁省锦州市北镇市，是一座历史悠久、文化灿烂的山岳名胜。医巫闾山海拔高度约为500米，山势险峻，自然风光秀美，是一处天然氧吧，是锦州市周边游客们不可错过的旅游胜地。
        医巫闾山历史文化源远流长，早在唐代就被列为“辽东四大名山”之一。山上有传说中的巫峡、鬼洞、仙人洞等地方，是古代巫术和道家文化的重要遗址。此外，医巫闾山还是辽宁省重点文物保护单位之一，有许多古代建筑和文物，包括清朝古建筑、碑刻、石刻等。
        医巫闾山不仅自然风光优美，文化底蕴深厚，还拥有得天独厚的疗养资源。山上空气清新，环境优美，有多种草药和野生植物，是疗养和养生的好地方。
        在医巫闾山，您可以漫步于山林之中，呼吸着新鲜的空气，欣赏大自然的美景；您也可以游览古代遗址，了解中国古代文化的博大精深；您还可以在山上静坐冥想，修身养性，放松身心。
        我们的官网提供了医巫闾山的详细介绍，包括山上景点、历史文化、疗养资源等。
        欢迎来到医巫闾山，感受大自然的魅力，领略古代文化的博大精深，享受疗养养生的美好时光！
      </div>
      <div class="three">
        <div class="center">
          <p>发布日期：2023年3月10日</p>
          <p>更新日期：2023年3月12日</p>
          <p>浏览量</p>
          <p>相关推荐</p>
        </div>
        <div class="tuijian"><ArticleDetails height="150px"></ArticleDetails></div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleDetails from "@/components/ArticleDetails";

export default {
  name: "ArticleView",
  created() {},
  ArticleDetails,
  data() {
    return {};
  },
  props: {},
  methods: {},
  components: { ArticleDetails },
};
</script>

<style scoped>
.tuijian {
  width: 120%;
  margin-left: 3%;
}
.center {
  margin: left;
  width: 158px;
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
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.134), rgba(0, 0, 0, 0.5));
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
}
.one {
  flex-grow: 1;
}
.article {
  width: 100%;
  margin-top: 20px;
  position: relative;
}
img {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.text {
  display: flex;
  margin-top: 45px;
  margin-bottom: 45px;
  min-height: 45vh;
}
</style>
