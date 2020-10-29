// procurar o botao
document.querySelector("#add-time")


    // quando clicar no botao
    .addEventListener('click', cloneField)

// executar ação
function cloneField() {
    document.querySelector('.schedule-item').cloneNode(true)
    // duplicar os campos, mas que campos?

    // colocar na página