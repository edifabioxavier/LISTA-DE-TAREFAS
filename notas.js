const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaLista = []
function addTarefa(){
    minhaLista.push({
        tarefa: input.value,
        concluida: false
    })
    mostrarTarefa()
    input.value = ''
}

function mostrarTarefa(){
let newLi = ``
minhaLista.forEach((item, posicao) => {
    newLi = newLi + `<li class="task ${item.concluida && "done"}">
                <i class="fa-solid fa-check" onclick="concluir(${posicao})" ></i>
                <p>${item.tarefa}</p>
                <i class="fa-solid fa-trash-can" onclick="deletarItem(${posicao})"></i>
            </li>`
})
listaCompleta.innerHTML = newLi
localStorage.setItem('lista', JSON.stringify(minhaLista))
}



function deletarItem(posicao){
    minhaLista.splice(posicao, 1)
    mostrarTarefa()
}

function concluir(posicao){
   minhaLista[posicao].concluida = !minhaLista[posicao].concluida

   mostrarTarefa()
}

function recarregar(){
    const tarefasStorage = localStorage.getItem('lista')
    if (tarefasStorage){
    minhaLista = JSON.parse(tarefasStorage)
    }
    mostrarTarefa()
}

recarregar()
button.addEventListener('click', addTarefa);