<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center pt-3">
        <img src="../assets/logo-bouteille.svg" style="width: 50px" />
      </div>
    </div>

    <div class="row">
      <div class="col-12 justify-content-center d-flex pt-3">
        <div id="signup" class="flex-item border">
          <h2 class="pt-4 pl-4">Créer un compte</h2>
          <form @submit="signup" class="pt-4 pl-4 pr-4">
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <label>Prénom</label>
                  <input
                    type="text"
                    v-model="first_name"
                    class="form-control"
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Nom</label>
                  <input
                    type="text"
                    v-model="last_name"
                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                v-model="mail"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label>Numéro de téléphone</label>
              <input
                type="string"
                v-model="phone"
                class="form-control"
                maxlength="10"
                required
              />
            </div>

            <div class="form-group">
              <label>Mot de passe</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label>Confirmer le mot de passe</label>
              <input
                type="password"
                v-model="confirmPassword"
                class="form-control"
                required
              />
            </div>
            <input type="submit" value="Créer" class="btn btn-primary mt-2" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  props: ["baseURL"],
  data() {
    return {
      mail: null,
      last_name: null,
      first_name: null,
      password: null,
      confirmPassword: null,
      phone: null,
    };
  },
  methods: {
    async signup(e) {
      e.preventDefault();
      if (this.password === this.confirmPassword) {
        const user = {
          mail: this.mail,
          last_name: this.last_name,
          first_name: this.first_name,
          password: this.password,
          phone: this.phone,
        };
        const u = new URLSearchParams(user).toString();

        console.log("user", user);
        await axios({
          method: "post",
          url: `${this.baseURL}customers?${u}`,
          headers: {
            "Content-Type": "text/plain",
          },
        })
          .then(() => {
            this.$router.replace("/");
            swal({
              text: "Votre compte a bien été créé, merci de vous connecter",
              icon: "success",
            });
          })
          .catch((err) => console.log("err", err));
      } else {
        swal({
          text: "Les mots de passe ne correspondent pas",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style>
.btn-primary {
  background-color: #febd69;
  border-color: rgba(57, 57, 57, 0.307);
}
.btn-primary:hover {
  background-color: #b87d30;
  border-color: rgba(57, 57, 57, 0.307);
}
</style>