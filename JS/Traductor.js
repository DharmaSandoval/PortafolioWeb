// Traductor.js

// Objetos con traducciones, sin tocar "Licenciatura en Multimedia y Animación Digital" ni "Universidad Autónoma de Nuevo León"
const textos = {
  es: {
    "hero-h1": "Hola, Soy Dharma",
    "hero-p": "Desarrolladora Front-End y Artista 3D especializada en sitios interactivos y entornos en Videojuegos 3D.",
    "btn-proyectos": "Ver Proyectos",
    "btn-cv": "Descargar CV",
    "sobre-mi-h2": "Sobre mí",
    "sobre-mi-p1": "Soy Dharma Sandoval, programadora Front-End y Artista 3D con pasión por transformar ideas en experiencias digitales envolventes. Me especializo en crear interfaces limpias y dinámicas, así como entornos 3D para videojuegos y animaciones.",
    "sobre-mi-p2": "Mi objetivo es unirme a proyectos innovadores donde pueda aportar creatividad y técnica, y continuar creciendo profesionalmente en el mundo de la tecnología y el arte digital.",
    "formacion-h2": "Formación Académica",
    "filtro-estudios": "Estudios",
    "filtro-cursos": "Cursos",
    "filtro-idiomas": "Idiomas",
    "cursos-1-h3": "Curso de C++",
    "cursos-1-institucion": "Coursera",
    "cursos-1-fechas": "2023",
    "cursos-1-descripcion": "Curso avanzado sobre el aprendizaje en C++.",
    "cursos-2-h3": "Curso de Blender 3D",
    "cursos-2-institucion": "Udemy",
    "cursos-2-fechas": "2024",
    "cursos-2-descripcion": "Modelado, texturizado y animación básica en Blender.",
    "idioma-espanol-h3": "Español",
    "idioma-espanol-institucion": "Nativo",
    "idioma-espanol-descripcion": "Lengua materna.",
    "idioma-ingles-h3": "Inglés",
    "idioma-ingles-institucion": "Certificado en B1.",
    "idioma-ingles-descripcion": "Ideal para la comunicación y enfoque laboral.",
    "idioma-coreano-h3": "Coreano",
    "idioma-coreano-institucion": "Intermedio",
    "idioma-coreano-descripcion": "Actualmente cursando nivel 9. Preparación para TOPIK 1.",
    "habilidades-h2": "Habilidades",
    "habilidad-front": "Front-End",
    "habilidad-prog": "Programación",
    "habilidad-3d": "3D y Videojuegos",
    "habilidad-herramientas": "Herramientas",
    "proyectos-h2": "Mi Portafolio",
    "filtro-todos": "Todos",
    "filtro-3d": "3D",
    "filtro-programacion": "Programación",
    "filtro-videojuegos": "Videojuegos",
    "proyecto-1-h3": "Rigging 3D",
    "proyecto-1-p": "Rig femenino completo hecho en Autodesk Maya 2023, con controles FK/IK, faciales, blendshapes y skinning optimizado.",
    "proyecto-1-btn": "Ver Proyecto",
    "proyecto-2-h3": "Plataforma E-Commerce",
    "proyecto-2-p": "Desarrollo de plataforma web funcional para E-Commerce con gestión de productos, carrito, wishlist y perfiles de usuario.",
    "proyecto-2-btn": "Ver Proyecto",
    "proyecto-3-h3": "Blog Personal",
    "proyecto-3-p": "Diseño y programación de una plataforma tipo blog con panel de administración, editor de entradas, categorías y sistema de comentarios.",
    "proyecto-3-btn": "Ver Proyecto",
    "proyecto-4-h3": "Animación 3D",
    "proyecto-4-p": "Animación 3D sobre un número musical, hecho en Blender 3.6, con diseño visual, animación de personajes, sincronización musical y renderizado final.",
    "proyecto-4-btn": "Ver Video",
    "proyecto-5-h3": "4 Doors, 4 Seasons",
    "proyecto-5-p": "Desarrollo independiente de videojuego completo en Unreal Engine 4.27, incluyendo diseño de niveles, narrativa, mecánicas y optimización.",
    "proyecto-5-btn": "Ver Proyecto",
    "contacto-h2": "Contacto",
    "contacto-correo-h4": "Correo",
    "contacto-correo": "dharmasanchez76@gmail.com",
    "contacto-telefono-h4": "Teléfono",
    "contacto-telefono": "+52 81 1682 6054",
    "label-ubicacion": "Ubicación:",
    "ubicacion": "Monterrey, México",
    "descripcion-carrera": "Formación enfocada en el área del Desarrollo 3D, creación de videojuegos, programación web, y producción audiovisual.",
    "nivel-basico": "Básico",
"nivel-intermedio": "Intermedio",
"nivel-avanzado": "Avanzado",
  "btn-cv": "Descargar CV",
 "cv-archivo": 'CV_ES_DharmaSandovalSanchez1.pdf'
  },
  en: {
    "hero-h1": "Hi, I'm Dharma",
    "hero-p": "Front-End Developer and 3D Artist specialized in interactive sites and 3D Video Game environments.",
    "btn-proyectos": "See Projects",
    "btn-cv": "Download CV",
    "sobre-mi-h2": "About Me",
    "sobre-mi-p1": "I'm Dharma Sandoval, a Front-End developer and 3D artist passionate about turning ideas into immersive digital experiences. I specialize in creating clean, dynamic interfaces as well as 3D environments for games and animations.",
    "sobre-mi-p2": "My goal is to join innovative projects where I can contribute creativity and technical skills while growing professionally in technology and digital art.",
    "formacion-h2": "Academic Background",
    "filtro-estudios": "University",
    "filtro-cursos": "Courses",
    "filtro-idiomas": "Languages",
    "cursos-1-h3": "C++ Programming",
    "cursos-1-institucion": "Coursera",
    "cursos-1-fechas": "2023",
    "cursos-1-descripcion": "Advanced course on learning C++.",
    "cursos-2-h3": "Blender 3D Course",
    "cursos-2-institucion": "Udemy",
    "cursos-2-fechas": "2024",
    "cursos-2-descripcion": "Modeling, texturing, and basic animation in Blender.",
    "idioma-espanol-h3": "Spanish",
    "idioma-espanol-institucion": "Native",
    "idioma-espanol-descripcion": "Mother tongue.",
    "idioma-ingles-h3": "English",
    "idioma-ingles-institucion": "B1 Certificate.",
    "idioma-ingles-descripcion": "Ideal for communication and work focus.",
    "idioma-coreano-h3": "Korean",
    "idioma-coreano-institucion": "Intermediate",
    "idioma-coreano-descripcion": "Currently enrolled in Level 9. Preparing for TOPIK I.",
    "habilidades-h2": "Skills",
    "habilidad-front": "Front-End",
    "habilidad-prog": "Programming",
    "habilidad-3d": "3D & Video Games",
    "habilidad-herramientas": "Tools",
    "proyectos-h2": "My Portfolio",
    "filtro-todos": "All",
    "filtro-3d": "3D",
    "filtro-programacion": "Programming",
    "filtro-videojuegos": "Video Games",
    "proyecto-1-h3": "3D Rigging",
    "proyecto-1-p": "Complete rig made in Autodesk Maya 2023, with FK/IK controls, facial rigs, blendshapes and optimized skinning.",
    "proyecto-1-btn": "See Project",
    "proyecto-2-h3": "E-Commerce Platform",
    "proyecto-2-p": "Functional web platform for E-Commerce with product management, cart, wishlist and user profiles.",
    "proyecto-2-btn": "See Project",
    "proyecto-3-h3": "Personal Blog",
    "proyecto-3-p": "Design and programming of a blog-type platform with admin panel, post editor, categories and comment system.",
    "proyecto-3-btn": "See Project",
    "proyecto-4-h3": "3D Animation",
    "proyecto-4-p": "3D musical animation in Blender with design, character movement, music sync, and rendering.",
    "proyecto-4-btn": "See Video",
    "proyecto-5-h3": "4 Doors, 4 Seasons",
    "proyecto-5-p": "Independent development of a video game in Unreal Engine, covering level design, mechanics, and optimization.",
    "proyecto-5-btn": "See Project",
    "contacto-h2": "Contact",
    "contacto-correo-h4": "Email",
    "contacto-correo": "dharmasanchez76@gmail.com",
    "contacto-telefono-h4": "Phone",
    "contacto-telefono": "+52 81 1682 6054",
    "label-ubicacion": "Location:",
    "ubicacion": "Monterrey, Mexico",
    "descripcion-carrera": "Training focused on 3D development, video game creation, web programming, and audiovisual production.",
    "nivel-basico": "Basic",
"nivel-intermedio": "Intermediate",
"nivel-avanzado": "Advanced",
"btn-cv": "Download CV",
  "cv-archivo": 'CV_EN_DharmaSandovalSanchez1.pdf'
  }
};

function cambiarIdioma(idioma) {
  try {

    // Hero
    document.querySelector('.contenido-hero h1').textContent = textos[idioma]["hero-h1"];
    document.querySelector('.contenido-hero p').textContent = textos[idioma]["hero-p"];
    document.querySelector('.btn-hero').textContent = textos[idioma]["btn-proyectos"];
    document.querySelector('.btn-hero.secundario').innerHTML = `<i class="bi bi-download"></i> ${textos[idioma]["btn-cv"]}`;

    // Sobre mí
    const sobreMi = document.querySelector('.texto-sobre-mi');
    sobreMi.querySelector('h2').textContent = textos[idioma]["sobre-mi-h2"];
    const pSobre = sobreMi.querySelectorAll('p');
    pSobre[0].textContent = textos[idioma]["sobre-mi-p1"];
    pSobre[1].textContent = textos[idioma]["sobre-mi-p2"];

    // Ubicación
    const liUbicacion = document.querySelector('.datos-personales li');
    if (liUbicacion) {
      liUbicacion.innerHTML = `<strong>${textos[idioma]["label-ubicacion"]}</strong> ${textos[idioma]["ubicacion"]}`;
    }

    // Descripción de carrera
    const descripcionCarrera = document.querySelector('.descripcion');
if (descripcionCarrera) {
  descripcionCarrera.textContent = textos[idioma]["descripcion-carrera"];
}

    // Formación
    document.querySelector('#formacion h2').textContent = textos[idioma]["formacion-h2"];

    const botonesFormacion = document.querySelectorAll('#formacion .btn-filtro');
    botonesFormacion[0].textContent = textos[idioma]["filtro-estudios"];
    botonesFormacion[1].textContent = textos[idioma]["filtro-cursos"];
    botonesFormacion[2].textContent = textos[idioma]["filtro-idiomas"];

    // Cursos
    const cursos = document.querySelectorAll('.lista-items .item[data-categoria="cursos"]');
    if (cursos.length >= 2) {
      cursos[0].querySelector('h3').textContent = textos[idioma]["cursos-1-h3"];
      cursos[0].querySelector('.institucion').textContent = textos[idioma]["cursos-1-institucion"];
      cursos[0].querySelector('.fechas').textContent = textos[idioma]["cursos-1-fechas"];
      cursos[0].querySelector('.descripcion').textContent = textos[idioma]["cursos-1-descripcion"];

      cursos[1].querySelector('h3').textContent = textos[idioma]["cursos-2-h3"];
      cursos[1].querySelector('.institucion').textContent = textos[idioma]["cursos-2-institucion"];
      cursos[1].querySelector('.fechas').textContent = textos[idioma]["cursos-2-fechas"];
      cursos[1].querySelector('.descripcion').textContent = textos[idioma]["cursos-2-descripcion"];
    }

    // Idiomas
    const idiomas = document.querySelectorAll('.lista-items .item[data-categoria="idiomas"]');
    if (idiomas.length >= 3) {
      idiomas[0].querySelector('h3').textContent = textos[idioma]["idioma-espanol-h3"];
      idiomas[0].querySelector('.institucion').textContent = textos[idioma]["idioma-espanol-institucion"];
      idiomas[0].querySelector('.descripcion').textContent = textos[idioma]["idioma-espanol-descripcion"];

      idiomas[1].querySelector('h3').textContent = textos[idioma]["idioma-ingles-h3"];
      idiomas[1].querySelector('.institucion').textContent = textos[idioma]["idioma-ingles-institucion"];
      idiomas[1].querySelector('.descripcion').textContent = textos[idioma]["idioma-ingles-descripcion"];

      idiomas[2].querySelector('h3').textContent = textos[idioma]["idioma-coreano-h3"];
      idiomas[2].querySelector('.institucion').textContent = textos[idioma]["idioma-coreano-institucion"];
      idiomas[2].querySelector('.descripcion').textContent = textos[idioma]["idioma-coreano-descripcion"];
    }

    // Habilidades
    document.querySelector('#competencias h2').textContent = textos[idioma]["habilidades-h2"];
    const botonesHabilidad = document.querySelectorAll('.filtro-habilidades button');
    botonesHabilidad[0].textContent = textos[idioma]["habilidad-front"];
    botonesHabilidad[1].textContent = textos[idioma]["habilidad-prog"];
    botonesHabilidad[2].textContent = textos[idioma]["habilidad-3d"];
    botonesHabilidad[3].textContent = textos[idioma]["habilidad-herramientas"];
    
    const niveles = document.querySelectorAll('.nivel');
niveles.forEach(nivel => {
  const texto = nivel.textContent.trim().toLowerCase();

  if (texto.includes('básico') || texto.includes('basic')) {
    nivel.textContent = textos[idioma]["nivel-basico"];
  } else if (texto.includes('intermedio') || texto.includes('intermediate')) {
    nivel.textContent = textos[idioma]["nivel-intermedio"];
  } else if (texto.includes('avanzado') || texto.includes('advanced')) {
    nivel.textContent = textos[idioma]["nivel-avanzado"];
  }
});


    // Proyectos
    document.querySelector('#proyectos h2').textContent = textos[idioma]["proyectos-h2"];
    const botonesProyectos = document.querySelectorAll('.filtros-proyectos button');
    botonesProyectos[0].textContent = textos[idioma]["filtro-todos"];
    botonesProyectos[1].textContent = textos[idioma]["filtro-3d"];
    botonesProyectos[2].textContent = textos[idioma]["filtro-programacion"];
    botonesProyectos[3].textContent = textos[idioma]["filtro-videojuegos"];

    const proyectos = document.querySelectorAll('.grid-proyectos article.card-proyecto');
    if (proyectos.length >= 5) {
      proyectos[0].querySelector('h3').textContent = textos[idioma]["proyecto-1-h3"];
      proyectos[0].querySelector('p').textContent = textos[idioma]["proyecto-1-p"];
      proyectos[0].querySelector('a.btn-proyecto').textContent = textos[idioma]["proyecto-1-btn"];

      proyectos[1].querySelector('h3').textContent = textos[idioma]["proyecto-2-h3"];
      proyectos[1].querySelector('p').textContent = textos[idioma]["proyecto-2-p"];
      proyectos[1].querySelector('a.btn-proyecto').textContent = textos[idioma]["proyecto-2-btn"];

      proyectos[2].querySelector('h3').textContent = textos[idioma]["proyecto-3-h3"];
      proyectos[2].querySelector('p').textContent = textos[idioma]["proyecto-3-p"];
      proyectos[2].querySelector('a.btn-proyecto').textContent = textos[idioma]["proyecto-3-btn"];

      proyectos[3].querySelector('h3').textContent = textos[idioma]["proyecto-4-h3"];
      proyectos[3].querySelector('p').textContent = textos[idioma]["proyecto-4-p"];
      proyectos[3].querySelector('a.btn-proyecto').textContent = textos[idioma]["proyecto-4-btn"];

      proyectos[4].querySelector('h3').textContent = textos[idioma]["proyecto-5-h3"];
      proyectos[4].querySelector('p').textContent = textos[idioma]["proyecto-5-p"];
      proyectos[4].querySelector('a.btn-proyecto').textContent = textos[idioma]["proyecto-5-btn"];
    }

    // Contacto
    document.querySelector('#contacto h2').textContent = textos[idioma]["contacto-h2"];
    document.querySelector('#contacto .contacto-item:nth-child(1) h4').textContent = textos[idioma]["contacto-correo-h4"];
    document.querySelector('#contacto .contacto-item:nth-child(1) a').textContent = textos[idioma]["contacto-correo"];
    document.querySelector('#contacto .contacto-item:nth-child(2) h4').textContent = textos[idioma]["contacto-telefono-h4"];
    document.querySelector('#contacto .contacto-item:nth-child(2) p').textContent = textos[idioma]["contacto-telefono"];

   // Botón de descarga
const btnCV = document.getElementById("btn-descargar-cv");
btnCV.innerHTML = `<i class="bi bi-download"></i> ${textos[idioma]["btn-cv"]}`;
btnCV.setAttribute("href", textos[idioma]["cv-archivo"]);
btnCV.setAttribute("download", textos[idioma]["cv-archivo"]);



  } catch (error) {
    console.error("Error al cambiar idioma:", error);
  }

   // Quitar el 'active' de todos los botones
  document.querySelectorAll('.selector-idioma button').forEach(btn => {
    btn.classList.remove('active');
  });

  // Agregar 'active' al botón clicado
  event.target.classList.add('active');
}



// FILTROS (Formación, Habilidades y Proyectos)
function setupFiltros() {
  // Formación
  const btnsFormacion = document.querySelectorAll('#formacion .btn-filtro');
  const itemsFormacion = document.querySelectorAll('.lista-items > div[data-categoria]');
  btnsFormacion.forEach(btn => {
    btn.addEventListener('click', () => {
      btnsFormacion.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filtro = btn.getAttribute('data-filtro');

      itemsFormacion.forEach(item => {
        if (filtro === item.getAttribute('data-categoria')) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Habilidades
  const btnsHabilidad = document.querySelectorAll('.filtro-habilidades button');
  const categoriasHabilidad = document.querySelectorAll('.categoria');
  btnsHabilidad.forEach(btn => {
    btn.addEventListener('click', () => {
      btnsHabilidad.forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
      const filtro = btn.getAttribute('data-filtro');
      categoriasHabilidad.forEach(cat => {
        if (cat.getAttribute('data-categoria') === filtro) {
          cat.classList.remove('oculto');
        } else {
          cat.classList.add('oculto');
        }
      });
    });
  });

  // Proyectos
  const btnsProyectos = document.querySelectorAll('.filtros-proyectos button');
  const proyectos = document.querySelectorAll('.grid-proyectos article.card-proyecto');
  btnsProyectos.forEach(btn => {
    btn.addEventListener('click', () => {
      btnsProyectos.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filtro = btn.getAttribute('data-filtro');

      proyectos.forEach(proy => {
        if (filtro === "todos" || filtro === proy.getAttribute('data-categoria')) {
          proy.style.display = "block";
        } else {
          proy.style.display = "none";
        }
      });
    });
  });
}

// Ejecutar setup filtros al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  setupFiltros();
  // Por defecto el idioma español
  cambiarIdioma('es');
});

