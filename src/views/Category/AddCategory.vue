<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Ajouter une catégorie</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Nom</label>
            <input type="text" class="form-control" v-model="category_name" />
          </div>

          <!-- <div class="form-group">
                    <label>Description</label>
                    <textarea type="text" class="form-control" v-model="description"></textarea>

                </div>
          
                <div class="form-group">
                    <label>Image</label>
                    <input type="text" class="form-control" v-model="imageUrl">
                </div> -->
          <button
            class="btn btn-submit btn-primary"
            type="button"
            @click="addCategory"
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
const axios = require("axios");
const sweetalert = require("sweetalert");
export default {
  props: ["baseURL"],
  data() {
    return {
      category_name: "",
      // description: "",
      // imageUrl: ""
    };
  },
  methods: {
   async addCategory() {
      console.log(
        this.category_name
        // , this.description
      );
      const newCategory = {
        category_name: this.category_name,
        // description: this.description,
        // imageUrl: this.imageUrl
      };

    const u = new URLSearchParams(newCategory).toString();
      
    await axios({
        method: "post",
        url: `${this.baseURL}categories?${u}`,
        // data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "text/plain",
        },
      })
        .then(() => {
          sweetalert({
            text: "La catégorie a bien été ajoutée",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
</style>
