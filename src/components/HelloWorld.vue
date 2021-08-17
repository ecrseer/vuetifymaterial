<template>
  <v-container>
    <v-row class="text-center">

        <FilmeFormulario :filme="filme" @salvou="cadastra">

        </FilmeFormulario>

        <FilmeLista titulo="Filmes em destaque">
          <FilmeItem v-for="ff in filmes" :filme="ff" @editar="edicao">
          </FilmeItem>
        </FilmeLista>


    </v-row>
  </v-container>
</template>

<script>
import flms from "@/assets/filmes.json"
import FilmeFormulario from "@/components/FilmeFormulario";
import FilmeLista from "@/components/FilmeLista";
import FilmeItem from "@/components/FilmeItem";

export default {
  name: 'HelloWorld',
  components:{FilmeFormulario,FilmeLista,FilmeItem},

  data: () => {
    return {
      teste: '',
      filme: {
        titulo: '3',
        valor: '1',
        descricao: '2',
      },
      filmes: []


    }
  },
  methods: {
    carregar() {
       /*fetch(flms).then(
           r =>{
             console.log(r)
             r.json()
           }

       ).then((dados) => {

         this.filmes = dados
       }).catch(
           ()=>{
             this.filmes=[{"titulo":"234","valor":"1232222","descricao":"ttt2222"},
               {"titulo":"f","valor":"d","descricao":"a"} ]
           }
       )*/

      this.filmes = flms

    },
    cadastra() {
      this.filmes.push(this.filme)
      this.filme = {}
    },
    edicao(filme) {
      this.filme = filme
    }
  },
  mounted() {
    this.carregar()
  },
}
</script>
