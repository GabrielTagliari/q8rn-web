<template>
  <q-page padding>
    <q-stepper ref="stepper">
      <!-- Step: Pessoal -->
      <q-step default title="Pessoal" subtitle="Aqui vamos nós">
        <div class="row justify-around">
          <q-input autofocus class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="nome" type="text" float-label="Nome"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="codIdentificacao" type="text" float-label="Cód. Identificação"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" upper-case v-model="iniciaisNome" type="text" float-label="Iniciais do nome"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="idade" type="number" float-label="Idade"/>
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
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="altura" type="number" float-label="Altura"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="peso" type="number" float-label="Peso"/>
          <q-input class="col-xs-12 col-sm-5 col-md-3 q-ma-md" v-model="profissao" type="text" float-label="Profissão"/>
        </div>
      </q-step>

      <!-- Step: Biológico-->
      <q-step title="Biológicos">...</q-step>

      <!-- Step: Religião/Saúde-->
      <q-step title="Religião/Saúde">...</q-step>

      <q-stepper-navigation>
        <q-btn
          flat
          @click="$refs.stepper.previous()"
          label="Voltar"
        />
        <q-btn
          @click="$refs.stepper.next()"
          label="Próximo"
        />
      </q-stepper-navigation>
    </q-stepper>
  </q-page>
</template>

<script>
export default {
  name: 'FormularioPage',
  data () {
    return {
      nome: '',
      codIdentificacao: '',
      iniciaisNome: '',
      idade: '',
      altura: '',
      peso: '',
      profissao: '',
      sexo: '',
      estadoCivil: '',
      moradia: '',
      corPele: '',
      escolaridade: '',
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
      ]
    }
  }
}
</script>

<style>
</style>
