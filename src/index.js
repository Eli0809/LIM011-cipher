

const vista1 = document.getElementById('vista1');
const vista2 = document.getElementById('vista2');
const vista3 = document.getElementById('vista3');

const btn = document.getElementById('btn');
btn.addEventListener('click',() => {
  //alert(`Cifrando datos`);

vista1.classList.add('hide');
vista2.classList.remove('hide');

});

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click',() => {

vista2.classList.add('hide');
vista3.classList.remove('hide');
});
