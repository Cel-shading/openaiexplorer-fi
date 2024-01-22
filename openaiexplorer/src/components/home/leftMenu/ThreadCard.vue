<script setup lang="ts">
import { useThreadStore } from '@/stores/thread';
import { watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const threadStore = useThreadStore();
const { setActiveCard } = threadStore;

const id = uuidv4();

watch(() => threadStore.activeCard, (newActiveCard) => {
  if (newActiveCard === id) {
    threadStore.isClicked = true;
  } else {
    threadStore.isClicked = false;
  }
});
</script>

<template>
  <!-- create a card for a tread -->
  <div
    class="flex flex-col bg-transparent items-center justify-center w-full h-24 p-4 mt-1 transition-all duration-200"
    :class="{
      'border-l-4 border-dragon6': threadStore.hoveredThread === id || threadStore.isClicked,
      'bg-gradient slate-300': threadStore.isClicked
    }"
    @mouseover="threadStore.hoveredThread = id"
    @mouseleave="threadStore.hoveredThread = null"
    @mousedown="setActiveCard(id)"
  >
    <div class="flex flex-row items-center justify-between w-full">
      <div class="flex flex-row items-center justify-start">
        <div
          class="flex flex-row items-center justify-center w-12 h-12 mr-2 bg-gray-200 rounded-full"
        >
          <img src="https://picsum.photos/200" alt="avatar" class="w-12 h-12 rounded-full" />
        </div>
        <div class="flex flex-col items-start justify-center">
          <h1 class="text-sm font-semibold text-dragon9">Thread Title</h1>
          <h2 class="text-xs font-light text-dragon8">Thread Description</h2>
        </div>
      </div>
      
    </div>
  </div>
</template>
