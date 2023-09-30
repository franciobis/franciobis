const front = document.getElementById("front")
const imgf = document.querySelectorAll('.imgf')
const imagenes = document.querySelectorAll('.imgf');
const imagenesb = document.querySelectorAll('.imgb');
const frontend = document.getElementById('frontend');
const backend = document.getElementById('backend');
const navbarToggle = document.getElementById("navbarToggle");
const navbarMenu = document.getElementById("navbarMenu");
var crear = document.getElementById("cont");
var crearb = document.getElementById("contacto");

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});

const textoImagenes = {
  'front': '<h1>Front End</h1> <br>' + 
  '<p>Soy un desarrollador web con especialización en el área de Front End y experiencia en varios lenguajes de programación. ' +
  'en la creación de sitios responsivos, animaciones y aplicaciones interactivas.</p>',

  'framework':  '<h1>Framwork</h1> <br>' + 
  '<p>Tengo conocimientos en tres Frameworks: React, que utilizo para crear interfaces de usuario rápidas y atractivas;' + 
  'Sass, que empleo para mejorar mis habilidades en estilos y optimizar el uso de CSS; y ' +
  'Angular, que utilizo para potenciar mis habilidades en JavaScript.</p>',

  'backend': '<h1>Back End</h1> <br>' + 
  '<p>Tengo conocimientos en Node.js, que principalmente utilizo en servidores y en la estructura de páginas web. También, empleo C# para desarrollar aplicaciones de escritorio.</p>',

  'base-datos': '<h1>Base de datos</h1> <br>' + 
  '<p>Utilizo MySQL como mi principal herramienta de base de datos; no obstante, también poseo experiencia en MongoDB en el mismo ámbito.</p>',

  'api-rest': '<h1>Api Rest</h1> <br>' + 
  '<p>Tengo conocimientos en la consumición de APIs, principalmente utilizando REST como mi enfoque principal.</p>',

  'redes': '<h1>Mis redes sociales</h1><a href="https://www.facebook.com/franciobis">Facebook</a>' + 
  '<a href="https://www.instagram.com/franciobis/">Instagram</a>'+
  '<a href="www.linkedin.com/in/franciobis-stwart-3a9394224">linkedin</a>',

  'github': '<h1>GitHub</h1> <a href="https://github.com/franciobis">Mi Github</a>' + 
  '<a href="https://www.instagram.com/franciobis/">Repositorio del codigo</a>',

  'email':'<h4>Puedes enviarme un Email</h4>' +
  '<form target="_blank" action="https://formsubmit.co/franciobis80@gmail.com" method="POST">' +
      '<input class="input-name" type="text" name="name" placeholder="Nombre" required>' +
      '<input class="input-adress" type="email" name="email" placeholder="Correo Electronico" required>' +
      '<textarea name="message" rows="5" placeholder="Asunto" required></textarea>' +
    '<button type="submit">Enviar</button>' +
  '</form>',


  'curso': '<h1>Cursos</h1>' + 
  '<p>He completado un curso de capacitación en Front End con una duración de 4 meses. Esta capacitación fue llevada a cabo por <a href="https://totidiversidade.com.br">Toti diversidade</a></p>'
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', () => {
    const altText = imagen.getAttribute('alt');
    const texto = textoImagenes[altText];
    const parrafo = document.createElement('div');
    frontend.innerHTML = '';
    parrafo.innerHTML = texto;
    frontend.appendChild(parrafo);
    imagenAgregada = false;
  });
});

imagenesb.forEach((imagen) => {
  imagen.addEventListener('click', () => {
    const altText = imagen.getAttribute('alt');
    const texto = textoImagenes[altText];
    const parrafo = document.createElement('div');
    backend.innerHTML = '';
    parrafo.innerHTML = texto;
    backend.appendChild(parrafo);
    imagenAgregadab = false;
  });
});

var imagenAgregada = false;
var imagenAgregadab = false;

function crearNuevoElemento() {
  
  if (!imagenAgregada) {

    frontend.innerHTML = '';
    var nuevaImagen = document.createElement("img");
    nuevaImagen.src = "imagenes/front.jpg";
    nuevaImagen.alt = "frontend";
    frontend.appendChild(nuevaImagen);
    imagenAgregada = true;
  }
}

function crearNuevoElementob() {
  
  if (!imagenAgregadab) {

    backend.innerHTML = '';
    let nuevaImagen = document.createElement("img");
    nuevaImagen.src = "imagenes/images.jfif";
    nuevaImagen.alt = "backtend";
    backend.appendChild(nuevaImagen);
    imagenAgregada = true;
  }
}

crear.addEventListener("click", crearNuevoElemento);
crearb.addEventListener("click", crearNuevoElementob);

document.getElementById('ini').addEventListener('click', function() {
  let inicio = document.querySelector('.iniciar');
  let inicio2 = document.querySelector('.iniciar2');
  inicio.classList.add('iniciado');
  inicio2.classList.add('iniciado2');
});