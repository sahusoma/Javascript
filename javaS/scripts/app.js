var titulos= document.getElementsByTagName('h1');
console.log(titulos);

var texRojo =document.getElementsByClassName('rojo');
console.log(texRojo);
//console.log(texRojo[0].textContent;
//texRojo[0].textContent = "Deleeee";

var texfecha =document.getElementById('fecha');
console.log(texfecha[0].textContent);

function cambiar_mensaje() {
var texRojo =document.getElementsByClassName('rojo');	
texRojo[0].textContent = "Cambiado";
	// body...
}

