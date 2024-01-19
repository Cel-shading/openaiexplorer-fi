<script setup lang="ts">
import LeftMenuZone from '@/components/home/leftMenu/LeftMenuZone.vue'
import RightMenuZone from '@/components/home/rightMenu/RightMenuZone.vue'
</script>

<template>
  <main class="font-roboto h-screen flex flex-col">
    <h1 class="">Home</h1>
    <div class="flex ">
      <div class="bg-yellow-200 h-full">
        <LeftMenuZone />
      </div>
      <div class="bg-slate-600 h-full flex-grow">
        <RightMenuZone />
      </div>
    </div>
  </main>
</template>
