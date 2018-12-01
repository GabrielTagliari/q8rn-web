<template>
  <q-page padding>
    <q-stepper ref="stepper" v-model="step" >
      <!-- Step: Pessoal -->
      <q-step default name="pessoal" :title="$t('stepper.titulo.pessoais')" :subtitle="$t('stepper.subtitulo.dadosPessoais')">
        <div class="row justify-around">
          <q-input autofocus class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.nome" type="text" :float-label="$t('entrevistado.nome')" border/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.codIdentificacao" type="text" :float-label="$t('entrevistado.codIdentificacao')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" upper-case v-model="entrevistado.iniciaisNome" type="text" :float-label="$t('entrevistado.iniciaisNome')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.idade" type="number" :float-label="$t('entrevistado.idade').concat(' (anos)')"/>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">{{ $t('entrevistado.sexo') }}</p>
            <div>
              <q-radio v-model="entrevistado.sexo" val="Feminino" color="primary" label="Feminino" class="q-mr-md"/>
              <q-radio v-model="entrevistado.sexo" val="Masculino" color="primary" label="Masculino"/>
            </div>
          </div>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">{{ $t('entrevistado.estadoCivil') }}</p>
            <q-select inverted
              v-model="entrevistado.estadoCivil"
              :options="opcoesEstadoCivil"
            />
          </div>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">{{ $t('entrevistado.corPele') }}</p>
            <q-select inverted
              v-model="entrevistado.corPele"
              :options="opcoesCorDaPele"
            />
          </div>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">{{ $t('entrevistado.moradia') }}</p>
            <q-select inverted
              v-model="entrevistado.moradia"
              :options="opcoesMoradia"
            />
          </div>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">{{ $t('entrevistado.escolaridade') }}</p>
            <q-select inverted
              v-model="entrevistado.escolaridade"
              :options="opcoesEscolaridade"
            />
          </div>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.altura" type="number" :float-label="$t('entrevistado.altura').concat(' (cm)')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.peso" type="number" :float-label="$t('entrevistado.peso').concat(' (kg)')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.profissao" type="text" :float-label="$t('entrevistado.profissao')"/>
        </div>
      </q-step>

      <!-- Step: Biológico-->
      <q-step name="biologico" :title="$t('stepper.titulo.biologicos')" :subtitle="$t('stepper.subtitulo.dadosBiologicos')">
        <div class="row justify-around">
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.cintura" type="number" :float-label="$t('entrevistado.cintura').concat('(cm)')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.quadril" type="number" :float-label="$t('entrevistado.quadril').concat('(cm)')"/>
          <q-input readonly class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="preencheIMC" type="number" :float-label="$t('entrevistado.imc').concat('(kg/m²)')" />
          <q-input readonly class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="preencheRCQ" type="number" :float-label="$t('entrevistado.cinturaQuadril')"/>
          <q-input readonly class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="preencheRCE" type="number" :float-label="$t('entrevistado.cinturaEstatura')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.pas" type="number" :float-label="$t('entrevistado.pas').concat('(mm/hg)')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.pad" type="number" :float-label="$t('entrevistado.pad').concat('(mm/hg)')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.glicemiaCapilar" type="number" :float-label="$t('entrevistado.glicemiaCapilar').concat('(mg/dl)')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.espirometria" type="number" :float-label="$t('entrevistado.espirometria').concat('(dl)')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.esforcoAntes" type="number" :float-label="$t('entrevistado.esforcoAntes').concat('(bpm)')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.esforcoDepois" type="number" :float-label="$t('entrevistado.esforcoDepois').concat('(bpm)')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.doencasReferidas" type="text" :float-label="$t('entrevistado.doencasReferidas')"/>
        </div>
      </q-step>

      <!-- Step: Religião/Saúde-->
      <q-step name="religiao-saude" :title="$t('stepper.titulo.religiaoSaude')">
        <div class="row justify-around">
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.religiaoReferida" type="text" :float-label="$t('entrevistado.religiaoReferida')"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="entrevistado.haQuantosAnos" type="number" :float-label="$t('entrevistado.haQuantosAnos')"/>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">{{ $t('entrevistado.saudeFisica') }}</p>
            <q-select inverted
              v-model="entrevistado.saudeFisica"
              :options="opcoesGenericas"
            />
          </div>
          <div class="col-xs-12 col-sm-5 col-md-5 q-ma-md">
            <p class="caption">{{ $t('entrevistado.saudeMental') }}</p>
            <q-select inverted
              v-model="entrevistado.saudeMental"
              :options="opcoesGenericas"
            />
          </div>
          <div class="col-xs-12 col-sm-11 col-md-5 q-ma-md">
            <p class="caption">{{ $t('entrevistado.qualidadeVida') }}</p>
            <q-select inverted
              v-model="entrevistado.qualidadeVida"
              :options="opcoesGenericas"
            />
          </div>
          <q-input class="col-xs-12 col-sm-11 col-md-11 q-ma-md" v-model="entrevistado.oqueDesejaMelhorar" type="text" :float-label="$t('entrevistado.oqueDesejaMelhorar')"/>
        </div>
      </q-step>

      <q-stepper-navigation class="absolute-bottom">
        <q-btn @click="mockDadosParaTestes" color="positive">Load Mock</q-btn>
        <q-btn
          flat
          @click="$refs.stepper.previous()"
          :label="$t('navegacao.voltar')"
          v-if="visualizacaoBotaoVoltar"
        />
        <q-btn @click="avanca()">{{ labelBotaoNext }}</q-btn>
      </q-stepper-navigation>
    </q-stepper>
  </q-page>
</template>

<script>
import CalculadoraMedidas from '../classes/CalculadoraMedidas.js'
import { mapActions } from 'vuex'

export default {
  name: 'Formulario',
  data: () => {
    return {
      step: '',
      botaoVoltarAtivo: false,
      entrevistado: {
        id: 1,
        tipoFormulario: 'Adulto',
        nome: '',
        codIdentificacao: '',
        iniciaisNome: '',
        idade: '',
        altura: '',
        peso: '',
        profissao: '',
        cintura: '',
        quadril: '',
        imc: '',
        pas: '',
        pad: '',
        cinturaQuadril: '',
        cinturaEstatura: '',
        glicemiaCapilar: '',
        espirometria: '',
        doencasReferidas: '',
        esforcoAntes: '',
        esforcoDepois: '',
        sexo: '',
        estadoCivil: '',
        moradia: '',
        corPele: '',
        escolaridade: '',
        saudeFisica: '',
        saudeMental: '',
        qualidadeVida: '',
        religiaoReferida: '',
        haQuantosAnos: '',
        oqueDesejaMelhorar: ''
      },
      opcoesEstadoCivil: [
        {
          label: 'Solteiro',
          value: 'Solteiro'
        },
        {
          label: 'Casado',
          value: 'Casado'
        },
        {
          label: 'Divorciado',
          value: 'Divorciado'
        },
        {
          label: 'Viúvo',
          value: 'Viúvo'
        },
        {
          label: 'Outro',
          value: 'Outro'
        }
      ],
      opcoesMoradia: [
        {
          label: 'Sozinho',
          value: 'Sozinho'
        },
        {
          label: 'Pai e Mãe',
          value: 'Pai e Mãe'
        },
        {
          label: 'Pai',
          value: 'Pai'
        },
        {
          label: 'Mãe',
          value: 'Mãe'
        },
        {
          label: 'Outros',
          value: 'Outros'
        }
      ],
      opcoesCorDaPele: [
        {
          label: 'Branca',
          value: 'Branca'
        },
        {
          label: 'Parda',
          value: 'Parda'
        },
        {
          label: 'Preta',
          value: 'Preta'
        },
        {
          label: 'Indígena',
          value: 'Indígena'
        },
        {
          label: 'Amarela',
          value: 'Amarela'
        }
      ],
      opcoesEscolaridade: [
        {
          label: 'Sem instrução ou Fundamental incompleto',
          value: 'Sem instrução ou Fundamental incompleto'
        },
        {
          label: 'Fundamental completo ou Ensino Médio incompleto',
          value: 'Fundamental completo ou Ensino Médio incompleto'
        },
        {
          label: 'Ensino médio completo ou Superior incompleto',
          value: 'Ensino médio completo ou Superior incompleto'
        },
        {
          label: 'Superior completo',
          value: 'Superior completo'
        }
      ],
      opcoesGenericas: [
        {
          label: 'Muito boa',
          value: 'Muito boa'
        },
        {
          label: 'Boa',
          value: 'Boa'
        },
        {
          label: 'Regular',
          value: 'Regular'
        },
        {
          label: 'Ruim',
          value: 'Ruim'
        },
        {
          label: 'Muito ruim',
          value: 'Muito ruim'
        }
      ]
    }
  },
  computed: {
    visualizacaoBotaoVoltar () {
      return this.step !== 'pessoal'
    },
    labelBotaoNext () {
      return this.step === 'religiao-saude' ? this.$t('navegacao.finalizar') : this.$t('navegacao.proxima')
    },
    preencheIMC () {
      return new CalculadoraMedidas(this.entrevistado.peso, this.entrevistado.altura).valida().calculaIMC()
    },
    preencheRCQ () {
      return new CalculadoraMedidas(this.entrevistado.cintura, this.entrevistado.quadril).valida().calculaRCQ()
    },
    preencheRCE () {
      return new CalculadoraMedidas(this.entrevistado.cintura, this.entrevistado.altura).valida().calculaRCE()
    }
  },
  methods: {
    ...mapActions(['carregarQuestoes']),
    avanca () {
      this.step !== 'religiao-saude' ? this.$refs.stepper.next() : this.redirecionaQuestionario()
    },
    redirecionaQuestionario () {
      this.$q.loading.show()
      this.carregarQuestoes().then(() => {
        this.$q.loading.hide()
        this.$router.push('/questionario/questao/1')
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

<style lang="stylus" scoped>
@media screen and (max-width: 575px) {
  div .q-input {
    margin 8px 8px
  }
}
</style>
