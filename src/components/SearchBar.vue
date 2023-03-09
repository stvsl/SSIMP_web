<template>
  <div>
    <a href="#">
      <el-row>
        <el-card>
          <img src="../assets/photo/北镇闾山.jpg" class="image" />
          <li class="text">好吃的汉堡</li>
          <div class="date">更新时间</div>
          <div class="look">浏览量</div>
        </el-card>
      </el-row>
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
  props: {},
  methods: {},
};
</script>

<style scoped>
.look {
  text-align: right;
  font-size: 6px;
  display: inline-block;
  width: 150px;
}
.date {
  text-align: left;
  font-size: 6px;
  display: inline-block;
  width: 150px;
}
.el-card {
  width: 340px;
}
.text {
  text-overflow: ellipsis;
  text-align: left;
}
.image {
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
}
</style>
