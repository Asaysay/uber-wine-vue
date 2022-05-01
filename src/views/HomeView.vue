<template>
  <div id="home">
    <!-- texte accueil -->
    <div id="background-div" class="page-holder bg-cover">
      <div class="container">
        <header class="text-center text-white py-5">
          <h3 class="mb-4 rounded" id="heading">
            <router-link
              :to="{ name: 'SeeAllProducts' }"
              class="bg-white px-2 py-2 rounded text-secondary"
            >
              Toutes nos boissons
            </router-link>
          </h3>
        </header>
      </div>
      <hr />
    </div>

    <!-- top catégories -->
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top catégories</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.categoriesSize"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <CategoryBox :category="categories[index - 1]" />
        </div>
      </div>
    </div>

    <!-- top produits  -->
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top produits</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.productsSize"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <ProductBox :product="products[index - 1]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "@/components/CategoryBox.vue";
import ProductBox from "@/components/ProductBox.vue";
export default {
  name: "HomeView",
  components: {
    CategoryBox,
    ProductBox,
  },
  props: ["categories", "products"],
  data() {
    return {
      categoriesSize: 0,
      productsSize: 0,
    };
  },
  mounted() {
    this.categoriesSize = Math.min(6, this.categories.length);
    this.productsSize = Math.min(8, this.products.length);
  },
};
</script>
<style>
.page-holder {
  min-height: 100vh;
}
.bg-cover {
  background-size: cover !important;
}
#background-div {
  background: url("@/assets/background-bouteilles.jpeg");
}
#heading {
  font-weight: 400;

  color: rgb(121, 30, 30);
}
</style>
