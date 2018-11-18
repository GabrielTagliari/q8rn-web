
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
    component: () => import('layouts/QuestionarioLayout.vue'),
    children: [
      { path: '/questionario/questao/:numero', component: () => import('pages/Questionario.vue') }
    ]
  },
  {
    path: '/escore',
    component: () => import('layouts/EscoreLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Escore.vue') }
    ]
  },
  {
    path: '/entrevistado',
    component: () => import('layouts/EntrevistadoLayout.vue'),
    children: [
      { path: '/entrevistado/:id', component: () => import('pages/Entrevistado.vue') }
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
