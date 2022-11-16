<template>
  <div>
    <div>
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
    </div>
    <div class="paymant">
      <div>Продуктів в корзині : {{productsInCart}} </div><br>
      <br><div>Сумма : {{totalSum}} UAH</div>
      <div>
        <button> Оплатити </button>
      </div>
    </div>
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

  props: {
    productsInCart: {
      type: Number,
      default: 0,
    },
    totalSum: {
      type: Number,
      default: 0,
    }
  },

  computed: {
    ...mapGetters(["getTotalSum, getProductInCart"]),
    receivedSum() {
    return this.$route.params.price
    },
    receivedProductInCart() {
      return this.$route.params.price
    }
  }
}
</script>