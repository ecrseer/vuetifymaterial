<template>
  <v-form class="form my-3">
    <CampoMaterial v-model="filme.titulo" v-bind:camponome='titul'/>
    <Campo nome="Titulo" v-model="filme.titulo"></Campo>
    <Campo nome="Valor" v-model="filme.valor"></Campo>
    <Campo nome="Descrição" v-model="filme.descricao"></Campo>
    <v-btn class="btn btn-success mt-3" @click="salvar">Salvar</v-btn>
  </v-form>
</template>

<script>
import Campo from "@/components/Campo";
import CampoMaterial from "@/components/CampoMaterial";

export default {
  name: 'FilmeFormulario',
  components:{CampoMaterial, Campo},
  props: {
    filme: Object
  },


  methods: {
    salvar(e) {
      e.preventDefault()
      this.$emit('salvou', this.filme)
    },


  },
  data:()=>{
    return{
      titul:'titulo'
    }
  }
}
</script>

<style scoped>

</style>
