
<template>
<datetime format="YYYY年MM月DD日 H时i分" v-model="val"></datetime>
</template>
<script>
    import datetime from '../src/datetime';
    export default {
      data(){
        return {
          val:null
        }
      },
      components:{
        datetime
      }
    }
</script>
