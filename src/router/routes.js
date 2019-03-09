const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tabs/Questionario.vue') }
    ]
  },
  {
    path: '',
    component: () => import('layouts/QuestionarioLayout.vue'),
    children: [
      { path: '/adulto/questao/:numero', component: () => import('pages/Questionario.vue') },
      { path: '/adolescente/questao/:numero', component: () => import('pages/Questionario.vue') }
    ]
  },
  {
    path: '/escore',
    component: () => import('layouts/EscoreLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Escore.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
