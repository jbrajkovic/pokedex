<template>
  <div v-if="isMobile" class="single-type">
    <SingleType />
  </div>
  <div v-else class="single-type-desktop">
    <SingleTypeDesktop />
  </div>
</template>

<script>
import SingleType from '../components/Mobile/SingleType/SingleType';
import SingleTypeDesktop from '../components/Desktop/SingleType/SingleType';

export default {
  components: {SingleType, SingleTypeDesktop}  
}
</script>
