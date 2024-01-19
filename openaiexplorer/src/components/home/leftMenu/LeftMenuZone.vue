<script setup lang="ts">
import NewThread from './NewThread.vue'
import SearchThreadBar from './SearchThreadBar.vue'
import ThreadCard from './ThreadCard.vue'
import UserInformation from './UserInformation.vue'
</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-center m-3">
      <UserInformation />
      <NewThread />
    </div>
    <SearchThreadBar />
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
</template>
