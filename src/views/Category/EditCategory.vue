<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt3">Modifier une catégorie</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form v-if="category">
          <div class="form-group">
            <label>Nom</label>
            <input
              type="text"
              class="form-control"
              v-model="category.category_name"
              required
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="category.description"
            />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input
              type="text"
              class="form-control"
              v-model="category.imageUrl"
            />
          </div>
          <button
            class="btn btn-submit btn-primary"
            type="button"
            @click="editCategory"
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
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      category: null,
      id: null,
    };
  },
  props: ["baseURL", "categories"],
  methods: {
    async editCategory() {
      console.log("category", this.category);
        await axios
          .post(`${this.baseURL}category/update/${this.id}`, this.category)
          .then(() => {
            this.$emit("fetchData");
            this.$router.push({ name: "AdminCategories" });
            swal({
              text: "Catégorie mise à jour",
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
    this.category = this.categories.find((category) => category.id_category == this.id);
  },
};
</script>