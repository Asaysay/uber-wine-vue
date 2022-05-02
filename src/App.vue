
<template>
  <NavBar />
  <router-view
    v-if="categories && products && families && suppliers"
    style="min-height: 55vh"
    :baseURL="baseURL"
    :categories="categories"
    :products="products"
    :suppliers="suppliers"
    :families="families"
    :cartCounter="cartCounter"
    :isConnected="isConnected"
    @fetchData="fetchData"
  >
  </router-view>
  <FooterComponent />
</template>

<script>
import NavBar from "@/components/NavBar";
import axios from "axios";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  components: { NavBar, FooterComponent },
  data() {
    return {
      baseURL: "https://localhost:5001/",
      products: null,
      categories: null,
      families: null,
      suppliers: null,
      cartCounter: null,

      isConnected: true,
    };
  },
  methods: {
    async fetchData() {
      await axios
        .get(this.baseURL + "categories")
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => console.log("err", err));
      await axios
        .get(this.baseURL + "products")
        .then((res) => {
          res.data.forEach((product) => {
            product.price_ht =
              Math.round((product.price_ht + Number.EPSILON) * 100) / 100;
          });

          this.products = res.data;
        })
        .catch((err) => console.log("err", err));

      await axios
        .get(this.baseURL + "families")
        .then((res) => {
          this.families = res.data;
        })
        .catch((err) => console.log("err", err));

      await axios
        .get(this.baseURL + "suppliers")
        .then((res) => {
          this.suppliers = res.data;
        })
        .catch((err) => console.log("err", err));
    },

    getTotalCartItems() {
      if (sessionStorage.getItem("cart")) {
        this.cartCounter = JSON.parse(sessionStorage.getItem("cart")).length;
        return;
      } else {
        this.cartCounter = null;
      }
    },
  },
  mounted() {
    this.fetchData();
    if (sessionStorage.getItem("cart")) {
      this.getTotalCartItems();
      return;
    } else {
      sessionStorage.setItem("cart", "[]");
    }
    if (sessionStorage.getItem("isConnected")) {
      return;
    } else {
      sessionStorage.setItem("isConnected", "'false'");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>