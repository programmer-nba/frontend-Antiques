<template>
  <!-- This is an example component -->
  <!-- component -->
  <div class="flex h-screen w-full items-center justify-center bg-green-500 bg-cover bg-no-repeat login">
    <div class="rounded-xl bg-green-800 bg-opacity-75 px-24 py-6 shadow-lg max-sm:px-12">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
          <div class="mx-auto mb-2 overflow-hidden bg-white rounded-xl">
            <img src="@/assets/images/logo.png" width="150" alt="" srcset="" />
          </div>
          <h1 class="text-3xl">เข้าสู่ระบบ</h1>
        </div>

        <div class="mb-6 text-xl">
          <label class="block font-semibold text-gray-100 mb-2" for="email">
            ชื่อผู้ใช้
          </label>
          <input v-model="username" @keyup.enter="submit"
            class="w-80 rounded-3xl border-none bg-green-400 bg-opacity-50 px-8 py-4 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
            type="text" placeholder="กรอกชื่อผู้ใช้" />
        </div>

        <div class="mb-6 text-xl">
          <label class="block font-semibold text-gray-100 mb-2" for="password">
            รหัสผ่าน
          </label>
          <input v-model="password" @keyup.enter="submit"
            class="w-80 rounded-3xl border-none bg-green-400 bg-opacity-50 px-8 py-4 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
            type="password" placeholder="*********" />
        </div>

        <div class="mt-10 flex justify-center text-xl text-black">
          <button @click="submit"
            class="rounded-3xl bg-white px-12 py-4 text-green-600 shadow-xl z-20 duration-300 hover:bg-[#9BEC00]">เข้าสู่ระบบ</button>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
// import { ref } from 'vue';

export default {
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    async submit() {
      if (this.username === '') {
        Swal.fire({
          icon: 'warning',
          title: 'แจ้งเตือน',
          text: 'กรุณากรอกไอดีผู้ใช้',
          timer: 3000,
          timerProgressBar: true,
        });
        return false;
      }
      if (this.password === '') {
        Swal.fire({
          icon: 'warning',
          title: 'แจ้งเตือน',
          text: 'กรุณากรอกรหัสผ่าน',
          timer: 3000,
          timerProgressBar: true,
        });
        return false;
      }

      await axios.post(`${process.env.VITE_API_ALL}login`, {
        username: this.username,
        password: this.password,
      }).then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'สำเร็จ',
          text: 'เข้าสู่ระบบสำเร็จ',
          timer: 1500,
          timerProgressBar: true,
        });
        localStorage.setItem('token', res.data.token);
        window.location.assign('/home');
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'แจ้งเตือน',
          text: err.response.data.message,
          timer: 1500,
          timerProgressBar: true,
        });
      });
    }
  }
};
</script>


<style scoped>
.login {
  /*
    background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
  */
  background: url('@/assets/images/001CN1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.form-animation {
  animation: formAppear 1s ease-in-out;
}

@keyframes formAppear {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 0.9;
    transform: translateY(0);
  }
}
</style>
