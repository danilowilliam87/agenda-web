//url
const url = "http://localhost:8080/contato/salvar";

//referencia aos elementos da página
let inNome = document.querySelector("#nome");
let inTelefone = document.querySelector("#telefone");
let inEmail = document.querySelector("#email");
let btEnviar = document.querySelector("#btEnviar")
let message = document.querySelector("#message");

const nome = inNome.value;
const mail = inEmail.value;
const phone = inTelefone.value;

//objeto que será enviado na requisição
let contato = {nome,email,telefone};

contato.nome = nome;
contato.email = mail;
contato.telefone = phone;


const options = {
    method:'POST',
    headers: {'Content-Type' : 'application/json'},
    body:JSON.stringify(contato),
    mode:'cors'
    
}

btEnviar.addEventListener("click", postContato);

function postContato() {
    //método POST
    
    fetch(url,options)
    .then((resposta) => resposta.json())
    .then((resposta) => console.log(resposta));
    

}



