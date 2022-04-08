$(document).ready(function () {
  $(".header-profile").on("click", function () {
    $(".popup").toggle();
  });
});



//Функция попапа  

function btnActive(){
  document.getElementById('editePrfile1').style.display = 'inline-block'
  document.getElementById('editePrfile2').style.display = 'inline-block'

  document.getElementById('clossse').style.display = 'none'

}

function closeSS(){
  document.getElementById('popup-photo').style.display = 'none'
  document.getElementById('closeSSE').style.display = 'none'


}

function open_popup(){
  document.getElementById('popup-photo').style.display = 'block'
}

// Функция смены между "Создал", "Поддержал"

let tg1 = document.querySelector('#toggle1')
let tg2 = document.querySelector('#toggle2')

let afterOne = document.querySelector('#selectToForm-1')
let afterTo = document.querySelector('#selectToForm-2')

let elementToClose1 = document.querySelector('#closeElement1')
let elementToClose2 = document.querySelector('#closeElement2')


function closeElement(){
  elementToClose1.style.display = 'none'
  elementToClose2.style.display = 'none'

}

function save(){
  document.getElementById('editePrfile1').style.display = 'none'
  document.getElementById('editePrfile2').style.display = 'none'

  document.getElementById('clossse').style.display = 'block'
}

function toggle1(){
  tg1.style.display = 'block'
  tg2.style.display = 'none'

  afterOne.classList.add('active')
  afterTo.classList += 'main-tab'

  document.getElementById('subscribe').innerText = 'Подписаться'
  document.getElementById('subscribe').style.background = '#15803D'
  document.getElementById('subscribe').style.color = 'white'

}

function redirect(){
  document.getElementById('editePrfile1').style.display = 'none'
  document.getElementById('editePrfile2').style.display = 'none'
  
  document.getElementById('clossse').style.display = 'none'
  

  document.getElementById('coms').style.display = 'block'

}

function comeBack(){
  document.getElementById('editePrfile1').style.display = 'block'
  document.getElementById('editePrfile2').style.display = 'block'

  document.getElementById('clossse').style.display = 'none'
}


function toggle2(){
  tg1.style.display = 'none'
  tg2.style.display = 'block'

  afterTo.classList.add('active')
  afterOne.classList += 'main-tab'

  document.getElementById('subscribe').innerText = 'Вы подписаны'
  document.getElementById('subscribe').style.background = 'none'
  document.getElementById('subscribe').style.color = '#374151'

}



function closeMenuMobi(){
  document.getElementById('closeElmentToMenu').style.display = 'none'
}

// Открытие hover 