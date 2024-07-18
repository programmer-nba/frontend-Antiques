<template>
  <div id="app" class="text-black bg-gradient-to-r from-green-200 to-green-100 w-full min-h-screen flex flex-col">
    <div v-if="this.$store.getters.logedIn" class="flex-grow">
      <!-- <nav class="sticky top-0 z-50 shadow-md"> -->
      <NavBarView />
      <!-- </nav> -->
      <router-view />
    </div>
    <div v-else>
      <LoingPage />
    </div>
    <footer class="bg-green-800 text-white text-center py-4">
      &copy; {{ currentYear }} บริษัท ซีเอ็น กรีน แพลนเน็ต จํากัด
    </footer>
  </div>
  <Toast />
  <ConfirmDialog />
</template>

<script>
import { jwtDecode } from "jwt-decode";
import NavBarView from "./components/Nav/NavBarView.vue";
import LoingPage from "./views/LoginView.vue";
export default {
  components: {
    NavBarView,
    LoingPage
  },
  created() {

  },
  async mounted() {
    if (localStorage.getItem('token')) {
      const decode = jwtDecode(localStorage.getItem("token"));
      const dataLogin = {
        logedIn: true,
        role: decode.row,
        id: decode._id,
        token: localStorage.getItem("token"),
      };
      this.$store.commit("setLogin", dataLogin);
    } else {
      localStorage.clear();
      this.$router.push("/");
    }
  },
  data: () => ({
    currentYear: Date(),
  }),
  methods: {

  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
