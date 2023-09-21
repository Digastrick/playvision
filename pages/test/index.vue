<script setup lang="ts">
let {sliders , buttonNameShow } = useModal([
  {valuePop: ref(false),
  button:'test',
  header:'Название окна',
  bodyTitle: 'проверка',
  bodyText:'work', 
  footers :[{name:"yes"},{name:"no"}]},
  {valuePop: ref(false),
  button:'проверка',
  header:'Название Окна',
  bodyTitle: 'Работает!',
  bodyText:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ratione, quae eius nobis dolorum magni reprehenderit iste, error distinctio, nulla quasi qui! Rerum minima vitae iusto nisi, architecto facere adipisci voluptatum.', 
  footers :[{name:"yes"},{name:"no"}]}
  ]);
</script>

<template>
<div>
  <!-- use the modal component, pass in the prop -->
  <template  v-for="slider in sliders"
 :key="slider.id">
  <Slider 
  v-if="slider.vision.value"
  @close="slider.vision.value = false">
  <template v-slot:header>
    <h5>{{slider.header}}</h5>
    <IconsCross/>
  </template>
   <template v-slot:body 
   v-for="body in slider.body" :key="body.id" >
    <h4 >{{body.title}}</h4>
    <p>{{body.text}}</p>
  </template>
  </Slider>
  </template>
    
    
<ButtonActivation
:buttonNameShow = "buttonNameShow"
/>
<ModalWindow/>
</div>
</template>