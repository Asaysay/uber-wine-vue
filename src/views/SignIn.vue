<template>
  <div class="container">
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signin" class="flex-item border">
          <h2 class="pt-4">Se connecter</h2>
          <form @submit="signin" class="">
            <div class="form-group pt-4 pl-4 pr-4">
              <label>Email</label>
              <input type="email" v-model="email" class="form-control" />
            </div>
            <div class="form-group pt-4 pl-4 pr-4">
              <label>Mot de passe</label>
              <input type="password" v-model="password" class="form-control" />
            </div>
            <input
              type="submit"
              value="Connexion"
              class="btn btn-primary mt-2"
            />
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
      email: null,
      password: null,
    };
  },
  methods: {
    async signin(e) {
      e.preventDefault();
           const body = {
           email: this.email,
            password: this.password,
       };
   const u = new URLSearchParams(body).toString();

      await axios({
        method: "post",
        url: `${this.baseURL}customers/login?${u}`,
        headers: {
          "Content-Type": "text/plain"
        },
      })
            .then(() => {
               this.$router.replace('/');
      swal({
        text: "Connecté",
        icon: "success",
      });
      //   })
      //    .catch((err)=> console.log(err));
    })
  },
}
}
</script>

<style>
#signin {
  width: 60vw;
}

.btn-primary {
  background-color: #febd69;
  border-color: rgba(57, 57, 57, 0.307);
}
.btn-primary:hover {
  background-color: #b87d30;
  border-color: rgba(57, 57, 57, 0.307);
}
</style>