

const vista1 = document.getElementById('vista1');
const vista2 = document.getElementById('vista2');
// const vista3 = document.getElementById('vista3');
const name = document.getElementById('name');
const noti = document.getElementById('noti');
const cod = document.getElementById('cod');
const desname = document.getElementById('desname');
const desnot = document.getElementById('desnot');
// const desco = document.getElementById('desco');
const name2 = document.getElementById('name2');
const not2 = document.getElementById('not2');

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {

  desname.value = window.cipher.encode(name.value, cod.value);
  desnot.value = window.cipher.encode(noti.value, cod.value);


  vista1.classList.add('hide');
  vista2.classList.remove('hide');

});

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {

  name2.value = window.cipher.decode(desname.value, cod.value);
  not2.value = window.cipher.decode(desnot.value, cod.value);



  vista2.classList.add('hide');
  // vista1.classList.remove('hide');
  document.getElementById('vista3').style.display = 'block';

});
// boton regreso
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {

  document.getElementById('vista3').style.display = 'none';
  // vista3.classList.add('hide');
  vista2.classList.add('hide');
  vista1.classList.remove('hide');
  document.getElementById('name').value = "";
  document.getElementById('noti').value = "";
  document.getElementById('cod').value = "";


});

