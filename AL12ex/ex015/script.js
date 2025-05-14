function verificar() {
   const data = new Date();
   const ano = data.getFullYear();
   const fano  = document.getElementById('txtano');
   const res = document.querySelector('div#res');   
   if (fano.value.length == 0 || Number (fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!');
   }    else{
            const fsex = document.getElementsByName('radsex');
            const idade = ano - Number(fano.value);
            const genero
   }
   
}

