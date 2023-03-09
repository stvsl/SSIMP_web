<template>
  <div>
    <!-- 搜索结果 -->
    <div class="head">
      <h1>XXX的搜索结果:</h1>
    </div>
    <div class="searchbar">
      <li class="height" v-for="item in items" :key="item">
        <SearchBar></SearchBar>
      </li>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
  name: "SearchView",
  created() {},
  data() {
    return {
      items: [
        { message: "Foo" },
        { message: "Bar" },
        { message: "Bar" },
        { message: "Bar" },
        { message: "Foo" },
        { message: "Bar" },
        { message: "Bar" },
        { message: "Bar" },
        { message: "Foo" },
        { message: "Bar" },
        { message: "Bar" },
        { message: "Bar" },
        { message: "Foo" },
        { message: "Bar" },
        { message: "Bar" },
        { message: "Bar" },
      ],
    };
  },
  props: {},
  methods: {},
  components: { SearchBar },
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
