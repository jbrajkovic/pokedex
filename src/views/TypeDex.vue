<template>
  <div v-if="isMobile" class="typedex">
    <TypeDex />
  </div>
  <div v-else>
    <TypeDexDesktop />
  </div>
</template>

<script>
import TypeDex from "../components/Mobile/TypeDex/TypeDex";
import TypeDexDesktop from "../components/Desktop/Typedex/TypeDexDesktop";

export default {
  components: { TypeDex, TypeDexDesktop }
};
</script>
