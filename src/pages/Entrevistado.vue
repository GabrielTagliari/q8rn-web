<template>
  <q-page padding>
    <q-card>
      <q-card-main>
        <q-list no-border class="row">
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Questionário" />
            <q-item-tile stamp>{{ entrevistado.tipoFormulario }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Código de identificacão" />
            <q-item-tile stamp>{{ entrevistado.codIdentificacao }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Iniciais do nome" />
            <q-item-tile stamp>{{ entrevistado.iniciaisNome }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Idade" />
            <q-item-tile stamp>{{ entrevistado.idade }} anos</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Sexo" />
            <q-item-tile stamp>{{ entrevistado.sexo }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Estado civil" />
            <q-item-tile stamp>{{ entrevistado.estadoCivil }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Cor da pele" />
            <q-item-tile stamp>{{ entrevistado.corPele }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Com quem mora" />
            <q-item-tile stamp>{{ entrevistado.moradia }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Profissão" />
            <q-item-tile stamp>{{ entrevistado.profissao }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Escolaridade" />
            <q-item-tile stamp>{{ entrevistado.escolaridade }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Altura" />
            <q-item-tile stamp>{{ entrevistado.altura }} m</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Peso" />
            <q-item-tile stamp>{{ entrevistado.peso }} kg</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="IMC" />
            <q-item-tile stamp>{{ entrevistado.imc }} kg/m²</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Cintura" />
            <q-item-tile stamp>{{ entrevistado.cintura }} cm</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Quadril" />
            <q-item-tile stamp>{{ entrevistado.quadril }} cm</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Relação cintura/quadril" />
            <q-item-tile stamp>{{ entrevistado.cinturaQuadril }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Relação cintura/estatura" />
            <q-item-tile stamp>{{ entrevistado.cinturaEstatura }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Pressão arterial sistólica (PAS)" />
            <q-item-tile stamp>{{ entrevistado.pas }} mm/hg</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Pressão arterial diastólica (PAD)" />
            <q-item-tile stamp>{{ entrevistado.pad }} mm/hg</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Glicemia capilar" />
            <q-item-tile stamp>{{ entrevistado.glicemiaCapilar }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Espirometria" />
            <q-item-tile stamp>{{ entrevistado.espirometria }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Doenças referidas" />
            <q-item-tile stamp>{{ entrevistado.doencasReferidas }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Teste de esforço antes" />
            <q-item-tile stamp>{{ entrevistado.esforcoAntes }} bpm</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Teste de esforço depois" />
            <q-item-tile stamp>{{ entrevistado.esforcoDepois }} bpm</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Religião referida" />
            <q-item-tile stamp>{{ entrevistado.religiaoReferida }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Quantos anos" />
            <q-item-tile stamp>{{ entrevistado.haQuantosAnos }} anos</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Saúde física" />
            <q-item-tile stamp>{{ entrevistado.saudeFisica }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Saúde mental" />
            <q-item-tile stamp>{{ entrevistado.saudeMental }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="Qualidade de vida" />
            <q-item-tile stamp>{{ entrevistado.qualidadeVida }}</q-item-tile>
          </q-item>
          <q-item class="column items-start col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <q-item-main label="O que deseja melhorar em sua saúde?" />
            <q-item-tile stamp>{{ entrevistado.oqueDesejaMelhorar }}</q-item-tile>
          </q-item>
        </q-list>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'EntrevistadoPage',
  data: () => {
    return {
      entrevistado: {
        id: 1,
        tipoFormulario: 'Adulto',
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
.q-item-main {
  flex 0
}
</style>
