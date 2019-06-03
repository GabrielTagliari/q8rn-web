<template>
  <div class="fixed-center text-center">
    <p class="text-faded">Em breve...</p>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/questionario')"
    >Voltar</q-btn>
  </div>
</template>

<script>
import questoesPtBr from '../../mock/questionario_pt_br.json'
import questoesEnUs from '../../mock/questionario_en_us.json'
import questoesEs from '../../mock/questionario_es.json'
import { mapActions } from 'vuex'

export default {
  name: 'FormularioAdolescente',
  data: () => {
    return {
      questoes: questoesPtBr
    }
  },
  methods: {
    ...mapActions(['carregarQuestoesAdulto']),
    avanca () {
      this.step !== 'religiao-saude' ? this.$refs.stepper.next() : this.redirecionaQuestionario()
    },
    redirecionaQuestionario () {
      this.abreQuestionarioAdolescente()
    },
    abreQuestionarioAdolescente () {
      this.detectarIdioma()
      this.limpaQuestoes()
      this.carregarQuestoesAdolescente(this.questoes.filter(questao => questao.tipo === 'ambos'))
    },
    detectarIdioma () {
      if (this.$q.i18n.lang === 'en-us') {
        this.questoes = questoesEnUs
      }
      if (this.$q.i18n.lang === 'es') {
        this.questoes = questoesEs
      }
    },
    limpaQuestoes () {
      this.questoes.forEach(questao => {
        questao.opcaoSelecionada = ''
      })
    },
    mockDadosParaTestes () {
      this.entrevistado = {
        nome: 'Gabriel',
        codIdentificacao: 'COD',
        iniciaisNome: 'GTR',
        idade: 25,
        altura: 1.78,
        peso: 63,
        profissao: 'Programador',
        cintura: 1.65,
        quadril: 15.5,
        imc: 561,
        pas: 561,
        pad: 651,
        cinturaQuadril: 3216,
        cinturaEstatura: 651,
        glicemiaCapilar: 681681,
        espirometria: 681,
        doencasReferidas: 681,
        esforcoAntes: 6818181,
        esforcoDepois: 81,
        sexo: 'Masculino',
        estadoCivil: 'Solteiro',
        moradia: 'Pai e Mãe',
        corPele: 'Branca',
        escolaridade: 'Superior completo',
        saudeFisica: 'Muito boa',
        saudeMental: 'Boa',
        qualidadeVida: 'Regular',
        religiaoReferida: 'Nenhuma',
        haQuantosAnos: 0,
        oqueDesejaMelhorar: 'Nada'
      }
    }
  }
}
</script>
