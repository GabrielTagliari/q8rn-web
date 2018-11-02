
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Historico.vue') },
      { path: '/questionario', component: () => import('pages/Questionario.vue') },
      { path: '/configuracoes', component: () => import('pages/Configuracoes.vue') }
    ]
  },
  {
    path: '/formulario',
    component: () => import('layouts/FormularioLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Formulario.vue') }
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
