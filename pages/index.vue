<template>
  <body>
    <div class="form">
      ENTER YOUR ADVISOR CODE/EMPLOYEE ID
      <b-form action="" @submit.prevent="onSubmit()">
        <b-form-group class="form-group" id="input-group-1">
          <b-form-input
            id="input"
            type="text"
            required
            v-model="code"
          ></b-form-input>
          <b-form-invalid-feedback :state="validation">
            Invalid user credentials
          </b-form-invalid-feedback>
        </b-form-group>

        <div class="center">
          <b-button type="submit" class="submit">Submit</b-button>
        </div>
      </b-form>
    </div>
    <Chat />
  </body>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      validity: true,
      code: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.code === "superadmin") {
        this.$store.dispatch("login").then(() => {
          this.$router.push("/admin");
        });
      } else {
        this.validity = false;
      }
    },
  },

  computed: {
    validation() {
      return this.validity;
    },
  },
};
</script>
<style scoped>

.form {
  position: absolute;
  top: 45%;
  right: 10%;
  color: rgb(235, 231, 227);
}
input[type="text"] {
  width: 500px;
  height: 50px;
  font-size: 30px;
  border-radius: 20px;
  outline: none;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.submit {
  background-color: #c4008c !important;
  border: #c4008c;
}
.submit:hover {
  background-color: #9e0071 !important;
  border: #c4008c;
}
</style>