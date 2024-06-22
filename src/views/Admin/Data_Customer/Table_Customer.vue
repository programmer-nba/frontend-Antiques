<template>
  <div class="container mx-auto py-4 px-4">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div>
        <div class="flex items-center gap-x-3">
          <h1 class="text-2xl font-medium text-gray-800 ">ลูกค้า</h1>

          <span class="px-3 py-1 text-base text-[#BFEA7C] bg-[#416D19] rounded-full">{{ filteredCustomers.length }}
            รายการ</span>
        </div>

      </div>


    </div>

    <div class="mt-6 md:flex md:items-center md:justify-between">
      <div class="relative md:w-1/3">
        <input type="search" v-model="searchTerm"
          class="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-lg text-gray-600 font-medium"
          placeholder="ค้นหาชื่อหรือเบอร์โทรหรือป้ายทะเบียน">
        <div class="absolute top-0 left-0 inline-flex items-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </div>
      </div>

      <button @click="openAddPopup()"
        class="flex items-center justify-center w-1/2 px-5 py-2 text-lg tracking-wide text-white transition-colors duration-200 bg-[#1A5D1A] rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-[#004225] ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-7 h-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <span>เพิ่มลูกค้า</span>
      </button>
    </div>



  </div>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full  border border-[#9BCF53]">
            <thead class="bg-[#0A6847] border-b border-[#C3FF93] text-center text-white text-lg font-medium">
              <tr>
                <th class="  px-4 py-4 ">
                  ลำดับ
                </th>
                <th class=" font-medium  px-4 py-4 ">
                  บัตรประชาชน
                </th>
                <th class=" font-medium  px-4 py-4 ">
                  ระดับ
                </th>
                <th class=" font-medium  px-4 py-4 ">
                  ชื่อเต็ม
                </th>
                <th class=" font-medium  px-4 py-4 ">
                  ที่อยู่
                </th>

                <th class=" font-medium  px-4 py-4 ">
                  ตำบล
                </th>
                <th class=" font-medium  px-4 py-4 ">
                  อำเภอ
                </th>
                <th class=" font-medium  px-4 py-4 ">
                  จังหวัด
                </th>
                <th class=" font-medium  px-4 py-4 ">
                  รหัสไปรษณีย์
                </th>
                <th class=" font-medium  px-4 py-4 ">
                  ป้ายทะเบียน
                </th>
                <th class=" font-medium  px-4 py-4 ">
                  พนักงาน
                </th>
                <th class=" font-medium  px-4 py-4 ">
                  จัดการ
                </th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="(customer, index) in paginatedCustomers" :key="customer._id"
                class="bg-white border-b border-[#9BCF53] transition duration-300 ease-in-out hover:bg-gray-100 text-lg text-center text-gray-900 font-medium">

                <td class="px-4 py-4 whitespace-nowrap">{{ index + 1 }}</td>
                <td class=" px-4 py-4 whitespace-nowrap">
                  {{ customer.id_card }}
                </td>
                <td class=" px-4 py-4 whitespace-nowrap">
                  {{ customer.level }}
                </td>
                <td class=" px-4 py-4 whitespace-nowrap">
                  {{ customer.fullname }}
                </td>
                <td class=" px-4 py-4 whitespace-nowrap">
                  {{ customer.address }}
                </td>
                <td class=" px-4 py-4 whitespace-nowrap">
                  {{ customer.subdistrict }}
                </td>
                <td class=" px-4 py-4 whitespace-nowrap">
                  {{ customer.district }}
                </td>
                <td class=" px-4 py-4 whitespace-nowrap">
                  {{ customer.province }}
                </td>
                <td class=" px-4 py-4 whitespace-nowrap">
                  {{ customer.postcode }}
                </td>
                <td class=" px-4 py-4 whitespace-nowrap">
                  {{ customer.vehicle_code }}
                </td>
                <td class=" px-4 py-4 whitespace-nowrap">
                  {{ customer.emp }}
                </td>
                <td class=" px-4 py-4 whitespace-nowrap">
                  <div class=" flex space-x-2 ">
                    <button @click="viewCustomer(customer)"
                      class="border-green-600 rounded text-white bg-green-600 text-base cursor-pointer border border-b-4 p-1 px-3 font-bold">ข้อมูล</button>

                    <button @click="editCustomer(customer)"
                      class="border-orange-600 rounded text-orange-900 text-base cursor-pointer border p-1 px-3 ml-auto hover:bg-orange-600 bg-orange-500 hover:text-white transform duration-300">แก้ไข</button>


                    <button @click="deleteCustomer(customer._id)"
                      class="border-red-600 rounded text-white bg-red-600 text-base cursor-pointer border border-b-4 p-1 px-3 font-bold">ลบ</button>

                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 px-6">
      <div>
        <p class="text-lg leading-5 text-[#064635]">
          แสดง
          <span class="font-medium">{{ startItem }}</span>
          ถึง
          <span class="font-medium">{{ endItem }}</span>
          จากทั้งหมด
          <span class="font-medium">{{ filteredCustomers.length }}</span>
          รายการ
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex shadow-sm">
          <div>
            <button :disabled="currentPage === 1" @click.prevent="changePage(currentPage - 1)"
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
              aria-label="Previous" v-on:click.prevent="changePage(pagination.current_page - 1)">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div v-for="page in totalPages" :key="page">
            <button @click.prevent="changePage(page)"
              :class="[currentPage === page ? 'bg-tertiary' : '', 'relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary']">
              {{ page }}
            </button>
          </div>
          <div>
            <button :disabled="currentPage === totalPages" @click.prevent="changePage(currentPage + 1)"
              class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
              aria-label="Next">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>

  <View :show="showViewPopup" :customer="selectedCustomer" @close="closeViewPopup" />

  <Edit :show="showEditPopup" :customer="selectedCustomer" @close="closeEditPopup" @update="updateCustomerList" />


  <Add v-if="showAddPopup" @close="closeAddPopup" @add="addCustomer" @added="fetchCustomers" />

  <!-- component -->

</template>

<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { computed, onMounted, ref } from 'vue';
import Add from './Add_Customer.vue';
import Edit from './Edit_Customer.vue';
import View from './View_Customer.vue';

const customers = ref([]);
const showAddPopup = ref(false);
const showEditPopup = ref(false);
const showViewPopup = ref(false);
const selectedCustomer = ref(null);
const searchTerm = ref('');
const currentPage = ref(1);
const itemsPerPage = 5;

const paginatedCustomers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredCustomers.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredCustomers.value.length / itemsPerPage);
});

const startItem = computed(() => {
  return (currentPage.value - 1) * itemsPerPage + 1;
});

const endItem = computed(() => {
  return Math.min(currentPage.value * itemsPerPage, filteredCustomers.value.length);
});

const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const fetchCustomers = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_ALL}customer`);
    if (response.status === 200 && response.data && Array.isArray(response.data.data)) {
      customers.value = response.data.data;
      console.log(customers.value);
    } else {
      console.error('Invalid response format or empty data array:', response.data);
    }
  } catch (error) {
    console.error('Error fetching customers:', error);
    customers.value = [];
  }
};

onMounted(fetchCustomers);

const viewCustomer = (customer) => {
  selectedCustomer.value = customer;
  showViewPopup.value = true;
};

const closeViewPopup = () => {
  showViewPopup.value = false;
};
const filteredCustomers = computed(() => {
  return customers.value.filter(customer =>
    customer.fullname.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    customer.id_card.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    customer.vehicle_code.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const deleteCustomer = async (_id) => {
  const confirmResult = await Swal.fire({
    icon: 'warning',
    title: 'คุณแน่ใจหรือไม่?',
    text: 'คุณต้องการลบลูกค้าคนนี้หรือไม่?',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'ใช่, ลบเลย!',
    cancelButtonText: 'ยกเลิก',
  });

  if (confirmResult.isConfirmed) {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_ALL}customer/${_id}`);
      if (response.status === 200) {
        fetchCustomers();
        Swal.fire({
          icon: 'success',
          title: 'ลบลูกค้าสำเร็จ',
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error('Error deleting customer:', error);
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาดในการลบลูกค้า',
        text: 'กรุณาลองใหม่อีกครั้ง',
      });
    }
  }
};

const openAddPopup = () => {
  showAddPopup.value = true;
};

const closeAddPopup = () => {
  showAddPopup.value = false;
};

const addCustomer = (customer) => {
  customers.value.push(customer);
  closeAddPopup();
};



const editCustomer = (customer) => {
  selectedCustomer.value = customer;
  showEditPopup.value = true;
};

const closeEditPopup = () => {
  showEditPopup.value = false;
};
const updateCustomerList = () => {
  fetchCustomers();
  closeEditPopup();
};

</script>