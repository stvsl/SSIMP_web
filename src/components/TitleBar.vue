<template>
  <div class="topbar">
    <span class="logo">北镇闾山</span>
    <div class="center">
      <div class="search">
        <input
          id="searchbar"
          type="text"
          placeholder="查找文章"
          v-on:keyup.enter="searchit"
        />
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
    </div>
    <ul class="biaoti">
      <li><a href="#">首页</a></li>
      <li><a href="#">关于</a></li>
    </ul>
  </div>
</template>

<script>
window.addEventListener("scroll", function () {
  let topbar = document.querySelector(".topbar");
  if (window.scrollY > 0) {
    topbar.classList.add("bian");
  } else {
    topbar.classList.remove("bian");
  }
});
export default {
  name: "TitleBar",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.155);
  z-index: 100;
}

.logo {
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--main-text-color);
  font-family: logoFont;
  line-height: 25px;
}
.biaoti {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}
.biaoti li {
  position: relative;
}
.biaoti a {
  position: relative;
  margin: 0 10px;
  font-size: 18px;
  font-family: "logofont";
  font-weight: bold;
  color: var(--main-text-color);
  text-decoration: none;
}
.bian {
  padding: 15px 100px;
  background-color: var(--main-daohanglan-bg-color);
}
.bian .logo,
.topbar.bian a {
  color: var(--main-text-color-white);
}
.center {
  width: 40%;
}
.center .search {
  margin: auto;
  width: 100%;
  height: 30px;
  background-color: var(--main-text-color-white);
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding: 1px 5px;
  opacity: 0.9;
  transition: 0.15s;
}

.center .search:hover {
  padding: 3px 8px;
  opacity: 1;
}

.search svg {
  font-size: 1em;
  color: var(--main-text-color-shade);
  padding: 5px;
}

.search input {
  width: 100%;
  border: none;
  outline: none;
  margin: auto;
  background-color: transparent;
  font-size: 1em;
  color: var(--main-text-color-shade);
}
</style>
