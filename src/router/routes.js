const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '/historico', component: () => import('pages/tabs/Historico.vue') },
      { path: '/questionario', component: () => import('pages/tabs/Questionario.vue') },
      { path: '/configuracoes', component: () => import('pages/tabs/Configuracoes.vue') }
    ]
  },
  {
    path: '/formulario',
    component: () => import('layouts/FormularioLayout.vue'),
    children: [
      { path: '/formulario/adulto', component: () => import('pages/FormularioAdulto.vue') },
      { path: '/formulario/adolescente', component: () => import('pages/FormularioAdolescente.vue') }
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
