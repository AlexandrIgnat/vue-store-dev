<template>
  <div>
    <section class="catalog">
        <Productlist  :products="products" />
        <BasePagination v-model="page" :count="count" :per-page="productPerPage" />
      </section>
  </div>
</template>

<script>

import  products from './data/products'
import Productlist from './components/ProductList.vue';
import BasePagination from './components/BasePagination.vue';

export default {
  name: 'App',
  data() {
    return {
      page: 1,
      productPerPage: 3,
    }
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productPerPage;
      return products.slice(offset, offset + this.productPerPage);
    },
    count() {
      return products.length 
    },

  },
  components: {
    Productlist,
    BasePagination,
  }
}
</script>

