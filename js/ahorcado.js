//Declaro el repositorio de palabras
var repositorio = ["MANZANA","JUGO", "PROTEINA", "CRIPTO", "ETHER", "BITCOIN", "INVERSION", "LIBERTAD","AMOR","PALANCA", "CERVEZA","MUSICA","BIENESTAR", "MUSCULOS","DEPORTE"]

//Declaro variable para guardas las palabras nuevas
var palabrasElegidas = [];
var inicioJuego = false;
var palabra = sorteoPalabra(); 
var letrasIngresadas = [];
var LetrasCorrectas = [];
var LetrasErroneas = [];
var fin;
var correctas = 0;
var reload = document.getElementById('reload');
reload.classList.add("invisible");
//-----VERIFICO TECLA PRESIONADA-------------
function verificarLetra (key){
        var correcto = false
        var abc = new RegExp ("[A-ZÑ]");
        if (abc.test(key) && key.length == 1) {
              correcto = true;  
        }
        return correcto;
}

//----VERIFICO EN INPUT AGREGAR PALABRA--------
function verificarTexto(key) {
        var correcto = false
        var abc = new RegExp ("[A-ZÑ]$");
        var space = /\s/;
        if (abc.test(key) && !space.test(key)) {
                correcto = true;
        }
        return correcto;
}

//---SORTEO PALABRA-----
function sorteoPalabra() {
        var palabraElegida = repositorio[(Math.round(Math.random(repositorio)*repositorio.length))];
        //splitPalabra = palabraElegida.split("");
        return palabraElegida;
    }
//--VERIFICO SI SE TERMINO EL JUEGO
function finAhorcado (vidas) {
        var fin = false;
        if (vidas == 6) {
                fin = true
        }
        return fin;
}

//------DIBUJO CASILLEROS----------
function casilleros(){
        var x=0;
        for (i=0; i< palabra.length; i++){
                x= x + 100;
                casilla(x);
        }
}

//----ARRAY PARA LAS LETRAS INGRESADAS, VERIFICO QUE NO SE REPITAN------
function letrasIn (letrasIngresadas, key) {
        var encontrada = false;

        if (letrasIngresadas[0] == "") {
                letrasIngresadas.push(key);
        } else { 
                for (i=0; i < letrasIngresadas.length; i++) {
                        if (letrasIngresadas[i] == key){
                            encontrada = true;
                        }
                }
              if (!encontrada) {
                letrasIngresadas.push(key);
                 }
        }
        return letrasIngresadas;
}

function ganado(palabra,correctas){
        var finalizo = false;
        if (palabra.length == correctas){
           finalizo = true;
           }
           return finalizo;
        }




//---ESCUCHO LAS TECLAS PRESIONADAS EN EL DOCUMENTO-------------------    
document.addEventListener('keydown', (event) => {
        var keyL = event.key; //---capto el ingreso de teclas--
       
        var key = keyL.toUpperCase(); //---las transformo a mayúsculas
        
        var LetrasCorrectas = [];
        
        if (!fin && inicioJuego) {
                if(verificarLetra(key)){
                   const estaLaLetra = new RegExp(key)
                        
                   if (estaLaLetra.test(palabra)) {
                           letrasIn(LetrasCorrectas,key);
                           
                           
                   }  else {
                           letrasIn(LetrasErroneas,key);
                           
                   }

                }
                   
                for (i=0; i < LetrasCorrectas.length; i++) {
                        
                        correcta(palabra,LetrasCorrectas[i]);
                        
                }
        
        
                 errada(LetrasErroneas);
                 clier();
                 numeroVidas(LetrasErroneas.length);  
                    
                
                if (finAhorcado(LetrasErroneas.length)) {
                   //alert("Perdiste, Fin del juego!");     
                   fin=true;
                   MsjePerdio();
                   //break;     
                }
                
                if  (ganado(palabra,correctas)){
                        fin = true;
                        inicioJuego = false;
                        //alert("Ud ganó!");
                        MsjeGano();
                       // break;
                }
                                
        }

});    
//-------------------------------------------------------------------------

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
        location.reload();
    });


//------CAPTO BOTON INICIAR JUEGO---------------
var iniciarJuego = document.querySelector("#iniciar-juego");
iniciarJuego.addEventListener("click",function(event){
        event.preventDefault();
        inicioJuego = true;
        var vidas = 0;
        fin = false;
        mensajeLetrasErradas();
        textoVidas(); //---muestro texto vidas:
         //muestro las vidas iniciales
        casilleros(); //---muestro los casilleros donde se van a mostrar las letras acertadas
        base();
        sosten();
        var inputbox = document.querySelector("#input-nueva-palabra");
        iniciarJuego.classList.add("invisible");
        botonAgregar.classList.add("invisible");
        inputbox.classList.add("invisible");
        reload.classList.remove("invisible");
       
      
        
        
        
    

                
        
}); //-----------TERMINO DE ESCUCHAR BOTON JUGAR
   

    
    

//------------BOTON AGREGAR-------------------------
//Capto el boton en una variable
var botonAgregar = document.querySelector("#nueva-palabra");

//escucho al boton agregar palabra
botonAgregar.addEventListener("click",function(event){
        event.preventDefault();
        var palabraAgregada = document.querySelector("#input-nueva-palabra").value;
        if (palabraAgregada != "") {
        repositorio.push(palabraAgregada);
        console.log(palabraAgregada);
        console.log(repositorio);
        }
});
//--------------------------FIN BOTON AGREGAR