<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Catégories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn" style="float: right">
            Ajouter une catégorie
          </button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id_category"
        class="col-xl-4 col-md-6 col-12 p-3 d-flex"
      >
        <CategoryBox :category="category"></CategoryBox>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryBox from "@/components/CategoryBox.vue";
export default {
  components: { CategoryBox },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "AdminCategories",
  props: ["categories"],
};
</script>
