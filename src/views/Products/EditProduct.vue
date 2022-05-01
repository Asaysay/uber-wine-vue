<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt3">Modifier un produit</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form v-if="product">
          <div class="form-group">
            <label>Categorie</label>
            <select class="form-control" v-model="product.id_category" required>
              <option
                v-for="category in categories"
                :key="category.id_category"
                :value="category.id_category"
              >
                {{ category.category_name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Nom</label>
            <input
              type="text"
              class="form-control"
              v-model="product. product_name"
              required
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="product.description"
            />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input
              type="text"
              class="form-control"
              v-model="product.picture"
            />
          </div>
          <div class="form-group">
            <label>Prix</label>
            <input type="number" class="form-control" v-model="product.price_ht" />
          </div>
          <button
            class="btn btn-submit btn-primary"
            type="button"
            @click="editProduct"
          >
            Enregistrer
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
  data() {
    return {
      product: null,
      id: null,
    };
  },
  props: ["baseURL", "categories", "products"],
  methods: {
    async editProduct() {
      console.log("product");
          await axios
          .post(`${this.baseURL}product/update/${this.id}`, this.product)
          .then(() => {
            this.$emit("fetchData");
            this.$router.push({ name: "AdminProducts" });
            swal({
              text: "Produit mis à jour",
              icon: "success",
            });
          })
          .catch((err) =>
           console.log(err)
          );
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id_product == this.id);
  },
};
</script>