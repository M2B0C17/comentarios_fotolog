/*aquí va tu código*/
// Funcion que agrega los comentarios
function agregaPosteo() {
	var containerPosteos = document.getElementById('contenedorPosteos');
	var nombreFF = document.getElementById('nombre').value;
	var contenidoFF = document.getElementById('valor').value;
  sessionStorage.setItem(nombre, valor);

  /*
  // Recorremos con for nuestro sessionStorage donde con getItem decimos que nos recupere los datos guardados anteriormente.
  for(var i = 0; i < sessionStorage.length; i++){
    sessionStorage.key(i);
    sessionStorage.getItem(nombre, valor);
    document.getElementById('contenedorPosteos').innerHTML = "Nombre : " + nombreFF + "<br/> Comentario: " + contenidoFF;
  }
  */

	var nuevoPost = document.createElement('div');

	var contenedorNombre = document.createElement('strong');
	var contenedorPost = document.createElement('p');
	var separacion = document.createElement('hr');

	//creamos el corazón "font awesome"

	var parrafCorazon = document.createElement('p');
	var i = document.createElement('i');
	parrafCorazon.appendChild(i);

	parrafCorazon.setAttribute('class', 'corazon');
	i.setAttribute('class', 'fa fa-heart', 'corazonsito');
	i.setAttribute('arial-hidden', 'true');

	// Mostrando -> nombre escribió: el comentario

	var nodoNombre = document.createTextNode(nombreFF + ' escribió:');
	var nodoPosteo = document.createTextNode(contenidoFF);

	contenedorNombre.appendChild(nodoNombre);
	contenedorPost.appendChild(nodoPosteo);

	nuevoPost.appendChild(contenedorNombre);
	nuevoPost.appendChild(contenedorPost);
	nuevoPost.appendChild(parrafCorazon);
	nuevoPost.appendChild(separacion);

	i.addEventListener('click', function(){
		i.classList.toggle('rojo');
	});

	nuevoPost.setAttribute('class', 'posteo');

	containerPosteos.appendChild(nuevoPost);

	document.getElementById('nombre').value = '';
	document.getElementById('valor').value = '';

}

// Funcion que limpia los comentarios
function limpiaComentarios(){
  document.getElementById('contenedorPosteos').innerHTML = "Se a limpiado la vista previa de los comentarios";
}



/* Intentos

function guardar(){
  //Captura de datos escrito en los inputs
  var nom = document.getElementById("nombre").value;
  var apel = document.getElementById("valor").value;
  //Guardando los datos en el LocalStorage
  localStorage.setItem("Mi nombre es ...", nombreFF);
  localStorage.setItem("Comento que ...", contenidoFF);
  //Limpiando los campos o inputs
  document.getElementById("nombre").value = "";
  document.getElementById("valor").value = "";
}

function mostrar(){
  //Obtener datos almacenados
  var nombree = localStorage.getItem("Mi nombre es ...");
  var coment = localStorage.getItem("Comento que ...");
  //Mostrar datos almacenados
  document.getElementById("nombree").innerHTML = nombree;
  document.getElementById("coment").innerHTML = coment;
}
*/
