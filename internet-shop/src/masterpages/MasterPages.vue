<template>
  <div class="menu">
    <div>
      <h2><slot name="my-link1">No link</slot></h2>
    </div>
    <div>
      <h2><slot name="my-link2"> No link </slot></h2>
    </div>
    <div>
      <h2><slot name="my-link3"> No link </slot></h2>
    </div>
  </div>
  <div>
    <slot><h1>No title</h1></slot>
  </div>
</template>
  
<script>
export default {
  name: 'MasterPages',
}
</script>
  
<style lang="scss" scoped>
.menu{
  display: flex;
  justify-content: space-around;
}
</style>