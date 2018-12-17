<template>
  <div class="info-module">
    <h4>交易记录</h4>
    <div class="info-content">
      <ul>
        <li class="info-content-header">
          <div class="info-content-header-col col-from">转账地址</div>
          <div class="info-content-header-col col-to">目标地址</div>
          <div class="info-content-header-col col-value">转账数量</div>
        </li>
        <li class="info-content-body" v-for="(data, idx) in tsList" :key="idx" v-if="tsList && tsList.length>0">
          <div class="info-content-body-col col-from">{{data.from}}</div>
          <div class="info-content-body-col col-to">{{data.to}}</div>
          <div class="info-content-body-col col-value">{{data.value}}</div>
        </li>
        <li v-if="!tsList || tsList.length<=0" class="info-content-err">
          <div v-if="credential">暂无数据！</div>
          <div v-else>请先登录！</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      tsList: null
    }
  },
  computed: {
    ...mapGetters({
      credential: 'getCredential'
    })
  }
}
</script>

<style lang="scss" scoped>
.info-content{
  &-header, &-body{
    display: inline-block;
    &-col{
      float: left;
    }

    .col-from, .col-to{
      width: 500px;
    }
  }

  &-body{
    border-top: 1px solid #F0F0F0;
  }

  &-err{
    border-top: 1px solid #F0F0F0;
    text-align: center;
  }
}
</style>

<style lang="scss" scoped>
ul{
  padding: 0;margin: 0;
  li{
    list-style: none;
    font-size: 16px;
    text-align: left;
    padding: 10px 0;
  }
}
</style>

