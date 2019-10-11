
  const encode = (mensaje, offset) =>{

  let newMensaje = '';
  for (let i= 0; i <mensaje.length; i++) {

  let primerASCCI= mensaje.charCodeAt(i)
  let segundoASCCI= (primerASCCI - 65 + offset)%26 + 65;
  }

  // console.log (segundoASCCI);

  newMensaje = newMensaje.concat(String.fromCharCode(segundoASCCI));
}
  console.log (newMensaje)
  encode ('ANA',1)

  const descifrar = (mensaje, offset) =>{
   let newMensaje = '';
 offset = (26 - offset) % 26;
 newMensaje = cifrar(mensaje, offset)

 console.log (newMensaje)

 return newMensaje;
}
descifrar('BOB',1)
