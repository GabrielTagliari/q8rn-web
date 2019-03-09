import axios from 'axios'

export function carregarQuestoesAdulto (context) {
  return axios.get('http://localhost:3000/questoes')
    .then((response) => {
      context.commit('carregarQuestoes', response.data)
      this.$router.push('/adulto/questao/1')
    })
    .catch(() => {
      alert('Ocorreu um erro ao carregar questões')
    })
}

export function carregarQuestoesAdolescente (context) {
  return axios.get('http://localhost:3000/questoes')
    .then((response) => {
      context.commit('carregarQuestoes', response.data)
      this.$router.push('/adolescente/questao/1')
    })
    .catch(() => {
      alert('Ocorreu um erro ao carregar questões')
    })
}
