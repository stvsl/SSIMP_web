<template>
  <nav>
    <TitleBar />
    <div class="nullpanel"></div>
  </nav>
  <router-view />
  <div v-if="goTop" class="backtop" @click="backTop">
    <font-awesome-icon icon="fa-solid fa-arrow-up" />
  </div>
  <!-- 页脚 -->
  <footer>
    <div class="footerbox">
      <h1 style="font-family: logofont">北镇闾山</h1>
    </div>
    <div class="footerbox">
      <p>2023 北镇闾山景区巡查检测平台</p>
      <p>地址：锦州市古塔区辽宁工业大学</p>
      <p>邮箱：aptx4869stvsl@outlook.com</p>
      <p>3062180892@qq.com</p>
    </div>
    <div class="footerbox">
      <p>辽ICP备2022006009号-1</p>
      <p>版权所有: stvsl</p>
      <p>电话：+86 17641544869</p>
      <p>+86 18242003305</p>
    </div>
    <div class="footerbox">
      <h1 style="font-family: logofont">stvsljl.com</h1>
    </div>
  </footer>
</template>

<script>
import TitleBar from "@/components/TitleBar";
export default {
  components: {
    TitleBar,
  },
  data() {
    return {
      goTop: false,
    };
  },
  methods: {
    backTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.goTop = true;
      } else {
        this.goTop = false;
      }
    });
  },
};
</script>

<style>
@import "./assets/css/defaultcolor.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0px;
  margin: 0px;
}

body {
  margin: 0px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.nullpanel {
  height: 50px;
}

.backtop {
  position: fixed;
  display: flex;
  bottom: 220px;
  right: 70px;
  width: 50px;
  height: 50px;
  color: var(--main-text-color-shade);
  background-color: var(--main-theme-color-shade);
  border-radius: 10px;
  box-shadow: 0 0 2px 0 var(--main-text-color);
  justify-content: center;
  align-items: center;
  opacity: 0.8;
}
</style>
<style scoped>
footer {
  width: 100%;
  height: auto;
  display: flex;
  background-color: rgb(80, 80, 80);
  box-shadow: 0 2px rgba(0, 0, 0, 0.2);
  justify-content: center;
}

.footerbox {
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  margin: auto;
  color: rgba(255, 255, 255, 0.8);
}
</style>
