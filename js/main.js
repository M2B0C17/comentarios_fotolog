/*aquí va tu código*/
// Funcion que agrega los comentarios
function agregaPosteo() {
	var containerPosteos = document.getElementById('contenedorPosteos');
	var nombreFF = document.getElementById('nombre').value;
	var contenidoFF = document.getElementById('valor').value;

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

function borrarTodo(){
  sessionStorage.clear();
  recoverData();
}
