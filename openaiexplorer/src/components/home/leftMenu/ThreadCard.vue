<script setup lang="ts">
import { useThreadStore } from '@/stores/thread'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const { isClicked, isHovered, activeCard } = storeToRefs(useThreadStore())
const { setActiveCard } = useThreadStore()
import { v4 as uuidv4 } from 'uuid'

const id = uuidv4()

watch(activeCard, (newActiveCard) => {
  if (newActiveCard === id) {
    isClicked.value = true
  } else {
    isClicked.value = false
  }
})
</script>

<template>
  <!-- create a card for a tread -->
  <div
    class="flex flex-col items-center justify-center w-full h-24 p-4 m-1 bg-white transition-all duration-200"
    :class="{
      'border-l-4 border-yellow-500': isHovered || isClicked,
      'bg-gradient-to-r from-white to-yellow-300': isClicked
    }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
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
          <h1 class="text-sm font-semibold text-gray-700">Thread Title</h1>
          <h2 class="text-xs font-light text-gray-500">Thread Description</h2>
        </div>
      </div>
    </div>
  </div>
</template>
