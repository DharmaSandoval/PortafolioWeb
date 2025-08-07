document.querySelectorAll('.btn-filtro-proyecto').forEach(boton => {
  boton.addEventListener('click', () => {
    document.querySelectorAll('.btn-filtro-proyecto').forEach(b => b.classList.remove('active'));
    boton.classList.add('active');

    const filtro = boton.getAttribute('data-filtro');
    const tarjetas = document.querySelectorAll('.card-proyecto');

    tarjetas.forEach(card => {
      const categoria = card.getAttribute('data-categoria');
      if (filtro === 'todos' || filtro === categoria) {
        card.style.display = 'flex'; // mostrar
      } else {
        card.style.display = 'none'; // ocultar
      }
    });
  });
});


window.addEventListener('load', () => {
  document.querySelectorAll('.barra').forEach(barra => {
    barra.style.width = barra.style.getPropertyValue('--porcentaje');
  });
});

const botonesFiltro = document.querySelectorAll('.btn-filtro');
const items = document.querySelectorAll('.lista-items .item, .lista-items .item-estudio');

botonesFiltro.forEach(boton => {
  boton.addEventListener('click', () => {
    botonesFiltro.forEach(btn => btn.classList.remove('active'));
    boton.classList.add('active');

    const filtro = boton.getAttribute('data-filtro');

    
  });
});


function abrirModal(event, id) {
  event.preventDefault(); // Evita que la página se suba
  document.getElementById(id).classList.add('activo');
}

function cerrarModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('activo');

  const video = modal.querySelector('video');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll('.btn-filtro-habilidad');
    const categorias = document.querySelectorAll('.categoria');

    botones.forEach(boton => {
      boton.addEventListener('click', () => {
        botones.forEach(btn => btn.classList.remove('activo'));
        boton.classList.add('activo');

        const filtro = boton.getAttribute('data-filtro');

        categorias.forEach(cat => {
          if (cat.getAttribute('data-categoria') === filtro) {
            cat.classList.remove('oculto');
          } else {
            cat.classList.add('oculto');
          }
        });
      });
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
  cambiarIdioma("es");
});


  const toggle = document.getElementById('idioma-toggle');
  const selector = document.querySelector('.selector-idioma');

  toggle.addEventListener('click', () => {
    selector.classList.toggle('active');
  });

  function cambiarIdioma(idioma) {
    console.log('Cambiando a:', idioma);
    // Aquí va tu lógica de idioma
    selector.classList.remove('active'); // Cierra el menú después de seleccionar
  }

