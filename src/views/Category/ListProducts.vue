<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">
          {{ category.category_name }}
        </h4>
        <h5 style="font-weight: 300; color: #686868">{{ msg }}</h5>
      </div>
    </div>
    <div class="row">
      <div
        v-for="product of category.products"
        :key="product.id_product"
        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-arround d-flex"
      >
        <ProductBox :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from '@/components/ProductBox.vue'
export default {
    components: { ProductBox },
  data() {
    return {
      id: null,
      category: {},
      msg: ""
    };
  },
  props: ["categories", "products"],
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.find((category) => category.id_category == this.id);
    let products = this.products.filter((prod) => prod.id_category == this.category.id_category);
    console.log(products);
    this.category.products = products;

  if(this.category.products.length == 0) {
    this.msg = "Aucun produit";    
  }
  else {
      this.msg = `${this.category.products.length} produit(s) trouvé(s)`; 
  }
  }
  
}
</script>