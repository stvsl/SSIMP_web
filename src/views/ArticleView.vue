<template>
  <div>
    <ArticleDetails></ArticleDetails>
  </div>
</template>

<script>
import ArticleDetails from "@/components/ArticleDetails";

export default {
  name: "ArticleView",
  created() {},
  data() {
    return {
      items: [{ message: "Foo" }],
    };
  },
  props: {},
  methods: {},
  components: { ArticleDetails },
};
</script>

<style scoped></style>
