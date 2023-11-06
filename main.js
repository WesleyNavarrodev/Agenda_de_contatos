const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagen/emoji_correto.png" alt="Emoji celebrando" />'; 
const imgReprovado = '<img src="./imagens/emoji_correto.png" alt="Emoji triste" />'; 
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span';
const notaMinima = parseFloat(("Bem vindo ao site do Wesley Navarro:"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`O numero de contato: ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
