import axios from 'axios'

export function carregarQuestoes (context) {
  return axios.get('http://localhost:3000/questoes')
    .then((response) => {
      context.commit('carregarQuestoes', response.data)
      this.$router.push('/questionario/questao/1')
    })
    .catch(() => {
      alert('Ocorreu um erro ao carregar questões')
    })
}
