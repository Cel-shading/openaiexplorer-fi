<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize()
</script>

<template>
  <textarea
    ref="textarea"
    v-model="input"
    class="resize-none w-full h-auto bg-neutral3 rounded-xl px-5 p-4 scrollbar-hide focus:outline-none placeholder-neutral6"
    placeholder="What's on your mind?"
  />
</template>
