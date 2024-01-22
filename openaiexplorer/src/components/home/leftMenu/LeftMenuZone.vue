<script setup lang="ts">
import NewThread from './NewThread.vue'
import SearchThreadBar from './SearchThreadBar.vue'
import ThreadCard from './ThreadCard.vue'
import UserInformation from './UserInformation.vue'
</script>

<template>
  <div class="flex flex-col h-full">
    <UserInformation class="mb-4" />
    <SearchThreadBar/>
    <div class="flex-grow overflow-auto">
      
      <!-- TODO : v-for all real threads -->
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
    </div>

    <div class="flex-shrink-0">
      <NewThread />
    </div>
  </div>
</template>
