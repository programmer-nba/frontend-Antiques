<template>
  <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
    <!-- Total Revenue Card -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="bg-white p-4 rounded-md shadow">
        <h3 class="text-gray-800 font-semibold">สมาชิก</h3>
        <p class="text-sm text-gray-600">ทั้งหมด</p>
        <div class="flex items-center justify-between mt-2">
          <span class="text-2xl font-bold text-green-600">{{ totalCustomer }} คน</span>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- New Employees Card -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <!-- <Customer /> -->
      <div class="bg-white p-4 rounded-md shadow">
        <h3 class="text-gray-800 font-semibold">พนักงาน</h3>
        <p class="text-sm text-gray-600">ทั้งหมด</p>
        <div class="flex items-center justify-between mt-2">
          <span class="text-2xl font-bold text-green-600">{{ totalEmployee }} คน</span>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Total Expenses Card -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="bg-white p-4 rounded-md shadow">
        <h3 class="text-gray-800 font-semibold">รายได้</h3>
        <p class="text-sm text-gray-600">ทั้งหมด</p>
        <div class="flex items-center justify-between mt-2">
          <span class="text-2xl font-bold text-green-600">{{ revenue }} บาท</span>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  async mounted() {
    await this.getEmployee();
    await this.getCustomer();
  },
  data: () => ({
    isLoading: false,

    totalEmployee: 0,
    totalCustomer: 0,

    revenue: 0,
  }),
  methods: {
    async getEmployee() {
      this.isLoading = true;
      await axios.get(`${process.env.VITE_API_ALL}employee`, {
        headers: {
          'auth-token': `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res) => {
        this.isLoading = false;
        this.totalEmployee = res.data.data.length;
      })
    },
    async getCustomer() {
      this.isLoading = true;
      await axios.get(`${process.env.VITE_API_ALL}customer`, {
        headers: {
          'auth-token': `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res) => {
        this.isLoading = false;
        this.totalCustomer = res.data.data.length;
      })
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
