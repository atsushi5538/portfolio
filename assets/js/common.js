/* ハンバーガーメニュー */
function spMenuBtn() {
  js_spMenu.classList.toggle('active');
  wrapper.classList.toggle("fixed");
  console.log('成功');
}
const js_spMenuBtn = document.getElementById('js_spMenuBtn');
const js_spMenu = document.getElementById('js_spMenu');

js_spMenuBtn.addEventListener("click", spMenuBtn, false);


const js_spMenuText = document.getElementsByClassName('spMenuTxt');

for (let i = 0; i < js_spMenuText.length; i++){
  js_spMenuText[i].addEventListener('click', () => {
    console.log('de');
    js_spMenu.classList.remove('active');
    wrapper.classList.remove("fixed");
  }, false);
}

const js_modalBtn = document.getElementsByClassName('modalpict');
for (let modalpict = 0; modalpict < js_modalBtn.length; modalpict++){
  console.log(js_modalBtn);
}

const modalBtn01 = document.getElementById("modalBtn01");
const modalWrap01 = document.getElementById("modal01");
const coloseBtn = document.getElementById("coloseBtn");
const wrapper = document.getElementById("wrapper");
const modalAnime01 = document.getElementById("modalAnime01");


function onClick01() {
  wrapper.classList.toggle("fixed");
  modalWrap01.classList.toggle("active");
  modalAnime01.classList.toggle("active");
}
modalBtn01.addEventListener("click", onClick01, false);
modalWrap01.addEventListener("click", onClick01, false);





const modalBtn02 = document.getElementById("modalBtn02");
const modalCont02 = document.getElementById("modal02");
const modalAnime02 = document.getElementById("modalAnime02");

function onClick02() {
  modalCont02.classList.toggle("active");
  wrapper.classList.toggle("fixed");
  modalAnime02.classList.toggle("active");
}

modalBtn02.addEventListener("click", onClick02, false);
modalCont02.addEventListener("click", onClick02, false);


const modalBtn03 = document.getElementById("modalBtn03");
const modalCont03 = document.getElementById("modal03");
const modalAnime03 = document.getElementById("modalAnime03");

function onClick03() {
  modalCont03.classList.toggle("active");
  wrapper.classList.toggle("fixed");
  modalAnime03.classList.toggle("active");
}

modalBtn03.addEventListener("click", onClick03, false);
modalCont03.addEventListener("click", onClick03, false);


const modalBtn04 = document.getElementById("modalBtn04");
const modalCont04 = document.getElementById("modal04");
const modalAnime04 = document.getElementById("modalAnime04");

function onClick04() {
  modalCont04.classList.toggle("active");
  wrapper.classList.toggle("fixed");
  modalAnime04.classList.toggle("active");
}

modalBtn04.addEventListener("click", onClick04, false);
modalCont04.addEventListener("click", onClick04, false);


const skillParameter = document.getElementsByClassName("skillParameter");
function skill() {
  for (let parameterBar = 0; parameterBar < skillParameter.length; parameterBar++){
    console.log(parameterBar);
    skillParameter[parameterBar].classList.add("num"+ [parameterBar]);
  }
}
skill();


/* スムーススクロール */
// コピペ
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }