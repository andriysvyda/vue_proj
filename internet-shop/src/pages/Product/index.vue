<template>
  <div>
    <div>
      <master-pages class="menu">
        <template v-slot:my-link1>
          <router-link to="/">Main</router-link>
        </template>
        <template v-slot:my-link2>
          <router-link to="/about">About</router-link>
        </template>
        <template v-slot:my-link3>
          <router-link to="/cart">Cart</router-link>
        </template>
        <h2><router-link to="/edit">Add new product</router-link></h2>
        <h1>Products</h1>
      </master-pages>
    </div>
    <product-card
    v-if="receivedProductId"
    :img-src="currentProduct.imgSrc"
    :title="currentProduct.title"
    :price="currentProduct.price"
    :sales="currentProduct.sales"
    />

    <card-list v-else :list-data="getProductList"/>
  </div>
    
    
</template>
  
<script>
import MasterPages from '@/masterpages/MasterPages.vue'
import CardList from '@/components/CardList'
import ProductCard from '@/components/CardList/ProductCard';

import { mapGetters } from 'vuex';

export default {
  name: "Product",

  components: {
    CardList,
    ProductCard,
    MasterPages,
  },

  computed: {
    ...mapGetters(["getProductList", "getProductById"]),
    receivedProductId() {
    return this.$route.params.id
  },
    currentProduct() {
      return this.getProductById(this.$route.params.id)
  },
      
  }
}
</script>