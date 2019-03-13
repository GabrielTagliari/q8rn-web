export function carregarQuestoes (state, questoes) {
  state.questoes = questoes
}

export function atualizarOpcaoSelecionadaAdulto (state, questao) {
  state.questoes[questao.numero.adulto - 1] = questao
}

export function atualizarOpcaoSelecionadaAdolescente (state, questao) {
  state.questoes[questao.numero.adolescente - 1] = questao
}

export function atualizarTipoQuestionario (state, tipoQuestionario) {
  state.tipoQuestionario = tipoQuestionario
}
