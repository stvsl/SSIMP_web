<template>
  <div class="WaterfallList">
    <div class="item" v-for="item in images" :key="item">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {

  props: {
    images: {
      type: Array,
    }
  },
}
</script>
<style>
.WaterfallList {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px 0;
  flex-direction: row;
}

.item {
  max-width: calc(33.3333% - 20px);
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
  margin: 5px;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s ease;
}


.item:hover {
  box-shadow: inset 0 0 0 2px #969595, 0 0 0 2px #969595;
}

.item img:hover {
  transform: scale(1.1);
}
</style>