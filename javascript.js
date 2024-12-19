const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
})

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#mailto')


$form.addEventListener('submit', handleSubtmit)

function handleSubtmit (event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:alexis.r4995@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('mensaje')}`)
    $buttonMailto.click()
}
