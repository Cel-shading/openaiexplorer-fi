<script setup lang="ts">

import { ref } from 'vue';

const userName = ref('John Doe');
const userPhoto = ref('https://picsum.photos/200');
const message = ref('Densis adventicium igitur mox in Isauriae adnexam in igitur maritima praetenturis relicta tempore adnexam viatorum ibique itinera pascebantur adventicium et in relicta Isauriae cum tempore in pascebantur Lycaoniam opibus ora cum Lycaoniam praetenturis praetenturis nihil ibique in relicta se igitur viatorum et provincialium ibique adnexam pascebantur praetenturis mox maritima densis provincialium Lycaoniam provincialium intersaepientes adventicium Isauriae nihil igitur se adventicium adnexam Lycaoniam Lycaoniam opibus se et et tempore praetenturis contulerunt itinera igitur et in se inveniretur cum provincialium Lycaoniam se relicta nihil adnexam inveniretur adnexam ibique itinera opibus tempore pascebantur densis praetenturis tempore igitur adventicium ora se Lycaoniam in Lycaoniam.');

</script>

<template>
  <div class="flex space-x-2">
    <img :src="userPhoto" alt="User photo" class="w-12 h-12 rounded-full" />
    <div class="flex flex-col justify-center">
      <h2 class="font-bold m-0">{{ userName }}</h2>
      <p class="m-0">{{ message }}</p>
    </div>
  </div>
</template>