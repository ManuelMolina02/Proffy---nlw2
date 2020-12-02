// -----------> Duplicar elemento HTML <-----------

// procurar o botao
document.querySelector("#add-time")
    // quando clicar no botao
    .addEventListener('click', cloneField)
// executar ação
function cloneField() {
    // duplicar os campos, mas que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos, que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo limpar, que campos?
    fields.forEach(function(field){
        //pegar o field do momento e limpar ele
        field.value = ""
    })
    // colocar na página: onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}