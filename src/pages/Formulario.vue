<template>
  <q-page padding>
    <q-stepper ref="stepper">
      <!-- Step: Pessoal -->
      <q-step default title="Pessoal" subtitle="Aqui vamos nós">
        <q-input v-model="nome" type="text" float-label="Nome"/>
        <q-input v-model="codIdentificacao" type="text" float-label="Cód. Identificação"/>
        <q-input v-model="iniciaisNome" type="text" float-label="Iniciais do nome"/>
        <q-input v-model="idade" type="number" float-label="Idade"/>
        <div>
          <p class="caption q-mt-md">Sexo</p>
          <q-option-group>
            <q-radio v-model="sexo" val="F" color="primary" label="Feminino" />
            <q-radio v-model="sexo" val="M" color="primary" label="Masculino" style="margin-left: 10px" />
          </q-option-group>
        </div>
        <div>
          <p class="caption q-mt-md">Estado Civil</p>
          <q-select
            v-model="estadoCivil"
            :options="opcoesEstadoCivil"
          />
        </div>
        <div>
          <p class="caption q-mt-md">Com quem mora</p>
          <q-select
            v-model="moradia"
            :options="opcoesMoradia"
          />
        </div>
        <div>
          <p class="caption q-mt-md">Cor da pele referida</p>
          <q-select
            v-model="corPele"
            :options="opcoesCorDaPele"
          />
        </div>
        <div>
          <p class="caption q-mt-md">Escolaridade</p>
          <q-select
            v-model="escolaridade"
            :options="opcoesEscolaridade"
          />
        </div>
        <q-input v-model="altura" type="number" float-label="Altura"/>
        <q-input v-model="peso" type="number" float-label="Peso"/>
        <q-input v-model="profissao" type="text" float-label="Profissão"/>
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
