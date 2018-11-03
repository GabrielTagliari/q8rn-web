
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Historico.vue') },
      { path: '/cadastro', component: () => import('pages/Cadastro.vue') },
      { path: '/configuracoes', component: () => import('pages/Configuracoes.vue') }
    ]
  },
  {
    path: '/formulario',
    component: () => import('layouts/FormularioLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Formulario.vue') }
    ]
  },
  {
    path: '/questionario',
    component: () => import('layouts/QuestaoLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Questao.vue') }
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
