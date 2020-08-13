export default [
  {
    path: '/',
    component: () => import('@/layout/App.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/index.vue')
      }
    ]
  },
  {
    path: '/v-model',
    component: () => import('@/layout/App.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/v-model.vue')
      }
    ]
  },
  {
    path: '/mixin',
    component: () => import('@/layout/App.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/mixin.vue')
      }
    ]
  },
  {
    path: '/event-bus',
    component: () => import('@/layout/App.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/globalEventBus.vue')
      }
    ]
  },
  {
    path: '/locale',
    component: () => import('@/layout/App.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/locale.vue')
      }
    ]
  }
]
