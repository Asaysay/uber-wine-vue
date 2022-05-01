<template>
  <div v-if="addresses" class="container">
    <div v-if="cartItems.length > 0" class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Panier</h3>
      </div>
    </div>
    <div v-if="cartItems.length == 0" class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Votre panier est vide</h3>
      </div>
    </div>

    <div
      v-for="cartItem in cartItems"
      :key="cartItem.id_produit"
      class="row mt-2 pt-3 justify-content-around"
    >
      <div class="col-2"></div>
      <div class="col-md-3 embed-responsive embed-responsive-16by9">
        <img
          :src="cartItem.imageURL"
          alt="Product picture"
          class="w-100 card-image-top embed-responsive-item"
          style="object-fit: cover"
        />
      </div>
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">
            <router-link
              :to="{ name: 'ShowDetails', params: { id: cartItem.id_product } }"
            >
              {{ cartItem.product_name }}
            </router-link>
          </h6>
          <p class="mb-0 font-weight-bold" id="item-price">
            Prix à l'unité : {{ cartItem.price_ht }} €
          </p>
          <p class="mb-0" style="float: left">
            Quantité : {{ cartItem.quantity }}
          </p>
          <p class="mb-0">Total : {{ cartItem.total_price }} €</p>
          <br />
          <a href="#" @click="deleteItem(cartItem.id_product)">
            <i class="fa fa-trash" style="font-size: 25px"></i
          ></a>
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr /></div>
    </div>
    <div class="total-price pt-2 text-right">
      <h5>Total : {{ totalCost }} €</h5>
    </div>
    <div class="row pt-2 text-right justify-content-end align-items-center">
      <div class="col-4 input-group">
        <label type="text" style="margin-right: 2rem">Email</label>
        <input
          class="form-control mr-1"
          type="email"
          v-model="mail"
          required
        />
      </div>
         <div class="col-5 input-group">
        <label type="text" style="margin-right: 2rem">Point de livraison</label>
         <select class="form-control" v-model="id_address" required>
              <option
                v-for="address in addresses"
                :key="address.id_address"
                :value="address.id_address"
              >
                {{ address.address }}
              </option>
            </select>
         </div>
      <!-- <router-link> -->
      <button class="col-3 btn btn-primary" @click="passOrder">
        Commander
      </button>
      <!-- </router-link> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from 'sweetalert';
export default {
  data() {
    return {
      cartItems: [],
      addresses:[],
      totalCost: 0,
      mail: null,
      id_address: null
    };
  },
  props: ["baseURL", "products"],
  methods: {
    listCartItems() {
      this.cartItems = JSON.parse(sessionStorage.getItem("cart"));
      //   si panier vide
      if (this.cartItems.length == 0) {
        console.log("Panier vide");
        return;
      } else {
        this.totalCost = 0;
        this.cartItems = JSON.parse(sessionStorage.getItem("cart"));
        for (let i = 0; i < this.cartItems.length; i++) {
          console.log(this.totalCost, this.cartItems[i]);
          this.totalCost = this.totalCost + this.cartItems[i].total_price;
        }

        console.log(this.totalCost);
      }
    },

    deleteItem(id_product) {
      let indexToRemove = this.cartItems
        .map((prod) => prod.id_product)
        .indexOf(id_product);
      this.totalCost =
        this.totalCost - this.cartItems[indexToRemove].total_price;
      this.cartItems.splice(indexToRemove, 1);
      sessionStorage.setItem("cart", JSON.stringify(this.cartItems));
    },

    async passOrder() {
        const newOrder = {
            mailCustomer: this.mail,
            deliveryPoint: this.id_address,
            products: this.cartItems,
            totalCost: this.totalCost
        };

        const u = new URLSearchParams(newOrder).toString();

        await axios({
          method: "post",
          url: `${this.baseURL}products?${u}`,
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

    async getAddresses() {
      await axios
        .get(this.baseURL + "addresses/")
        .then((resp) => this.addresses = resp.data);
    },
  },

  mounted() {
    this.getAddresses();
    this.listCartItems();
  },
};
</script>
<style>
h4,
h5 {
  color: rgb(58, 58, 58);
  font-weight: 700;
}
</style>