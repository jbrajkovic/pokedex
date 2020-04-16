<template>
  <div class="subheader d-flex flex-between p-20">
    <v-icon name="reply" scale="2" @click="$router.go(-1)" />

    <h2 v-if="title" class="capitalize">{{title}}</h2>
    
    <v-icon class="hidden" name="reply" scale="2" />
  </div>
</template>

<script>
export default {
    name: 'Subheader',
    props: ['title']
};
</script>

