<template>
  <div v-if="show" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
        <div v-if="customer">
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-xl leading-6 font-medium text-gray-900" id="modal-title">
              ข้อมูลลูกค้า
            </h3>
            <div class="mt-2 text-lg text-gray-800">
              <p class="">ชื่อ: {{ customer.fullname }}</p>
              <p class="">เลขบัตรประชาชน: {{ customer.id_card }}</p>
              <p class="">เบอร์โทรศัพท์: {{ customer.tel }}</p>
              <p class="">ที่อยู่: {{ customer.address }} ตำบล {{ customer.subdistrict }} อำเภอ {{ customer.district }} จังหวัด {{ customer.province }}  {{ customer.postcode }}</p>
              <p class="">ป้ายทะเบียน: {{ customer.vehicle_code }}</p>
              <p class="">ระดับ: {{ customer.vehicle_code }}</p>

            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <button @click="$emit('close')" 
          class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#4E944F] text-base font-medium text-white hover:bg-[#357C3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8BDB81] sm:text-lg">
            ปิด
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  customer: {
    type: Object,
    required: false,
  },
});
</script>

<style scoped>
/* Styles for your modal */
</style>
