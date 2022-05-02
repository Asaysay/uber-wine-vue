<template>
  <div class="container">
      <div class="row">
          <div class="col-12 text-center">
              <h3>Nous contacter</h3> 
          </div>
      </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
          <legend>Par téléphone</legend>
          <h6>05-05-05-05-05</h6>
      </div>
      <div class="col-3"></div>
    </div>
    <hr />
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form class="vue-form">
          <fieldset>
            <legend>Par mail</legend>
            <div>
              <label class="label" for="textarea">Votre message</label>
              <textarea
                class="form-control"
                name="textarea "
                id="textarea"
                required=""
                v-model="message.text"
                :maxlength="message.maxlength"
              ></textarea>
              <span class="counter"
                >{{ message.text.length }} / {{ message.maxlength }}</span
              >
            </div>
            <div class="text-right">
              <button class="btn btn-primary" @click="submit">Envoyer</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        text: "",
        maxlength: 300,
      },
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      console.log(this.name, this.email, this.message.text);
      let contact = {
          name : this.name,
          email: this.email,
          message: this.message.text
      }

      window.open(`mailto:uberwine33@gmail.com?subject=Contact&body=${contact.message}`);
    },


    
  },
};
</script>