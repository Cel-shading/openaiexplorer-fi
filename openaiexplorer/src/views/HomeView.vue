<script setup lang="ts">
import  AgentCardZone from '@/components/AgentCardZone.vue';
import ChatZone from '@/components/ChatZone.vue';
</script>

<template>
  <main class="font-roboto">
    <h1 class="">Home</h1>
    <div class="flex ">
        <div class="w-1/2">
            <AgentCardZone />
        </div>
        <div class="w-1/2">
            <ChatZone />
        </div>
    </div>
  </main>
</template>
