<template>
  <q-page class='fundo' padding>
    <div class='column absolute-center'>
      <transition appear enter-active-class='animated flipInX' leave-active-class='animated bounceInLeft'>
        <q-btn rounded size='lg' color='primary' class='q-ma-md' @click='abreQuestionarioAdulto'>{{ $t('tab.questionario.adulto') }}</q-btn>
      </transition>

      <transition appear enter-active-class='animated flipInX' leave-active-class='animated bounceInLeft'>
        <q-btn rounded size='lg' color='secondary' class='q-ma-md' @click='abreQuestionarioAdolescente'>{{ $t('tab.questionario.adolescente') }}</q-btn>
      </transition>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Questionario',
  data: () => {
    return {
      'questoes': [
        {
          'numero': {
            'adulto': 1,
            'adolescente': 1
          },
          'tema': 'Nutrição',
          'titulo': 'Com que frequência você inclui nas principais refeições do dia: feijões, cereais integrais, castanhas, frutas, legumes e verduras?',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Raramente',
              'valor': 1
            },
            {
              'titulo': 'Quase nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 2,
            'adolescente': 2
          },
          'tema': 'Nutrição',
          'titulo': 'Como você se classifica no que se refere ao tipo de alimento que você mais consome?* Escolha a opção mais adequada a seu caso.',
          'opcoes': [
            {
              'titulo': 'Vegetariano estrito: Consome leite, queijo, ovos, peixe ou carne no máximo 1 vez por mês ou menos',
              'valor': 4
            },
            {
              'titulo': 'Ovolacto Vegetariano: Come laticínios e ovos mais que 1 vez por mês e peixes e carnes menos que 1 vez por mês',
              'valor': 3
            },
            {
              'titulo': 'Pesco Vegetariano: Come carne, frango e outras aves menos de 1 vez por mês,e come peixe mais de 1 vez por mês',
              'valor': 2
            },
            {
              'titulo': 'Semi Vegetariano: Come carne de tipos variados no máximo 1 vez por semana',
              'valor': 1
            },
            {
              'titulo': 'Não vegetariano: Come carne de tipos variados mais de 1 vez por semana',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'adulto'
        },
        {
          'numero': {
            'adulto': 3,
            'adolescente': 2
          },
          'tema': 'Nutrição',
          'titulo': 'Quantos dos itens a seguir você consome uma ou mais vezes por semana? (salgadinhos, bolachas, frituras, refrigerantes e doces de maneira geral)',
          'opcoes': [
            {
              'titulo': 'Nenhum',
              'valor': 4
            },
            {
              'titulo': 'Um item',
              'valor': 3
            },
            {
              'titulo': 'Dois itens',
              'valor': 2
            },
            {
              'titulo': 'Três itens',
              'valor': 1
            },
            {
              'titulo': 'Quatro a cinco itens',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 4,
            'adolescente': 3
          },
          'tema': 'Exercício',
          'titulo': 'Você pratica atividades de lazer, tais como caminhar, pedalar, jogar bola, esportes radicais ou outros hobbies e atividades prazerosas?',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Quase nunca',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 5,
            'adolescente': 4
          },
          'tema': 'Exercício',
          'titulo': 'Quantas vezes por semana você pratica exercício físico intenso (que faz suar e aumentar os batimentos cardíacos, como caminhada longa, corrida, bicicleta, etc)?',
          'opcoes': [
            {
              'titulo': '5 vezes ou mais por semana',
              'valor': 4
            },
            {
              'titulo': '3 a 4 vezes por semana',
              'valor': 3
            },
            {
              'titulo': '1 a 2 vezes por semana',
              'valor': 2
            },
            {
              'titulo': 'Menos de 1 vez por semana',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 6,
            'adolescente': 5
          },
          'tema': 'Exercício',
          'titulo': 'Quantos minutos você gasta “em média” quando faz exercícios intensos até suar?',
          'opcoes': [
            {
              'titulo': '30 a 60 minutos',
              'valor': 4
            },
            {
              'titulo': '21 a 30 minutos',
              'valor': 3
            },
            {
              'titulo': '10 a 20 minutos',
              'valor': 2
            },
            {
              'titulo': '5 a 10 minutos',
              'valor': 1
            },
            {
              'titulo': 'Nenhum, não faço',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 7,
            'adolescente': 6
          },
          'tema': 'Água',
          'titulo': 'Quantos copos (250 ml) de água você bebe diariamente?',
          'opcoes': [
            {
              'titulo': '8 ou mais',
              'valor': 4
            },
            {
              'titulo': '7 copos',
              'valor': 3
            },
            {
              'titulo': '4 a 6 copos',
              'valor': 2
            },
            {
              'titulo': '1 a 3 copos',
              'valor': 1
            },
            {
              'titulo': 'Nenhum',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 8,
            'adolescente': 7
          },
          'tema': 'Água',
          'titulo': 'Você utiliza a água como remédio para tratamentos caseiros quando necessário? (Por exemplo, compressas quentes e frias, aplicação de gelo, inalação, escalda pés e banhos em geral).',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Quase nunca',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 9,
            'adolescente': 8
          },
          'tema': 'Sol',
          'titulo': 'Com que frequência você se expõe ao sol pelo menos 15 a 20 minutos por dia?',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Quase nunca',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 10,
            'adolescente': 9
          },
          'tema': 'Sol',
          'titulo': 'Em sua casa, as janelas e persianas são abertas diariamente para que entrem sol e luz natural?',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Quase nunca',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 11,
            'adolescente': 10
          },
          'tema': 'Temperança',
          'titulo': 'Você ingere bebida alcóolica (cerveja, vinho, licor, aguardente, pinga ou qualquer outra)?',
          'opcoes': [
            {
              'titulo': 'Sim',
              'valor': 4
            },
            {
              'titulo': 'Não',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 12
          },
          'tema': 'Temperança',
          'titulo': 'Você fuma cigarro, charuto, cachimbo ou usa fumo de rolo?',
          'opcoes': [
            {
              'titulo': 'Sim',
              'valor': 4
            },
            {
              'titulo': 'Não',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'adulto'
        },
        {
          'numero': {
            'adulto': 13,
            'adolescente': 11
          },
          'tema': 'Temperança',
          'titulo': 'Você fez uso de alguma droga, tipo maconha, crack, cocaína, etc nos últimos três meses?',
          'opcoes': [
            {
              'titulo': 'Sim',
              'valor': 4
            },
            {
              'titulo': 'Não',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 14
          },
          'tema': 'Temperança',
          'titulo': 'Você ingere bebidas que contém cafeína? (café, chá preto, chá verde, chá mate, chá branco ou refrigerantes)',
          'opcoes': [
            {
              'titulo': 'Sim',
              'valor': 4
            },
            {
              'titulo': 'Não',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'adulto'
        },
        {
          'numero': {
            'adulto': 15,
            'adolescente': 12
          },
          'tema': 'Ar puro',
          'titulo': 'Considerando os lugares onde passa a maior parte do tempo, como você classifica a qualidade do ar que respira?',
          'opcoes': [
            {
              'titulo': 'Muito boa qualidade',
              'valor': 4
            },
            {
              'titulo': 'Boa qualidade',
              'valor': 3
            },
            {
              'titulo': 'Regular',
              'valor': 2
            },
            {
              'titulo': 'Ruim',
              'valor': 1
            },
            {
              'titulo': 'Muito ruim',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 16,
            'adolescente': 13
          },
          'tema': 'Ar puro',
          'titulo': 'Você faz respiração profunda ao ar livre ou quando precisa controlar a tensão e a ansiedade?',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Raramente',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 17,
            'adolescente': 14
          },
          'tema': 'Descanso',
          'titulo': 'Você dorme de 7 a 8 horas por noite e acorda descansado(a) e com boa disposição na maioria das vezes?',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Raramente',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 18,
            'adolescente': 15
          },
          'tema': 'Descanso',
          'titulo': 'Você costuma dormir cedo? (por volta das 22h ou antes desse horário).',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Raramente',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 19,
            'adolescente': 16
          },
          'tema': 'Confiança',
          'titulo': 'Você confia em Deus? (em um Ser Superior ou algo sagrado)',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Raramente',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 20,
            'adolescente': 17
          },
          'tema': 'Confiança',
          'titulo': 'Sua confiança em Deus (Ser Superior ou algo sagrado) influencia positivamente sua maneira de viver?',
          'opcoes': [
            {
              'titulo': 'Sempre',
              'valor': 4
            },
            {
              'titulo': 'Muitas vezes',
              'valor': 3
            },
            {
              'titulo': 'Algumas vezes',
              'valor': 2
            },
            {
              'titulo': 'Raramente',
              'valor': 1
            },
            {
              'titulo': 'Nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 21,
            'adolescente': 18
          },
          'tema': 'Confiança',
          'titulo': 'Com que frequência você participa de reuniões religiosas ou espirituais?',
          'opcoes': [
            {
              'titulo': 'Mais de 1 vez por semana',
              'valor': 4
            },
            {
              'titulo': 'Uma vez por semana',
              'valor': 3
            },
            {
              'titulo': 'Duas a três vezes por mês',
              'valor': 2
            },
            {
              'titulo': 'Algumas vezes por ano',
              'valor': 1
            },
            {
              'titulo': 'Raramente ou nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        },
        {
          'numero': {
            'adulto': 22,
            'adolescente': 19
          },
          'tema': 'Confiança',
          'titulo': 'Você pratica atividades religiosas ou espirituais em sua vida particular? (meditar, rezar ou orar, ler a Bíblia ou livros religiosos, fazer caridade, etc.).',
          'opcoes': [
            {
              'titulo': 'Mais de uma vez ao dia',
              'valor': 4
            },
            {
              'titulo': '1 vez ao dia',
              'valor': 3
            },
            {
              'titulo': 'Duas ou mais vezes por semana',
              'valor': 2
            },
            {
              'titulo': 'Poucas vezes por mês',
              'valor': 1
            },
            {
              'titulo': 'Raramente ou nunca',
              'valor': 0
            }
          ],
          'opcaoSelecionada': '',
          'tipo': 'ambos'
        }
      ]
    }
  },
  methods: {
    ...mapActions(['carregarQuestoesAdulto', 'carregarQuestoesAdolescente']),
    abreQuestionarioAdulto () {
      this.carregarQuestoesAdulto(this.questoes)
    },
    abreQuestionarioAdolescente () {
      this.carregarQuestoesAdolescente(this.questoes.filter(questao => questao.tipo === 'ambos'))
    }
  }
}
</script>

<style scoped>
.fundo {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image:
  linear-gradient(
  rgba(0, 0, 0, 0.5),
  rgba(0, 0, 0, 0.5)
  ),
  url("../../assets/remedios.jpeg");
}
</style>
