<template>
    <div class="container">
        <product-card 
        v-for="item in listData"
        :key="item.id"
        :img-src="item.imgSrc"
        :title="item.title"
        :price="item.price"
        :sales="item.sales"
        @open-product-card="onProductCard(item.id)"
        @delete-item="onDelete(item.id)"
        @edit-product="onProductEdit(item.id)"
        @on-add-to-cart="onAdd"
        />
    </div>
</template>

<script>
    import ProductCard from './ProductCard.vue'
    import { mapActions } from 'vuex'
    export default {
        name: "CardList",
        
        components: {
            ProductCard,
        },

        props: {
            listData:{ 
                type: Array,
                default: () => [],
            },
        },

        methods: {
            ...mapActions(['deleteItemAction']),
            onProductCard(itemId) {
                this.$router.push({
                    name: "product",
                    params: { id: itemId },
                })
            },
            onDelete(itemId) {
                this.deleteItemAction(itemId)
            },
            onProductEdit(itemId) {
                this.$router.push({
                name: 'edit',
                params: { id: itemId },
                })
            },
            onAdd(itemId) {
                this.$router.push({
                    name: 'cart',
                    params: {id : itemId},
                })
            },
    }
}
</script>

<style lang="css" scoped>
    .container{
        display: flex;
    }
</style>