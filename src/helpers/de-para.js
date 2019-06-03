import { removeCaracteresEspeciais } from './formatter.js'

function pegaCaminhoImagem (tema) {
  return caminhoImagem[removeCaracteresEspeciais(tema.toUpperCase())]
}

const caminhoImagem = {
  'NUTRICAO': 'statics/nutrition.svg',
  'EXERCICIO': 'statics/exercise.svg',
  'AGUA': 'statics/water.svg',
  'SOL': 'statics/sun.svg',
  'TEMPERANCA': 'statics/balance.svg',
  'AR PURO': 'statics/fresh-air.svg',
  'DESCANSO': 'statics/rest.svg',
  'CONFIANCA': 'statics/faith.svg'
}

const pegaResultadoPorEscore = escore =>
  escore <= 25 ? 'Insuficiente'
    : escore >= 26 && escore <= 44 ? 'Regular'
      : escore >= 45 && escore <= 58 ? 'Bom'
        : escore >= 59 && escore <= 73 ? 'Muito bom'
          : escore >= 74 && escore <= 88 ? 'Excelente'
            : 'Inválido'

export { pegaCaminhoImagem, pegaResultadoPorEscore }
