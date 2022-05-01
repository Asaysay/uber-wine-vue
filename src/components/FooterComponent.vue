<template>
  <footer>
    <div class="container pt-5 pb-3">
      <div class="row">
        <div class="col-md-3 col-6">
          <ul style="list-style-type: none">
            <li class="text-light font-weight-bold pb-2">
              <a href="#" class="footer-link font-weight-light">
                À propos de nous
              </a>
            </li>
            <li class="text-light font-weight-bold pb-2">
              <router-link :to="{name: 'ContactView'}" class="footer-link font-weight-light">
                Nous contacter</router-link
              >
            </li>
            <li class="text-light font-weight-bold pb-2">
              <a href="#" class="footer-link font-weight-light"> FAQ</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <ul style="list-style-type: none">
            <li class="text-light font-weight-bold pb-2">
              <a href="#" class="footer-link font-weight-light">
                Conditions générales de vente
              </a>
            </li>
            <li class="text-light font-weight-bold pb-2">
              <a href="#" class="footer-link font-weight-light"> Livraison</a>
            </li>
            <li class="text-light font-weight-bold pb-2">
              <a href="#" class="footer-link font-weight-light">Paiement</a>
            </li>
          </ul>
        </div>
        <div class="row align-items-center justify-content-around">
          <div id="copyright" class="col-md-3 col-12">© 2022 UBERWINE</div>
          <div
            id="reglementation"
            class="
              no-margin-bottom
              margin-top-20
              text-uppercase
              col-md-6 col-12
            "
          >
            L'abus d'alcool est dangereux pour la santé, à consommer avec
            modération
          </div>

          <div class="col-md-3 col-6">
            <img
              src="../assets/bandeau-vente-alcool.png"
              style="width: inherit"
              alt="Interdiction de vente de boissons alcooliques aux mineurs de moins de 18 ans"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style >
footer {
  margin-top: 100px;
  background-color: #232f3e;
  font-size: 16px;
}
a {
  text-decoration: none;
}
.footer-link {
  color: #ddd;
}

#reglementation,
#copyright {
  color: rgb(193, 193, 193);
  font-size: 12px;
}

li {
  padding-bottom: 10px;
}
</style>