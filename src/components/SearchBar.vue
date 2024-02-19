<template>
  <div class="card">
    <a href="#">
      <el-card :body-style="{ padding: '5px' }">
        <div class="panel">
          <img :src="coverimg" />
          <h3 class="biaoti">{{ title }}</h3>
        </div>
        <li class="text">{{ introduction }}</li>
        <div class="bottombar">
          <div class="date">更新日期：{{ updatedtime }}</div>
          <div class="look">浏览量：{{ pageview }}</div>
        </div>
      </el-card>
    </a>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  created() {},
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "标题",
    },
    aid: {
      type: Number,
      default: 1000000001,
    },
    introduction: {
      type: String,
      default: "简介",
    },
    coverimg: {
      type: String,
      default: "../assets/photo/1.png",
    },
    updatedtime: {
      type: String,
      default: "2023年3月14日",
    },
    pageview: {
      type: Number,
      default: 0,
    },
  },

  methods: {},
};
</script>

<style scoped>
.panel {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.biaoti {
  position: absolute;
  top: 65%;
  left: 5%;
}
.bottombar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.card {
  margin: 10px;
}
.look {
  text-align: right;
  font-size: 6px;
  width: 100px;
  display: inline-block;
  margin-left: 0px;
}
.date {
  text-align: left;
  font-size: 6px;
  display: inline-block;
  width: 200px;
}
.el-card {
  width: 300px;
}
.text {
  text-overflow: ellipsis;
  text-align: left;
}
img {
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  /* object-fit: cover;
  object-position: center;
  margin: auto; */
}
</style>
