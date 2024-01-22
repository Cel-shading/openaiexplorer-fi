<script setup lang="ts">
import ChatInput from './ChatInput.vue'
import Message from './Message.vue'
</script>

<template>
  <div class="flex flex-col h-full p-4 pb-0 overflow-auto h-full">
    <div>
      <Message class="mb-3" />
      <Message class="mb-3" />
      <Message class="mb-3" />
      <Message class="mb-3" />
      <Message class="mb-3" />
      <Message class="mb-3" />
      <Message class="mb-3" />
    </div>
    <div class="absolute bottom-0 w-full bg-white h-20">
      <!-- You can put any content you want in this div -->
    </div>
    
    <div class="sticky bottom-0">
      
        <ChatInput />
      
    </div>
  </div>
</template>
