const bot_refugio = document.querySelector('#boton_refu');
const bot_adoptante = document.querySelector('#boton_adop');

const refu = document.querySelector('#refu');
const adop = document.querySelector('#adop');


function mostrarRefugio() {
    refu.style.display = 'grid';
    adop.style.display = 'none';
    bot_refugio.style.backgroundColor = '#A8D3CC'; // Cambiar color del botón refugio
    bot_adoptante.style.backgroundColor = '#D9D9D9'; // Cambiar color del botón adoptante
}

function mostrarAdoptante() {
    adop.style.display = 'grid';
    refu.style.display = 'none';
    bot_adoptante.style.backgroundColor = '#A8D3CC'; // Cambiar color del botón adoptante
    bot_refugio.style.backgroundColor = '#D9D9D9'; // Cambiar color del botón refugio
}