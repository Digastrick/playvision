<script setup lang="ts">
let showModal = ref(0)
let showTest = ref(0)
let massPop = [showModal ,showTest ]
let sliders = [
{ vision : showModal,
  buttonName : 'другое окно',
  header:'тест',
  body : [{
  title : null,
  text : "asdsadqweqasaddddddx"
 }
 ],
 footer : null
},
  {
    vision : showTest,
    buttonName : 'Третье  окно',
    header:'проверка',
    body : [{
    title : "Заголовок",
    text : "asdsadqweqasaddddddx123312222"
 }
 ],
 footer : [{
  acessButton : "Yes",
  nonButton : "No"
 }]
  }
]
let buttonNameShow = sliders.map(res => {
    return res.buttonName;
})
console.log(showModal)
</script>

<template>
<div>
  <!-- use the modal component, pass in the prop -->
  <template  v-for="slider in sliders"
 :key="slider.id">
  <Slider 
  v-if="slider.vision.value"
  @close="slider.vision.value = false"
  @open="slider.vision.value = true">
  <template v-slot:header>
    <h5>{{slider.header}}</h5>
  </template>
   <template v-slot:body 
   v-for="body in slider.body" :key="body.id" >
    <h4 >{{body.title}}</h4>
    <p>{{body.text}}</p>
  </template>
  </Slider>
  </template>
    
    
<ButtonActivation
:massPop = "massPop"
:buttonNameShow = "buttonNameShow"
/>
<ModalWindow/>
</div>
</template>