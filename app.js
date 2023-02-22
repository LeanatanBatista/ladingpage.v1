/* slide aba responsiva*/
function opentomenu() {
    let open = document.getElementById ('menu-bar');

    if (open.style.width == '300px'){ 
        open.style.width = '0px'
    }
    else {
        open.style.width = '300px'    
    }
} 

/* Inserir bloco de codigo na pagina via link */
document.querySelectorAll('[nav-pg]').forEach(link => {
    const conteudo = document.getElementById('contentpg')

    link.onclick = function(e) {
    e.preventDefault()
    fetch(link.getAttribute('nav-pg'))
        .then(resp => resp.text())
        .then(html => conteudo.innerHTML = html)
    }
})
