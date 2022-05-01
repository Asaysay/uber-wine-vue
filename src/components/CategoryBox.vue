<template>
  <div class="card w-100 h-100" style="margin-top: 10px">
    <div class="card-body">
      <router-link :to="{ name : 'ListProducts', params: {id: category.id_category}}">
        <h5 class="card-title">
          {{ category.category_name }}
        </h5>
      </router-link>
      <!-- <p class="card-text">
        {{ category.description }}
      </p> -->
      <!-- <router-link
        :to="{ name: 'EditCategory', params: { id: category.id_category } }"
        v-show="$route.name == 'AdminCategories'"
      >
        <button class="btn btn-primary">Modifier</button>
      </router-link> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryBox",
  props: ["category"],
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>