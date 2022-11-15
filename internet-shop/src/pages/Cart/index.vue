<template>
  <master-pages>
    <template v-slot:my-link1>
      <router-link to="/product">Products</router-link>
    </template>
  
    <template v-slot:my-link2>
      <router-link to="/about">About</router-link>
    </template>
  
    <template v-slot:my-link3>
      <router-link to="/">Main</router-link>
    </template>
  
    <h1>Cart</h1>
  </master-pages>
  <div class="header">
    <div>Корзина : {{totalSum}} UAH</div>
  </div>
</template>
    
<script>
import MasterPages from '@/masterpages/MasterPages.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  
  components: {
    MasterPages,
  },

  computed: {
    ...mapGetters(['getProductById']),
    receivedProductId() {
      return this.$route.params.id
    },
  }
}
</script>
    
  