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
      default: () => [
        'https://ts3.cn.mm.bing.net/th?id=ORMS.cff9f4ba0298ba5b7e9bde0ee8b0feb0&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0',
        'https://ts3.cn.mm.bing.net/th?id=ORMS.4e90a63fe0a352982d8c35261bccba69&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
        'https://ts3.cn.mm.bing.net/th?id=ORMS.cff9f4ba0298ba5b7e9bde0ee8b0feb0&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0',
        'https://ts3.cn.mm.bing.net/th?id=ORMS.cff9f4ba0298ba5b7e9bde0ee8b0feb0&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0',
        'https://ts3.cn.mm.bing.net/th?id=ORMS.4e90a63fe0a352982d8c35261bccba69&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
        'https://ts3.cn.mm.bing.net/th?id=ORMS.cff9f4ba0298ba5b7e9bde0ee8b0feb0&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0',
        'https://ts3.cn.mm.bing.net/th?id=ORMS.4e90a63fe0a352982d8c35261bccba69&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0'
      ]
    }
  },
}
</script>
<style>
.WaterfallList {
  width: 100%;
  margin: 0 auto;
}

.item {
  float: left;
  width: calc(33.33% - 20px);
  height: 100%;
  margin: 10px;
  position: relative;
  box-shadow: inset 0 0 0 2px #969595;
  border-radius: 5px;
  overflow: hidden;
}

.item:hover {
  box-shadow: inset 0 0 0 2px #969595, 0 0 0 2px #969595;
}

.item img {
  width: 100%;
  height: auto;
  transition: all 0.2s ease;
}

.item img:hover {
  transform: scale(1.1);
}
</style>