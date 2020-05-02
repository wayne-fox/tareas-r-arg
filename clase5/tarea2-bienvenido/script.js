//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
    <form id="entrada-bar" onsubmit="return false;">
        <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
        <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
        <input type="submit" value="Ingresar" id="ingresar"/>
    </form>

    <div id="resultado">Hola</div>
*
* */

function ingresar() {
    let titulo = document.querySelector("#titulo");
    let saludo = document.querySelector("#saludo");

    let primerNombre = document.querySelector("#primer-nombre").value;
    let segundoNombre = document.querySelector("#segundo-nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let edad = document.querySelector("#edad").value;

    saludo.innerText = `¡Hola, ${primerNombre} ${segundoNombre} ${apellido}, ${edad}!`;
    titulo.innerText = `¡Bienvenido, ${primerNombre}!`;
}
