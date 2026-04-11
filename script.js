
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let random = getRandomInt(1, 100);
  console.log(random); 

  let input = document.getElementById('myInput')
  input.addEventListener('input', (click) => {
    console.log('Текущий текст:', event.target.value);
  });

  function getData() {
    let numeric = document.getElementById('myInput').value;
    console.log('Текущий текст:', input.value);
    if (random > input.value){
           document.getElementById('myInout').innerHTML = "Итог - больше чем "+input.value
     
    }
    if (random < input.value){
        document.getElementById('myInout').innerHTML = "Итог - меньше чем "+input.value
  
 }
    if (random = input.value){
        document.getElementById('myInout').innerHTML = "Итог - победа "+input.value

}
 // Получение значения
  }



  const button = document.querySelector('#myButton');
  button.addEventListener('click', function() {
    getData();
  });

