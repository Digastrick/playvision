<script setup>
import styles from  './modalWindow.module.scss'
  let modals = [
    {
        header : "название окна",
        bodys :
        [  
        { title : "test",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quae eius nobis dolorum magni reprehenderit iste, error distinctio, nulla quasi qui! Rerum minima vitae iusto nisi, architecto facere adipisci voluptatum.",
        }
        ]
   },
    {
        header : "Название окна",
        bodys:
        [{
            title : "Заголовок",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quae eius nobis dolorum magni reprehenderit iste, error distinctio, nulla quasi qui! Rerum minima vitae iusto nisi, architecto facere adipisci voluptatum.",
        }]
    }
  ]

</script>

<template>
<ul :class="styles.test" v-for="modal in modals" :key="modal.id">
<li>{{modal.header}}</li>
   <li v-for="body in modal.bodys" :key = "body.id">
   <h2>{{body.title}}</h2>
   <p>{{body.text}}</p>
   </li>

</ul>
</template>

<style lang ='scss'></style>