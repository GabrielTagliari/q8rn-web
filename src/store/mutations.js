export function carregarQuestoes (state, questoes) {
  state.questoes = questoes
}

export function atualizarOpcaoSelecionada (state, questao) {
  state.questoes[questao.numero - 1] = questao
}
