<template>
  <div class="container">
    <form>
      <div class="row pt-5">
        <div class="col-md-1"></div>
        <!-- afficher image produit -->
        <div class="col-md-4 col-12">
          <img :src="product.picture" class="img-fluid" />
        </div>
        <!-- afficher les détails du produit -->
        <div class="col-md-6 col-12 pt-3 pt-md-0">
          <h4>{{ product.product_name }}</h4>
          <h6 class="category font-italic">
            {{ category.category_name }} - {{ family.family_name }} -
            {{ bottled_year }}
          </h6>
          <h6 class="font-weight-bold">{{ product.price_ht }} €</h6>
          <p>
            {{ product.description }}
          </p>
          <div class="d-flex flex-row justify-content-between">
            <div class="input-group col-4 p-0">
              <div class="input-group-prepend">
                <span class="input-group-text"> Quantité </span>
              </div>
              <input type="number" class="form-control" v-model="quantity" />
            </div>
            <div class="input-group col-md-3 col-4 p-0">
              <button class="btn btn-primary" @click="addToCart">
                Ajouter au panier
              </button>
            </div>
          </div>
              <p>
              <span v-if="this.quantity > this.product.stock"
                ><small class="text-secondary font-italic"
                  >Les stocks sur ce produit sont faibles, les délais de
                  livraisons peuvent être rallongés</small
                ></span
              >
            </p>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      product: {},
      category: {},
      family: {},
      bottled_year: {},
      quantity: 1,
    };
  },
  props: ["baseURL", "products", "categories", "families"],
  methods: {
    addToCart(e) {
      e.preventDefault();
      let produit = {
        id_product: this.product.id_product,
        product_name: this.product.product_name,
        quantity: this.quantity,
        stock: this.product.stock,
        price_ht: this.product.price_ht,
        imageURL: this.product.imageURL,
      };
      var cart = [];
      cart = JSON.parse(sessionStorage.getItem("cart"));
      let hasId = cart.some((prod) => {
        return prod.id_product == produit.id_product;
      });
      //   si produit déjà présent
      if (hasId) {
        let indexToUpdate = cart
          .map((prod) => prod.id_product)
          .indexOf(produit.id_product);
        cart[indexToUpdate].quantity =
          cart[indexToUpdate].quantity + produit.quantity;
        cart[indexToUpdate].total_price =
          (Math.round(((produit.price_ht * cart[indexToUpdate].quantity) + Number.EPSILON) *100) /100) ;
      }
      //   si nouveau produit
      else {
        let priceCalc = produit.price_ht * produit.quantity;
        cart.push({
          id_product: this.product.id_product,
          product_name: this.product.product_name,
          quantity: this.quantity,
          price_ht: produit.price_ht,
          total_price: Math.round((priceCalc + Number.EPSILON) * 100) / 100,
          imageURL: this.product.imageURL,
        });
        swal({
          text: "Produit ajouté au panier",
          icon: "success",
        });
      }
      sessionStorage.setItem("cart", JSON.stringify(cart));
    },

    //   ajouter vérification de stock et quantité affichée
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find(
      (product) => product.id_product == this.id
    );
    this.category = this.categories.find(
      (category) => category.id_category == this.product.id_category
    );
    this.family = this.families.find(
      (family) => family.id_family == this.product.id_family
    );
    this.bottled_year = this.products.find(
      (product) => product.bottled_year == this.product.bottled_year
    ).bottled_year;
  },
};
</script>
<style>
.category {
  font-weight: 400;
}
</style>