<template>
  <div v-bind="$attrs" class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4>Ajouter un nouveau produit</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Categorie</label>
            <select class="form-control" v-model="id_category" required>
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
            <label>Maison</label>
            <select class="form-control" v-model="id_family" required>
              <option
                v-for="family in families"
                :key="family.id_family"
                :value="family.id_family"
              >
                {{ family.family_name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Fournisseur</label>
            <select class="form-control" v-model="id_supplier" required>
              <option
                v-for="supplier in suppliers"
                :key="supplier.id_supplier"
                :value="supplier.id_supplier"
              >
                {{ supplier.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Nom</label>
            <input type="text" class="form-control" v-model="product_name" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="description" />
          </div>
          <div class="form-group">
            <label>Année</label>
            <input type="text" class="form-control" v-model="bottled_year" />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input type="text" class="form-control" v-model="picture" />
          </div>
          <div class="form-group">
            <label>Prix HT</label>
            <input type="number" class="form-control" v-model="price_ht" />
          </div>
          <div class="form-group">
            <label>Prix carton</label>
            <input type="number" class="form-control" v-model="price_carton" />
          </div>
          <div class="form-group">
            <label>Prix Fournisseur</label>
            <input type="number" class="form-control" v-model="supplier_price" />
          </div>
           <div class="form-group">
            <label>Stock</label>
            <input type="number" class="form-control" v-model="stock" />
          </div>
           <div class="form-group">
            <label>Origine</label>
            <input type="text" class="form-control" v-model="origine" />
          </div>
          <div class="form-group">
            <label>Référence</label>
            <input type="text" class="form-control" v-model="reference" />
          </div>
          <button type="button" class="btn btn-primary" @click="addProduct">
            Ajouter le produit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  props: ["baseURL", "categories", "suppliers", "families"],
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async addProduct() {
      const newProduct = {
        product_name: this.product_name,
        description: this.description,
        price_ht: this.price_ht,
        reference: this.reference,
        bottled_year: this.bottled_year,
        picture: this.picture,
        origine: this.origine,
        stock: this.stock,
        supplier_price: this.supplier_price,
        price_carton: this.price_carton,
        id_supplier: this.id_supplier,
        id_category: this.id_category,
        id_family: this.id_family,
      };

      const u = new URLSearchParams(newProduct).toString();

      await axios({
        method: "post",
        url: `${this.baseURL}products?${u}`,
        // data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "text/plain",
        },
      })
        .then(() => {
          this.$router.push({ name: "AdminProducts" });
          swal({
            text: "Produit ajouté",
            icon: "success",
          });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
