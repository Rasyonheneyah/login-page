/*
  Abre ou fecha o menu.
  O stopPropagation impede que o clique
  chegue ao document e feche o menu
  imediatamente (event bubbling).
 */

function showDiv(id, event) {
    event.stopPropagation();
    const dshow = document.getElementById(id)
    dshow.classList.toggle(`show`)
    
     
}

const areaRegister = window.document.getElementById(`main-register`)
const areaLogin = document.getElementById(`page-login`)

function openRegisterToLogin() {
    areaRegister.classList.toggle(`show`)
    areaLogin.classList.toggle(`show`)
}

/*
  Listener global.
  Fecha o menu APENAS quando:
  - ele está aberto (classe 'show')
  - o clique ocorreu fora do menu
 */
const areaMenu = window.document.querySelector(`#menu`)
document.addEventListener('click', (event) => { 

    event.stopPropagation()
    if (areaMenu.classList.contains(`show`)) {
        if (!areaMenu.contains(event.target)) {
            areaMenu.classList.remove(`show`)
        
        }
    }
})
