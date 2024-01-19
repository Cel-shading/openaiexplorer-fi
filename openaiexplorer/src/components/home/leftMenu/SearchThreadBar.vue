<script setup lang="ts">

</script>

<template>
  <!-- rounded input search bar with magnifying glass inside  -->
  <div class="flex items-center justify-center pl-2 pr-2">
    <div class="flex items-center bg-white rounded-full shadow-xl">
      <input
        class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
        id="search"
        type="text"
        placeholder="Search"
      />
      <div class="p-4">
        <button class="bg-slate-500 text-white rounded-full p-1 hover:bg-blue-400 focus:outline-none w-8 h-8 flex items-center justify-center">
          <svg
            class="text-white h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M23.707 22.293l-5.5-5.5a9 9 0 10-1.414 1.414l5.5 5.5a1 1 0 001.414-1.414zM11 18a7 7 0 117-7 7.008 7.008 0 01-7 7z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

</template>