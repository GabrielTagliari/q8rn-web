import axios from 'axios'

export function carregarQuestoes (context) {
  return axios.get('https://demo9250026.mockable.io/questoes')
    .then((response) => {
      context.commit('carregarQuestoes', response.data)
    })
    .catch(() => {
      alert('Ocorreu um erro ao carregar questões')
    })
}
