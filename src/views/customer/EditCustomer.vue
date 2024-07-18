<template>
  <div v-if="show" class="fixed z-50 inset-0 flex items-center justify-center overflow-hidden">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <div class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-black">
        <div class="w-full flex justify-start  mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.022 20.504c.284-1.394.974-2.138 2.076-3.038a6.167 6.167 0 0 1 7.805 0c1.101.9 1.882 1.644 2.165 3.038M12 13.028a3.31 3.31 0 1 0 0-6.619a3.31 3.31 0 0 0 0 6.619"/>
        <rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"/>
    </g>
</svg>
        </div>
        <h1 class=" font-lg font-bold tracking-normal leading-tight mb-4">แก้ไขข้อมูลลูกค้า</h1>
        <label class=" text-lg font-bold leading-tight tracking-normal">ชื่อ-นามสกุล</label>
        <input v-model="editedCustomer.fullname"
          class="mb-5 mt-2  focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border" />
       
          <label  class=" text-lg font-bold leading-tight tracking-normal"> บัตรประชาชน</label>
        <div class="relative mb-5 mt-2">
          <div class="absolute  flex items-center px-4 border-r h-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="20"
              height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="7" y1="15" x2="7.01" y2="15" />
              <line x1="11" y1="15" x2="13" y2="15" />
            </svg>
          </div>
          <input v-model="editedCustomer.id_card"
            class=" focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-lg border-gray-300 rounded border" />
        </div>
        <div class="flex flex-col sm:flex-row items-center mb-2 sm:space-x-5">
          <div class="w-full sm:w-1/2">
            <label class=" text-lg font-bold leading-tight tracking-normal">เบอร์โทร</label>
            <input v-model="editedCustomer.tel"
              class="mb-5 mt-2  focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border" />
          </div>
          <div class="w-full sm:w-1/2 mt-2 sm:mt-0">

            <label class=" text-lg font-bold leading-tight tracking-normal">ระดับ</label>
            <input v-model="editedCustomer.level"
              class="mb-5 mt-2  focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border" />
          </div>
        </div>
        <label class=" text-lg font-bold leading-tight tracking-normal">ที่อยู่</label>
        <input v-model="editedCustomer.address"
          class="mb-5 mt-2  focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border" />
       
        <div class="flex flex-col sm:flex-row items-center mb-2 sm:space-x-5">
          <div class="w-full sm:w-1/2">
            <label class=" text-lg font-bold leading-tight tracking-normal">ตำบล</label>
            <input v-model="editedCustomer.subdistrict"
              class="mb-5 mt-2  focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border" />
          
            </div>
          <div class="w-full sm:w-1/2 mt-2 sm:mt-0">

            <label class=" text-lg font-bold leading-tight tracking-normal">อำเภอ</label>
            <input v-model="editedCustomer.district"
              class="mb-5 mt-2  focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border" />
          
            </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center mb-2 sm:space-x-5">
          <div class="w-full sm:w-1/2">
            <label class=" text-lg font-bold leading-tight tracking-normal">จังหวัด</label>
            <input v-model="editedCustomer.province"
              class="mb-5 mt-2  focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border" />
          
            </div>
          <div class="w-full sm:w-1/2 mt-2 sm:mt-0">

            <label class=" text-lg font-bold leading-tight tracking-normal">รหัสไปรษณีย์</label>
            <input v-model="editedCustomer.postcode"
              class="mb-5 mt-2  focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border" />
          
            </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center mb-2 sm:space-x-5">
          <div class="w-full sm:w-1/2">
            <label class=" text-lg font-bold leading-tight tracking-normal">ป้ายทะเบียน</label>
            <input v-model="editedCustomer.vehicle_code"
              class="mb-5 mt-2  focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border" />
          
            </div>
          <div class="w-full sm:w-1/2 mt-2 sm:mt-0">

            <label class=" text-lg font-bold leading-tight tracking-normal">พนักงาน</label>
            <input v-model="editedCustomer.emp"
              class="mb-5 mt-2  focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border" />
          
            </div>
        </div>
       
        <button
          class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover: transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
          aria-label="close modal" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20"
            viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
        <div class="flex items-center justify-end w-full">
          <button @click="saveCustomer" 
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#367E18] transition duration-150 ease-in-out hover:bg-[#1E5128] bg-[#4E9F3D] rounded text-white px-8 py-2 text-lg">บันทึก</button>
          <button @click="closePopup"
            class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-[#990000] ml-3 bg-[#FF8787] transition duration-150 text-white ease-in-out hover:border-[#C21010] hover:bg-[#DF2E38] border border-[#FF0000] rounded px-8 py-2 text-lg">ยกเลิก</button>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const props = defineProps({
  show: Boolean,
  customer: Object,
});

const emit = defineEmits(['close', 'update']);

const editedCustomer = ref({});

watch(() => props.customer, (newCustomer) => {
  if (newCustomer) {
    editedCustomer.value = { ...newCustomer };
  }
}, { immediate: true });

const saveCustomer = async () => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_API_ALL}customer/${editedCustomer.value._id}`, editedCustomer.value);
    if (response.data) {
      Swal.fire({
        icon: 'success',
        title: 'บันทึกสำเร็จ',
        text: 'ข้อมูลลูกค้าได้รับการอัปเดตเรียบร้อยแล้ว',
      });
      emit('update');
    }
  } catch (error) {
    console.error('Error updating customer:', error);
    Swal.fire({
      icon: 'error',
      title: 'เกิดข้อผิดพลาด',
      text: error.response.data.message,
    });
  }
};

const closePopup = () => {
  emit('close');
};
</script>