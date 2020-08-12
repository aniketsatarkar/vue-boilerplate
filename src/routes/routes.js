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
  }
]
