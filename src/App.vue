<template>
  <div>
    <top-header :menus="menus"></top-header>
    <div>
      <div class="sideBar"></div>
      <div>
         <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from './components/topHeader.vue'

export default {
  name: 'app',
  components: {
     topHeader
  },
  data() {
     return {
         menus:[
            {
                id: 1,
                value: '统计信息',
                icon: 'sum.png',
                route: '/sum'
            },
            {
                id: 2,
                value: '基础数据',
                icon: 'data.png',
                route: '/basicData'
            },
            {
                id: 3,
                value: '监控告警',
                icon: 'watch.png',
                route: '/watch'
            },
            {
                id: 4,
                value: '系统管理',
                icon: 'setting.png',
                route: '/setting'
            }
        ]
     }
  }
}
</script>

<style lang='less'>
@import './assets/reset.css';
@import './assets/tools.css';


</style>
