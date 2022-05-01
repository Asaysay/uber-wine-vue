<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!--    Logo-->
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img id="logo" src="../assets/logo-bouteille.svg" />
    </router-link>
    <h5 id="navbar-title" class="navbar-brand">Uber Wine</h5>

    <!--    Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- dropdown navigation -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarBrowse"
            data-toggle="dropdown"
          >
            Naviguer
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarBrowse">
            <router-link class="dropdown-item" :to="{ name: 'Home' }">
              Accueil
            </router-link>
            <router-link class="dropdown-item" :to="{ name: 'SeeAllProducts' }">
              Produits
            </router-link>
            <router-link class="dropdown-item" :to="{ name: 'SeeAllCategories' }">
              Catégories
            </router-link>
          </div>
        </li>
        <!-- dropdown comptes -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarAccount"
            data-toggle="dropdown"
          >
            Compte
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarAccount">
            <router-link :to="{ name: 'SignUp' }" class="dropdown-item"
              >S'inscrire</router-link
            >
            <router-link :to="{ name: 'SignIn' }" class="dropdown-item"
              >Se connecter</router-link
            >
          </div>
        </li>
        <!-- panier -->
        <li class="nav-item">
          <div id="cart" style="position: relative">
            <!-- <span id="nav-cart-counter">{{ cartCounter }}</span> -->
            <router-link class="text-light" :to="{ name: 'CartView' }">
              <i class="fa fa-shopping-cart" style="font-size: 36px"></i>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: ["cartCounter"],
};
</script>

<style scoped>
#logo {
  width: 50px;
  margin-left: 20px;
  margin-right: 20px;
}

.nav-link {
  color: rgba(255, 255, 255);
}

/* a {
   color: white; 
} */

#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

#navbar-title {
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-size: 27px;
  letter-spacing: 1.8px;
  word-spacing: 2px;
  font-weight: 400;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: none;
}

#nav-cart-counter {
  background-color: rgb(182, 58, 58);
  color: white;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  font-size: 15px;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-left: 10px;
}
</style>