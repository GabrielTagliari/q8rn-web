export function carregarQuestoesAdulto (context, questoes) {
  context.commit('carregarQuestoes', questoes)
  context.commit('atualizarTipoQuestionario', 'adulto')
  this.$router.push('/adulto/questao/1')
}

export function carregarQuestoesAdolescente (context, questoes) {
  context.commit('carregarQuestoes', questoes)
  context.commit('atualizarTipoQuestionario', 'adolescente')
  this.$router.push('/adolescente/questao/1')
}
