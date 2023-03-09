<template>
  <div class="home">
    <CarouselPanel height="400px" />
    <div class="flex">
      <div class="first">
        <div class="articlelist">
          <aside>
            <div>
              <h1>文章列表</h1>
              <h2>Article <span class="pink">List</span></h2>
            </div>
            <br />
          </aside>
        </div>
      </div>
      <div class="secord">
        <li class="height" v-for="item in items" :key="item">
          <ArticleNote></ArticleNote>
        </li>
      </div>
      <div class="thired">
        <div class="weather">
          <iframe
            scrolling="no"
            src="https://tianqiapi.com/api.php?style=ts&skin=pitaya&city=锦州"
            frameborder="0"
            width="325"
            height="220"
            allowtransparency="true"
          ></iframe>
        </div>
        <div class="baidumap">
          <a
            href="https://map.baidu.com/search/%E9%97%BE%E5%B1%B1%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD/@13549948.242990151,5073926.956083899,16z?querytype=s&da_src=shareurl&wd=%E9%97%BE%E5%B1%B1%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD&c=131&src=0&wd2=%E9%94%A6%E5%B7%9E%E5%B8%82%E5%8C%97%E9%95%87%E5%B8%82&pn=0&sug=1&l=17&b=(12956929.435465649,4825216.927204367;12960767.435465649,4827202.927204367)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/photo/北镇闾山.jpg" class="image" />
              <p>想来吗?立即前往></p>
            </el-card>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CarouselPanel from "@/components/CarouselPanel";
import ArticleNote from "@/components/ArticleNote";

export default {
  data() {
    return {
      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
  name: "HomeView",
  components: {
    CarouselPanel,
    ArticleNote,
  },
};
</script>
<style scoped>
.weather {
  width: 300px;
  height: 220px;
}

.baidumap {
  width: 300px;
  height: 140px;
  margin: auto;
  margin-top: 20px;
  margin-left: 20px;
}
.button:hover {
  background-color: var(--main-bg-color);
}
.button:active {
  background-color: var(--main-bg-color);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.image {
  width: 300px;
  height: 140px;
  overflow: hidden;
}

.thired {
  flex-grow: 1;
  display: flex;
  max-width: 350px;
  flex-direction: column;
}
.secord {
  flex-grow: 8;
  padding-left: 3%;
  padding-right: 3%;
}
.first {
  flex-grow: 1;
}
.flex {
  width: 97%;
  min-height: 60vh;
  margin: auto;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.pink {
  color: deeppink;
  font-weight: bold;
}
.articlelist {
  margin-left: 20px;
  margin-top: 20px;
  text-align: left;
  min-width: 150px;
}
.height {
  margin-top: 15px;
  margin-bottom: 0;
  list-style: none;
}
aside {
  width: 100%;
  display: inline-block;
}

aside div {
  width: 100%;
  height: 75px;
  margin: auto;
  margin-left: 15%;
  padding: 0.4px;
  border-radius: 5px;
  border-left: 5px solid rgb(16, 16, 16);
  line-height: 10px;
  padding-left: 5px;
}
</style>
