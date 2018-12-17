<template>
  <div class="mgr-home">
    <div class="container">
      <div class="mgr-home-header">
        <mgr-login></mgr-login>
      </div>
      <div class="mgr-home-content">
        <mgr-ts></mgr-ts>
      </div>
    </div>
  </div>
</template>

<script>
import MgrLogin from '@/components/MgrLogin'
import MgrTs from '@/components/MgrTs'
export default {
  components: {
    MgrLogin, MgrTs
  },
  data () {
    return {
      credit: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.mgr-home{
  &-header, &-content{
    padding: 20px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.12) 0 2px 6px, rgba(0, 0, 0, 0.24) 0 1px 2px;
  }
  &-content{
    margin-top: 20px;
  }
}
</style>
