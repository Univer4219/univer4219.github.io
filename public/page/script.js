/*

Full-Page View:

https://codepen.io/GeorgePark/full/MqVoYP/

⁣⛅ ☁ ☁  ☁  🚁   ✈
🏢🏤_🏬_ / |_\🏫🏢🌳🌳
_____🚋_🚗__🚕______
🏡⁣🏥🏦  /   |🚖\ 🏠🌳🏡
🏡🏡🏪 /    | 🚘\ 🏪🏨
💒 🏨 /     |    \ 🏡🏩

*/

document.addEventListener("DOMContentLoaded", () => {

    const wrapper = document.querySelector('.wrapper'),
          rotateSlider = document.querySelector('.rotate-slider');

    rotateSlider.addEventListener('input', () => wrapper.style.setProperty('--rotate-y', `-${rotateSlider.value}deg`));

    //Detect Apple Device
    if (navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) wrapper.classList.add('apple-os');

});



//fazer a casa1 dar dinheiro
setInterval(()=>{
 // dropar_gold();
},1000);


dropar_gold()


function dropar_gold(){
  try{
    document.getElementById("casa1").innerHTML += "💰"
  }catch(e){
    console.log("erro ao dropar gold ::"+e);
  }
}