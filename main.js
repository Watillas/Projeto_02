const form = document.getElementById("formulario")

const NomeCadastrado = []
const NumeroCadastrado = []

form.addEventListener('submit', function(event){
    event.preventDefault()

const inputNome = document.getElementById('nome').value;
const inputNumero = document.getElementById('numero').value;


NomeCadastrado.push('nome');
NumeroCadastrado.push('numnero');

adicionarlinha(inputNome, inputNumero);

document.getElementById('nome').value = '';
document.getElementById('numero').value = '';

})

function adicionarlinha(nome,numero) {
    const corpoDaTabela = document.querySelector('tbody');
    const novaLinha = corpoDaTabela.insertRow();

    let cellNome = novaLinha.insertCell(0);
    let cellTelefone = novaLinha.insertCell(1);

    cellNome.textContent = nome;
    cellTelefone.textContent = numero;

    
}