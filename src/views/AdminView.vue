<template>
<div class="container py-4">
<router-link :to="{ name: 'AdminCategories' }">
    <button class="btn btn-primary btn-lg mt-1">Catégories admin</button>
  </router-link>
  <br />
  <router-link :to="{ name: 'AdminProducts' }">
    <button class="btn btn-primary btn-lg">Produits admin</button>
  </router-link>
</div>  
</template>
<script>
export default {};
</script>
<style>
.btn {
  margin-bottom: 20px;
}
</style>