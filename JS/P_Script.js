document.addEventListener("DOMContentLoaded", function () {
  // FILTRO COMPETENCIAS
  const botonesCompetencia = document.querySelectorAll('.btn-competencia');
  const seccionesCompetencia = document.querySelectorAll('.contenido-competencia');

  botonesCompetencia.forEach(boton => {
    boton.addEventListener('click', () => {
      const destino = boton.dataset.target;

      botonesCompetencia.forEach(btn => btn.classList.remove('active'));
      boton.classList.add('active');

      seccionesCompetencia.forEach(seccion => {
        seccion.classList.toggle('activo', seccion.id === destino);
      });
    });
  });

  // Mostrar por defecto "habilidades"
  document.querySelector('#habilidades').classList.add('activo');

  // FILTRO PROYECTOS
  const botonesProyecto = document.querySelectorAll('.btn-proyecto');
  const proyectos = document.querySelectorAll('.proyecto');

  botonesProyecto.forEach(boton => {
    boton.addEventListener('click', () => {
      const filtro = boton.getAttribute('data-filtro');

      botonesProyecto.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');

      proyectos.forEach(proyecto => {
        if (filtro === 'todos' || proyecto.classList.contains(filtro)) {
          proyecto.classList.remove('hidden');
        } else {
          proyecto.classList.add('hidden');
        }
      });
    });
  });
});

// Seleccionamos SOLO los botones y los artículos de formación
const filtroFormacionBtns = document.querySelectorAll('.filtro-formacion-btn');
const formacionItems = document.querySelectorAll('.contenido-formacion');

filtroFormacionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Quitar clase activo de todos los botones
    filtroFormacionBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filtro = btn.getAttribute('data-filtro');

    formacionItems.forEach(item => {
      if (filtro === 'todos' || item.getAttribute('data-categoria') === filtro) {
        item.classList.remove('d-none');
      } else {
        item.classList.add('d-none');
      }
    });
  });
});
