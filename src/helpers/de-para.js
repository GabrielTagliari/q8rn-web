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

export { pegaCaminhoImagem }
