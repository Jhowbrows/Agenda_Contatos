const form = document.getElementById('form-contato');
let nomes = [];
let numeros = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    verificaArrays();
    
})


function adicionaLinha(){
    const inputNomeContato = document.querySelector('#form-nome');
    const inputNumeroContato = document.querySelector('#form-numero');


    if(nomes.includes(inputNomeContato.value)){
        alert(`O nome ${inputNomeContato.value} ja foi adicionado, tente outro nome.`)
    }else if(numeros.includes(parseInt(inputNumeroContato.value))){
        alert(`O número ${inputNumeroContato.value} já foi adicionado, tente outro.`)
    }else {
        nomes.push(inputNomeContato.value);
    numeros.push(parseFloat(inputNumeroContato.value));
    
    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

    }
};


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function verificaArrays(){
    console.log(nomes)
    console.log(numeros)
}