<template v-show="visible">
<div>
  <div v-for="(e,i) in cartData" :key="i">
    <div>{{e.name}}</div>
    <div>{{e.price}}*{{e.count}}</div>
    <button>删除</button>
  </div>
</div>
</template>

<script>
import { useStore  } from 'vuex'
import {reactive,toRefs} from "vue";
export default {
  name: "ShoppingCart",
  props: {
    cartVisible: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const state = reactive({
      cartData: store.state.cart,
      visible: props.cartVisible
    })
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>

</style>
