<script setup lang="ts">

</script>

<template>
  <!-- rounded input search bar with magnifying glass inside  -->
  <div class="flex items-center justify-center mb-5">
    <div class="flex items-center bg-white rounded-full">
      <input
        class="rounded-l-full py-2 px-3 leading-tight focus:outline-none placeholder-neutral6"
        id="search"
        type="text"
        placeholder="Search"
      />
      <div class="">
        <button class="bg-dragon4 text-white rounded-full p-1 hover:bg-dragon2 focus:outline-none w-9 h-9 flex items-center justify-center">
          <svg
            class="text-white h-5 w-5 fill-current"
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