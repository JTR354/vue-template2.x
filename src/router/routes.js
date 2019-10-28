export default [
  // root
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import('@pages/root/root'),
    children: [
      // home
      {
        path: '/home',
        name: 'home',
        component: () => import('@pages/home/home'),
        children : [
          // home-detail
          {
            path: '/home/home-detail',
            name: 'home-detail',
            component: () => import('@pages/home-detail/home-detail')
          },
        ]
      },
      // mine
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@pages/mine/mine'),
        children: [
          // mine-detail
          {
            path: '/mine/mine-detail',
            name: 'mine-detail',
            component: () => import('@pages/mine-detail/mine-detail')
          },
        ]
      },
    ]
  },
  {
    path: '/',
    redirect: '/404',
  },
  {
    path: '/404',
    name: '404',
    component: require('@pages/_404/_404').default,
    props: true
  },
  {
    path: '*',
    redirect: '404'
  }
]
