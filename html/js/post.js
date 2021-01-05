console.log("ok");

const botao = document.getElementById('btEnviar')

botao.addEventListener('click',function(e){
    e.preventDefault();

    
    
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;

    let contato = {nome, telefone, email};

    contato.nome = nome;
    contato.email = email;
    contato.telefone = telefone;

    console.log(contato);

    const url = 'http://localhost:8080/contato/salvar';
    
    const options = {
        method:'POST',
        headers: {'Content-Type' : 'application/json'},
        body:JSON.stringify(contato)
    }

    fetch(url, options)
    .then(res=>res.json)
    .then(json=>console.log(json))
    .catch(event=>{
        console.log(event);
    })

})