<template>
    <div class="card-container m-1" @click="$emit('open-product-card')">
        <div class="header">
            <button @click.stop="$emit('edit-product')">Edit</button>
            <button @click.stop="$emit('delete-item')">Delete</button>
            <button class="button" @click.stop="$emit('on-add-to-cart', price)" @mousedown.stop="">
                <img src="https://emojigraph.org/media/twitter/white-heart_1f90d.png"/>
            </button>
        </div>

        <div class="image m-2">
            <span ></span>
            <img :src="imgSrc" />
        </div>

        <div class="title m-3">
            <a href="#">{{title}}</a>
        </div>

        <div class="price">
            <div v-if="sales == false">{{price}} грн.</div>
            <div v-else><span class="old-price">{{price}} грн.</span><br>
                <span class="new-price">2000 грн.</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ProductCard',

        props: {
            imgSrc: {
                type: String,
                default: "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",
            },
            
            title: {
                type: String,
                default: "No title",
            },
            price: {
                type: Number,
                default: 0,
            },
            sales: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>


<style lang="css" scoped>
    @import '@/assets/style/spaces.scss';
    .card-container {
      width: 200px;
      height: 360px;
      border: 2px solid rgb(0, 0, 0);
      border-radius: 10px;
      margin: 20px;
      padding: 10px;
      cursor: pointer
    }
    .header {
      display: flex;
      justify-content: right;
    }
    .old-price {
        font-size: 14px;
        line-height: 1;
        text-decoration: line-through;
        color: #a6a5a5;
    }
    .new-price{
        color: red;
        font-size: 25px;
    }
    .button{
        display: flex;
        justify-content: center;
        width: 40px;
        height: 40px;
        cursor: pointer;
        border: none;
        background-color: white;
    }
    .header :hover{
        background-color: rgb(226, 224, 224);
    }
    .button img{
        width: 32px;
        height: 32px;
    }
    .image {
      padding: 10px;
    }
    .image img {
      width: 100%;
    }
    </style>