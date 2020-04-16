<template>
  <div class="loading"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(2, 2, 2, 0.3);
  border-radius: 50%;
  border-top-color: #333333;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 0.5s ease-in infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>