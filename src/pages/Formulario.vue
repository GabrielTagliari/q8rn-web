<template>
  <q-page padding>
    <q-stepper ref="stepper" v-model="step" >
      <!-- Step: Pessoal -->
      <q-step default name="pessoal" title="Pessoal" subtitle="Dados pessoais">
        <div class="row justify-around">
          <q-input autofocus class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="nome" type="text" float-label="Nome" border/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="codIdentificacao" type="text" float-label="Cód. Identificação"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" upper-case v-model="iniciaisNome" type="text" float-label="Iniciais do nome"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="idade" type="number" float-label="Idade (anos)"/>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">Sexo</p>
            <div>
              <q-radio v-model="sexo" val="F" color="primary" label="Feminino" class="q-mr-md"/>
              <q-radio v-model="sexo" val="M" color="primary" label="Masculino"/>
            </div>
          </div>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">Estado Civil</p>
            <q-select inverted
              v-model="estadoCivil"
              :options="opcoesEstadoCivil"
            />
          </div>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">Com quem mora</p>
            <q-select inverted
              v-model="moradia"
              :options="opcoesMoradia"
            />
          </div>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">Cor da pele referida</p>
            <q-select inverted
              v-model="corPele"
              :options="opcoesCorDaPele"
            />
          </div>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">Escolaridade</p>
            <q-select inverted
              v-model="escolaridade"
              :options="opcoesEscolaridade"
            />
          </div>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="altura" type="number" float-label="Altura (cm)"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="peso" type="number" float-label="Peso (kg)"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="profissao" type="text" float-label="Profissão"/>
        </div>
      </q-step>

      <!-- Step: Biológico-->
      <q-step name="biologico" title="Biológicos" subtitle="Dados biológicos">
        <div class="row justify-around">
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="cintura" type="number" float-label="Cintura (cm)"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="quadril" type="number" float-label="Quadril (cm)"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="imc" type="number" float-label="IMC (kg/m²)"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="pas" type="number" float-label="Pressão arterial sistólica (mm/hg)"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="pad" type="number" float-label="Pressão arterial diastólica (mm/hg)"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="cinturaQuadril" type="number" float-label="Relação cintura/quadril"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="cinturaEstatura" type="number" float-label="Relação cintura/estatura"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="glicemiaCapilar" type="number" float-label="Glicemia capilar (mg/dl)"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="espirometria" type="number" float-label="Espirometria (dl)"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="doencasReferidas" type="number" float-label="Doenças referidas"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="esforcoAntes" type="number" float-label="Teste de esforço antes (bpm)"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="esforcoDepois" type="number" float-label="Teste de esforço depois (bpm)"/>
        </div>
      </q-step>

      <!-- Step: Religião/Saúde-->
      <q-step name="religiao-saude" title="Religião/Saúde">
        <div class="row justify-around">
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="religiaoReferida" type="text" float-label="Religião referida"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="haQuantosAnos" type="number" float-label="Há quantos anos"/>
          <div class="col-xs-12 col-sm-5 col-md-3 q-ma-md">
            <p class="caption">Saúde física</p>
            <q-select inverted
              v-model="saudeFisica"
              :options="opcoesGenericas"
            />
          </div>
          <div class="col-xs-12 col-sm-5 col-md-5 q-ma-md">
            <p class="caption">Saúde mental</p>
            <q-select inverted
              v-model="saudeMental"
              :options="opcoesGenericas"
            />
          </div>
          <div class="col-xs-12 col-sm-11 col-md-5 q-ma-md">
            <p class="caption">Qualidade de vida referida</p>
            <q-select inverted
              v-model="qualidadeVida"
              :options="opcoesGenericas"
            />
          </div>
          <q-input class="col-xs-12 col-sm-11 col-md-11 q-ma-md" v-model="oqueDesejaMelhorar" type="text" float-label="O que você deseja melhorar em sua saúde?"/>
        </div>
      </q-step>

      <q-stepper-navigation class="absolute-bottom">
        <q-btn
          flat
          @click="$refs.stepper.previous()"
          label="Voltar"
          v-if="visualizacaoBotaoVoltar"
        />
        <q-btn @click="avanca()">{{ labelBotaoNext }}</q-btn>
      </q-stepper-navigation>
    </q-stepper>
  </q-page>
</template>

<script>
export default {
  name: 'FormularioPage',
  computed: {
    visualizacaoBotaoVoltar () {
      return this.step !== 'pessoal'
    },
    labelBotaoNext () {
      return this.step === 'religiao-saude' ? 'Finalizar' : 'Próximo'
    }
  },
  methods: {
    avanca () {
      this.step !== 'religiao-saude' ? this.$refs.stepper.next() : this.redirecionaQuestionario()
    },
    redirecionaQuestionario () {
      this.$router.push('/questionario/questao/1')
    }
  },
  data: () => {
    return {
      step: '',
      botaoVoltarAtivo: false,
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
      oqueDesejaMelhorar: '',
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
