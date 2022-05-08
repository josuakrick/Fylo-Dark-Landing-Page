var emailInput = document.querySelector('.email').value;
var mensagemErro = document.querySelector('span');

function checkEmail() {
  if(emailInput.value == "" || emailInput.indexOf('@')==-1 
  || emailInput.value.indexOf('.')==-1 ) {
     mensagemErro.classList.add('show')
  } else {
      mensagemErro.classList.remove('show')
  }
}

