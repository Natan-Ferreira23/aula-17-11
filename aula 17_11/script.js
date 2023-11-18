function limpaForm (){
    document.getElementById('nome').value='';
    document.getElementById('email').value='';
    document.getElementById('senha').value='';
}
function validarSenha(){
    var expregular= /^(?=.*[a-zA-2])(?=.*\d).+$
    if(expregular.test(senha)){
        console.log('true');
        return true;
    }
    else{
        alert(' deu errado');
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(event){
     event.preventDefault();
     let linha =document.createElement('tr');
     let colNome= document.createElement('td');
     let colEmail = document.createElement('td');
     let colSenha= document.createElement('td');
     colNome.innerHTML= document.getElementById('nome').value; 
     colEmail.innerHTML=document.getElementById('email').value;
     colSenha.innerHTML=document.getElementById('senha').value;
     linha.appendChild(colNome);
     linha.appendChild(colEmail);
     linha.appendChild(colSenha);
     let nome = document.getElementById('nome');
     let email = document.getElementById('email');
     let senha = document.getElementById('senha');     
    if(nome.value.length>3 && email.value.length>0   && validarSenha(document.getElementById('senha').value)){  
    
     let corpoTabela=document.querySelector('tbody');
     corpoTabela.appendChild(linha);
    
    }
    else{
        alert('Digite um nome com mais de 3 letras e um email não nulo !');
    }

     limpaForm();

    })
})