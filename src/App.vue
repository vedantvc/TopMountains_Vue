<template>
  <div class="container">
    <HeaderTop mountName="Top 5 Mountains" subName="In Continents"/>
    <MountainBox :mounts="mounts"/>
  </div>
</template>


<script>
import HeaderTop from './components/HeaderTop.vue';
import MountainBox from './components/MountainBox.vue';

export default{
  name: 'App',
  components:{
    HeaderTop,
    MountainBox
  },
  data(){
    return{
      mounts:[]
    }
  },
  methods:{
    async fetchMounts(){
      const res = await fetch("http://localhost:8080/api")
      const data = await res.json()
      console.log(data)

      return data
    },
    
  },
  async created (){
      this.mounts = await this.fetchMounts()
    }

}

</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  *{
    box-sizing: border-box;
    margin: 1.5em;
  }
  body{
    font-family: "Montserrat", sans-serif;
  }
  .container{
   
    margin: 0px;
    overflow: auto;
    min-height: 44em;
    border: 0.3em solid black;
    padding: 1px;
    border-radius: 5px;
    
  }

</style>

