<script setup>
const props = defineProps({
  
    buttonNameShow:{
        type:Array
    }
})
let buttonNames = props.buttonNameShow;
</script>

<template>
<div >
   <button v-for="buttonName in buttonNames"
    :key="buttonName.id"
     @click="buttonName.popVision.value = true"
    >{{buttonName.nameButton}}</button>
</div>
</template>

<style lang ='scss'></style>