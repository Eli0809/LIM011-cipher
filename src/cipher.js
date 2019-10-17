window.cipher = {
    encode: (mensaje, offset) => {
        let newMensaje = '';
        let primerASCCI = 0;
        let segundoASCCI = 0;
        offset = parseInt(offset);
        for (let i = 0; i < mensaje.length; i++) {

            primerASCCI = mensaje.charCodeAt(i);

            if (primerASCCI >= 65 && primerASCCI <= 90) {
                segundoASCCI = (primerASCCI - 65 + offset) % 26 + 65;
                

            } else if (primerASCCI >= 97 && primerASCCI <= 122) {
                segundoASCCI = (primerASCCI - 97 + offset) % 26 + 97;
                
            } else {
                segundoASCCI = 32;            
            }   
            
            newMensaje = newMensaje.concat(String.fromCharCode(segundoASCCI));
        } 
        return newMensaje;
    },

    decode: (mensaje, offset) => {
        let newMensajeDos = '';
        let primerASCCI = 0;
        let segundoASCCI = 0;
        offset = parseInt(offset);
        for (let j = 0; j < mensaje.length; j++) {

            primerASCCI = mensaje.charCodeAt(j);

            if (primerASCCI >= 65 && primerASCCI <= 90) {
                segundoASCCI = (primerASCCI + 65 - offset) % 26 + 65;
                

            } else if (primerASCCI >= 97 && primerASCCI <= 122) {
                segundoASCCI = (primerASCCI - 97 - offset + 52) % 26 + 97;
                
            } else {
                segundoASCCI = 32;
           
            } newMensajeDos = newMensajeDos.concat(String.fromCharCode(segundoASCCI));
             
            // segundoASCCI = (primerASCCI - 65 - offset + 26) % 26 + 65;
            // newMensajeDos = newMensajeDos.concat(String.fromCharCode(segundoASCCI));
        }
        return newMensajeDos;
    }
}    