<template>
<div></div>
</template>

<script>
import { defineComponent } from 'vue'
export default {
  name: "ProductCard",
  setup() {
    const store = -()
    const state = reactive({
      products: store.state.products
    })
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>

</style>
