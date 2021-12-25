const typed = new Typed('.typed-skills', {
    strings: [
        '<i class="skills">  </i>',
        '<i class="skills"> C# </i>',
        '<i class="skills"> SQL Server - MySql </i>',
        '<i class="skills"> JavaScript </i>', 
        '<i class="skills"> HTML 5 </i>', 
        '<i class="skills"> CSS3 </i>', 
        '<i class="skills"> Node JS </i>', 
        '<i class="skills"> React </i>',
        '<i class="skills"> PHP </i>'
    ],
    stringsElement: '#cadenasdetexto',
    typeSpeed: 75, //Velocidad en milesegundos para poner una letra,
    startDelay: 300, //Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar.
    backSpeed: 75, //Velocidad en milesegundos para borrar una letra
    smartBackspace: true, //Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, //Alterar el orden en el que se escribe las palabras,
    backDelay: 1500, //Tiempo de espera despues de que termine de escribir una palabra
    loop: true, //Repite el array de strings
    loopCount: false, //Cantidad de veces a repetir el array de strings //false es infinito
    showCursor: true, //Mostrar cursor palpitando
    cursorChar: '', //Caracter para el cursor
    contentType: 'html', //html o null para texto sin formato

});




//Typed para los proyectos que he realizado con mis skills
const typedProyect = new Typed('.typed-proyects', {
    strings: [
        '<i class="proyect"> Con C# y SQL Server o MySql he realizado 3 aplicaciones CRUD y algunos otros proyectos </i>',
        '<i class="proyect"> Con HTML 5, CSS3 y JavaScript diferentes paginas web </i>',
        '<i class="proyect"> Con JavaScript y Node JS y Mongo DB una API Restfull </i>',
        '<i class="proyect"> Con React he realizado mi blog personal y un proyecto de citas </i>',
        '<i class="proyect"> entre otras cosas. </i>'
    ],
    stringsElement: '#projectText',
    typeSpeed: 75, //Velocidad en milesegundos para poner una letra,
    startDelay: 300, //Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar.
    backSpeed: 25, //Velocidad en milesegundos para borrar una letra
    smartBackspace: true, //Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, //Alterar el orden en el que se escribe las palabras,
    backDelay: 1500, //Tiempo de espera despues de que termine de escribir una palabra
    loop: true, //Repite el array de strings
    loopCount: false, //Cantidad de veces a repetir el array de strings //false es infinito
    showCursor: true, //Mostrar cursor palpitando
    cursorChar: '', //Caracter para el cursor
    contentType: 'html', //html o null para texto sin formato
});