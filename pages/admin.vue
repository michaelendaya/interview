<template>
  <body>
    <nav class="nav">
      <!--      

      <a href="#" class="nav__link"> FAQ  </a>
      <a href="#" class="nav__link"> JOURNEY TRACKER </a>
      <a href="#" class="nav__link"> MAIN PROGRAM </a> -->
      <ul>
        <li><a href="#" class="nav-item" @click="faq"> FAQ </a></li>
        <li>
          <a href="#" class="nav-item" @click="journeyTracker">
            JOURNEY TRACKER
          </a>
        </li>
        <li><a href="#" class="nav-item" @click="main"> MAIN PROGRAM </a></li>
      </ul>
      <Chat />

      <b-button
        class="play"
        variant="success"
        v-if="isMuted"
        @click="playsound"
      >
        <i class="fas fa-volume-up"></i
      ></b-button>

      <b-button class="play" v-else-if="!isMuted" @click="stopsound">
        <i class="fas fa-volume-mute"></i>
      </b-button>

      <b-button class="logout button" @click="logout">Logout</b-button>

      <b-button class="tutorial button" @click="tutorial">Tutorial</b-button>
    </nav>

    <div class="a-scene">
      <a-scene vr-mode-ui="enabled: false">
        <a-camera wasd-controls-enabled="false"></a-camera>
        <a-sky :src="image" rotation="0 -85 0"></a-sky>
        <a-text
          value="UST Main Building"
          width="6"
          position="-1.5 2 -5.5"
          rotation="0 5 0"
        ></a-text>
      </a-scene>
    </div>
    <Chat />
  </body>
</template>
<script>
export default {
  middleware: "auth",
  data() {
    return {
      audio: "",
      isMuted: true,
      image:
        "https://cloudflare1.360gigapixels.com/pano/360philippines/00512120_ust2-jpg/equirect_crop_3_1/6.jpg",
    };
  },
  methods: {
    playsound() {
      this.audio = new Audio("https://media1.vocaroo.com/mp3/1oWI6litqQnG");

      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio.play();
      this.isMuted = false;
    },
    stopsound() {
      this.audio.pause();
      this.audio = null;
      this.isMuted = true;
    },
    logout() {
      this.stopsound();
      this.$store.dispatch("logout").then(() => {
        this.$router.replace("/");
        console.log("LOGGED OUT");
      });
    },
    tutorial() {
      this.$swal.fire({
        title: "Tutorial",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt asperiores nobis in porro quaerat dolore minus deleniti sed ad unde!",
      });
    },
    faq() {
      this.$swal.fire({
        title: "Frequently Asked Questions",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt asperiores nobis in porro quaerat dolore minus deleniti sed ad unde!",
      });
    },
    journeyTracker() {
      this.$swal.fire({
        title: "Journey Tracker",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt asperiores nobis in porro quaerat dolore minus deleniti sed ad unde!",
      });
    },
    main() {
      this.$swal.fire({
        title: "Main Progam",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt asperiores nobis in porro quaerat dolore minus deleniti sed ad unde!",
      });
    },
  },
};
</script>
<style scoped>
ul {
  width: 60%;
  margin: auto;
  padding-left: 0;
}
ul li {
  list-style-type: none;
  float: left;
}

li {
  margin-left: 200px;
  font-size: 120%;
}
.play {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999999;
}
.logout {
  position: fixed;
  top: 20px;
  right: 20px;
}
.tutorial {
  position: fixed;
  top: 70px;
  right: 20px;
  font-size: 15px;
}
.nav {
  position: fixed;

  bottom: 0;
  width: 100%;
  height: 100px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: #ffffffa8;
  display: flex;
  overflow-x: auto;
  z-index: 99999;
}
.a-scene {
  z-index: -2;
}

.button {
  background-color: #4e8cff !important;
  border-color: #4e8cff !important;
  transition: 1s;
}

.button:hover {
  background-color: #3f6dc2 !important;
  border-color: #3f6dc2 !important;
}
.nav-item {
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  color: #444444;
  text-decoration: none;
  border-bottom: 2px solid #eeeeee00;
  transition: 0.5s;
}
.nav-item:hover {
  border-bottom: 2px solid #eeeeee;
}
</style>