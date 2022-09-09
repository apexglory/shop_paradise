<template>
<div class="header-bar">
  <div class="title">
    购物天堂
  </div>
  <button @click="$emit('switchCartVisible')">购物车</button>
</div>
</template>

<script>
export default {
  name: "HeaderBar"
}
</script>

<style scoped>
.header-bar{
  display: flex;
  justify-content: space-between;
}
.title{
  font-size: 2rem;
  font-weight: bold;
}
</style>
