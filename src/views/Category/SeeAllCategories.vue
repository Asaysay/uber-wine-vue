<template>
<div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Nos catégories</h2>
        </div>
      </div>
      <div class="row">
        <div
            v-for="(category, index) in categories"
            :key="index"
            class="col-md-6 col-xl-4 col-12 pt-3 justify-content-arround d-flex"
          >
          <CategoryBox :category="category"/>
        </div>
      </div>
    </div>
</template>

<script>
import CategoryBox from '@/components/CategoryBox.vue'
export default {
    props:["categories"],
    components: {CategoryBox}
}
</script>
