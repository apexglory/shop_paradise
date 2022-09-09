<template>
<div class="main-page">
  <HeaderBar @switchCartVisible="switchCartVisible"/>
  <ProductCard/>
  <ShoppingCart :cartVisible="cartVisible"/>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import ShoppingCart from "@/components/ShoppingCart";
import HeaderBar from "@/components/HeaderBar";
export default {
  name: "MainPage",
  components: {ShoppingCart, ProductCard,HeaderBar},

  data() {
    return {
      cartVisible: false,
      products: [
      ],
      cart: []
    };
  },
  methods:{
    switchCartVisible(){
      console.log('switch')
    }
  }
}
</script>

<style scoped>

</style>
