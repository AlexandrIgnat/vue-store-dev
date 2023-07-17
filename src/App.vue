<template>
  <div>

    <main class="content container">
      <div class="content__top content__top--catalog">
        <h1 class="content__title">
          Каталог
        </h1>
        <span class="content__info">
          152 товара
        </span>
      </div>

      <div class="content__catalog">

        <ProductFilter />

        <section class="catalog">
          <Productlist :products="products" />
          <BasePagination v-model="page" :count="count" :per-page="productPerPage" />
        </section>

      </div>
    </main>

  </div>
</template>

<script>

import products from './data/products'
import Productlist from './components/ProductList.vue';
import BasePagination from './components/BasePagination.vue';
import ProductFilter from './components/ProductFilter.vue';

export default {
  name: 'App',
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,

      page: 1,
      productPerPage: 3,
    }
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(product => product.price > this.filterPriceFrom)
      }

      return filteredProducts;
    },
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
    ProductFilter,
  }
}
</script>

