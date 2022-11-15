<template>
  <master-pages>
    <template v-slot:my-link1>
      <router-link to="/product">Products</router-link>
    </template>

    <template v-slot:my-link2>
      <router-link to="/">Main</router-link>
    </template>

    <template v-slot:my-link3>
      <router-link to="/cart">Cart</router-link>
    </template>
      
    <h1>About</h1>
  
  </master-pages>
</template>
    
<script>
import MasterPages from '@/masterpages/MasterPages.vue'
export default {
  name: 'About',
  
  components: {
    MasterPages,
  },
  
}
</script>