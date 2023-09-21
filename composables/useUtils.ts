
export const useUtils = () => {
let showModal = ref(false)
let showTest = ref(false)
let sliders = [
{ vision : showModal,
  buttonName : 'первое окно',
  header:'тест',
  body : [{
  title : null,
  text : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ratione, quae eius nobis dolorum magni reprehenderit iste, error distinctio, nulla quasi qui! Rerum minima vitae iusto nisi, architecto facere adipisci voluptatum."
 }
 ],
 footersButton : null
},
  {
    vision : showTest,
    buttonName : 'Второе  окно',
    header:'проверка',
    body : [{
    title : "Заголовок",
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ratione, quae eius nobis dolorum magni reprehenderit iste, error distinctio, nulla quasi qui! Rerum minima vitae iusto nisi, architecto facere adipisci voluptatum."
 }
 ],
 footersButton : [
    {name:"Yes"},{name :"No"}
 ]
  }
]
let buttonNameShow = sliders.map(res => {

    let name = res.buttonName;
    let nameVision = res.vision;
    res =
        {
            nameButton: name,
            popVision : nameVision
        }
    
    return res;
})

    return{
        sliders , buttonNameShow 
    }
}