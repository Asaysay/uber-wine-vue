<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        src="../assets/photos_vins_champagnes/beaujolais_villages_chateau_de_montmelas.jpeg"
        alt="Card image"
      />
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'ShowDetails', params: { id: product.id_product } }"
      >
        <h5 class="card-title">
          {{ product.product_name }} - {{ product.bottled_year }}
        </h5>
      </router-link>
      <h6>{{ product.price_ht }} €</h6>
      <p v-if="product.description" class="card-text">
        {{ product.description.substring(0, 65) }}...
      </p>

      <!-- <router-link
        :to="{ name: 'EditProduct', params: { id: product.id_product } }"
        v-show="$route.name == 'AdminProducts'"
      >
        <button class="btn btn-primary">Modifier</button>
      </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductBox",
  props: ["product"],
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.card-img-top {
  object-fit: cover;
}
.card-title {
  color: #484848;
}
</style> 