<template>
  <div>
    <!-- 搜索结果 -->
    <div class="head">
      <h1>的搜索结果:</h1>
    </div>
    <div class="searchbar">
      <li class="height" v-for="item in items" :key="item">
        <SearchBar
          :title="item.title"
          :aid="item.aid"
          :coverimg="item.coverimg"
          :introduction="item.introduction"
          :pageview="item.pageview"
          :updatetime="item.updatetime"
        ></SearchBar>
      </li>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "SearchView",
  created() {},

  props: {},
  methods: {},
  components: { SearchBar },
  setup() {
    const route = useRoute();
    const items = ref("[]");
    var aname = route.query.name;
    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: aname,
    });
    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:6521/api/article/search", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        items.value = JSON.parse(result);
        var x = items.value.data;
        items.value = JSON.parse(x);
        for (var i = 0; i < items.value.length; i++) {
          items.value[i].updatetime =
            items.value[i].updatetime.substring(0, 4) +
            "年" +
            items.value[i].updatetime.substring(5, 7) +
            "月" +
            items.value[i].updatetime.substring(8, 10) +
            "日";
        }
      })

      .catch((error) => console.log("error", error));
    return {
      items,
    };
  },
};
</script>

<style scoped>
.searchbar {
  display: flex;
  width: 90%;
  max-width: 100%;
  flex-wrap: wrap;
  margin: auto;
  min-height: 100vh;
  justify-content: left;
}

.head {
  margin-top: 40px;
}
.height {
  margin-top: 15px;
  margin-bottom: 0;
  list-style: none;
}
</style>
