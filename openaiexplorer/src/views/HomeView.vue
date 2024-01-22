<script setup lang="ts">
import LeftMenuZone from '@/components/home/leftMenu/LeftMenuZone.vue'
import RightMenuZone from '@/components/home/rightMenu/RightMenuZone.vue'
</script>

<template>
  <main class="font-roboto h-screen overflow-hidden fixed bg-neutral0">
    <div class="flex flex-col h-full">
      <div class="flex h-full">
        <div class="bg-dragon3 container m-3 mr-0 mb-3 rounded-l-xl h-[calc(100%-1.5rem)]">
          <LeftMenuZone />
        </div>
        <div class="bg-neutral0 flex-grow m-3 ml-0 mb-3 h-[calc(100%-1.5rem)]">
          <RightMenuZone />
        </div>
      </div>
    </div>
  </main>
</template>
