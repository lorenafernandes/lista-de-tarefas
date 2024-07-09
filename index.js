function abrirTarefa() {
    overlay.classList.add("active");
    criarTarefa.classList.add("active");
}

function fecharTarefa() {
    overlay.classList.remove("active");
    criarTarefa.classList.remove("active");
}

function buscarTarefas(){
    fetch("http://localhost:3000/tarefas")
    .then(res => res.json())
    .then(res => {
        inserirTarefas(res);
    })
} buscarTarefas();

function inserirTarefas(tarefas){
    if(tarefas){
        const lista = document.getElementById("lista")
        tarefas.map(tarefa => {
            lista.innerHTML += `
                <li>
                    <h5>${tarefa.titulo}</h5>
                    <p>${tarefa.descricao}</p>
                    <div class="fechar">
                        <box-icon name='trash-alt' size="sm" onclick="deletarTarefa(${tarefa.id})"></box-icon>
                    </div>
                </li>
            `;
        })
    }
}

function novaTarefa(){
    event.preventDefault();
    let tarefa = {
        titulo: titulo.value,
        descricao: descricao.value
    }

    fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(tarefa)
    })
    .then(res => res.json())
    .then(res => {
        fecharTarefa();
        buscarTarefas();
    })
}

function deletarTarefa(id){
    fetch(`http://localhost:3000/tarefas/${id}` ,{
        method: "DELETE",
    })
    .then(res => res.json())
    .then(res => {
        alert("Tarefa deletada com sucesso");
        buscarTarefas();
    })
}

function pesquisarTarefas(){
    let lis = document.querySelectorAll("ul li");
    console.log(lis);
    lis.forEach(li => console.log(li.children[0].innerText))
    if(busca.value.length > 0){
        
    }
}