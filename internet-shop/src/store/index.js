import {createStore} from "vuex"
import { v4 as uuidv4 } from 'uuid'

const store = createStore({
    state(){
        return{
            count: 0,
            listData: [
                {
                    id: 1,
                    imgSrc:
                      'https://pwa-api.eva.ua/img/300/300/resize/7/0/704356_1_1658321170.jpg',
                    title: 'Пральний порошок для кольорових речей Persil Color Свіжість від Silan 18 циклів прання, 2.7 кг',
                    price: 2000,
                    sales: true,
                  },
                  {
                    id: 2,
                    imgSrc:
                      'https://pwa-api.eva.ua/img/300/300/resize/7/0/704356_1_1658321170.jpg',
                    title: 'Пральний порошок для кольорових речей Persil Color Свіжість від Silan 18 циклів прання, 2.7 кг',
                    price: 5999,
                    sales: false,
                  },
                  {
                    id: 3,
                    imgSrc:
                      'https://pwa-api.eva.ua/img/300/300/resize/7/0/704356_1_1658321170.jpg',
                    title: 'Пральний порошок для кольорових речей Persil Color Свіжість від Silan 18 циклів прання, 2.7 кг',
                    price: 4000,
                    sales: true,
                  },
                  {
                    id: 4,
                    imgSrc:
                      'https://pwa-api.eva.ua/img/300/300/resize/7/0/704356_1_1658321170.jpg',
                    title: 'Пральний порошок для кольорових речей Persil Color Свіжість від Silan 18 циклів прання, 2.7 кг',
                    price: 5000,
                    sales: true,
                  },
            ]
        }
    },

    getters: {
        getProductList: (state) => state.listData,

        getProductById: (state) => (id) => id ? state.listData.find((item) => item.id == id) : {},

        getTotalSum: (state) => (price) => price ? state.listData((item) => item.price == price) : {},

    },

    mutations: {
        increment(state) {
            state.count ++ 
        },
        deleteItem(state, itemIdForDelete) {
          state.listData = state.listData.filter(
            (item) => item.id !== itemIdForDelete
          )
        },
        addNewProduct(state, prod) {
          state.listData.push({
            id: uuidv4(),
            ...prod,
          })
        },
        updateProduct(state, product) {
          const index = state.listData.findIndex((item) => item.id == product.id)
          state.listData[index] = {
            ...JSON.parse(JSON.stringify(product)),
          }
        },
    },
   
    actions: {
      addValueCount({ commit }, val) {
        commit('increaseCount', val)
      },
      deleteItemAction({ commit }, id) {
        commit('deleteItem', id)
      },
      addNewProduct({ commit }, prod) {
        commit('addNewProduct', prod)
      },
      updateProduct({ commit }, product) {
        commit('updateProduct', product)
      },
    },
})



export default store