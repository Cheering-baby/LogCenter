import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/', //根目录默认统计信息页面
            name: 'root',
            component: () => import('@/views/sum/sum.vue')
        },
        {
            path: '/sum', //统计信息页面
            name: 'sum',
            component: () => import('@/views/sum/sum.vue')
        },
        {
            path: '/basicData', //基础数据页面
            name: 'data',
            component: () => import('@/views/data/basicData.vue')
        },
        {
            path: '/watch', //监控告警页面
            name: 'watch',
            component: () => import('@/views/watch/watch.vue')
        },
        {
            path: '/setting', //系统管理页面
            name: 'root',
            component: () => import('@/views/setting/setting.vue')
        },
    ]
})

export default router;