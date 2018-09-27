var xx =2;
var otra = "la otra";
var yy = 5;
var zz = 0;
var nombre ="Chente";
var apell = "fernandez";
var mascota =true;
var colores =["azul","roja","verde"];
var persona = {
	nombre:"Pepe",
	edad: 25452,
	sexo: true,
	mascota:{
	 raza:"dalmata",
	 nombre:"tommy"	
	}
}
var frutas =["mazana", mascota, 'lulo', 250, colores[2], colores, persona.sexo, persona.mascota.nombre];
var fecha = new Date();
console.log("Hola Marano tiene="+xx + " en  " + otra+ " Mano:" + (xx*yy) ) ;
console.log("zz= "+zz);
console.log(nombre+"\" aa "+apell+ "Con mascota: "+mascota);
console.log(frutas);
console.log("frutas[4]: "+ frutas[4]);
console.log(persona["edad"]);
console.log(persona.mascota.raza);
console.log(fecha + "y "+ new Date("yyyy-mm-dd"));
console.log(true && false);
console.log(true || false + " == "+ 3>5);
console.log(3%7);

if (frutas[4]==true) {
console.log("persona.sexo " + persona.sexo);	
} else {
	console.log("Falsooo...");	
}

for (var i = 0; i <= frutas.length -1; i++) {
	console.log("Nro " + i + " Valor: " +frutas[i]);	
}

function llamar(x,y){
		return x*y;
}
function mostrar(x,y){
	console.log("funcion mostrar:"+ x*y);
	window.alert(llamar(5,8450));
}

mostrar(4,2);
alert("Ventana multiplca; " + llamar(3,8) + " :" + location.hostname ); 
window.alert("Windos "+mostrar(5,8450));

/*comente*
variable ni inican con numero
*/



