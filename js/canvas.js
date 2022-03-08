
//************CANVAS*************/
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.lineWidth = 3;
    function textoVidas() {
        pincel.font="20px Arial black";
        pincel.fillStyle="grey";
        pincel.fillText("Intentos: ", 75, 50);
    }

    function clier(){
        pincel.beginPath();
        pincel.moveTo(175,50);
        pincel.fillStyle="white";
        pincel.fillRect(175,20,30,30);
        
    }
    function numeroVidas(vidas){
        pincel.font="25px Arial black";
        pincel.fillStyle="blue";
        pincel.fillText(vidas, 175, 50);
    } 

    function mensajeLetrasErradas(LetrasErroneas,key) {
        
        pincel.font="20px Arial black";
        pincel.fillStyle="grey";
        pincel.fillText("Letras erradas:", 620, 50);
}

    function casilla(x){
        pincel.lineWidth = 1;
        pincel.beginPath();
        pincel.strokeRect(x,500,60,60);
    }

    function texto(x,texto){
        pincel.font="45px Arial black";
        pincel.fillStyle="green";
        pincel.fillText(texto, x, 550);
        
    }



    function errada(LetrasErroneas){
        pincel.beginPath();
        pincel.font="20px Arial black";
        pincel.fillStyle="red";
        var x = 810;
       // if (LetrasErroneas[0] != ""){
        for (j=0; j<LetrasErroneas.length; j++) {
                    pincel.fillText(LetrasErroneas[j], x, 50);  
                    x = x + 30;
                    pincel.moveTo(x,50);
          }
      //  }
        pincel.stroke();

        if (LetrasErroneas.length == 1) {
            cabeza();
        }  
        if (LetrasErroneas.length == 2) {
            tronco();
        }
        if (LetrasErroneas.length == 3) {
            brazoDer();
        }
        if (LetrasErroneas.length == 4) {
            brazoIzq();
        }
        if (LetrasErroneas.length == 5) {
            piernaDer();
        }
        if (LetrasErroneas.length == 6) {
            piernaIzq();

        }
    }

    function correcta (palabraelegida,key) {
        //pincel.beginPath();
        pincel.font = "35px Arial black";
        pincel.fillStyle = "green";
        var separacion = 115;

        for (i=0; i<palabraelegida.length; i++) {
            if (palabraelegida[i] == key) {
                pincel.fillText(key,separacion,550);
                correctas = correctas + 1;
                console.log(correctas);
            }
            separacion = separacion + 100;
            pincel.moveTo(separacion,550);
        }
        pincel.stroke();
    }

    function cabeza (){
        pincel.beginPath();
        pincel.moveTo(0,0);
        pincel.fillStyle="black";
        pincel.arc(300,140, 20, 0, 2*3.14);
        pincel.fill();
        //pincel.arc();
    }

    function tronco(){
        //pincel.beginPath();
       // pincel.fillStyle="black";
        pincel.moveTo(300,160);
        pincel.lineTo(300,250);
        pincel.stroke();

    }
    
    function base(){
        pincel.beginPath();
        pincel.moveTo(100,400);
        pincel.fillStyle="black";
        pincel.lineTo(300,400);
        pincel.lineTo(200,350);
        pincel.fill();
    }

    function sosten(){
       // pincel.beginPath();
        pincel.moveTo(200,350);
       // pincel.fillStyle="black";
        pincel.lineTo(200,100);
        pincel.lineTo(300,100);
        pincel.lineTo(300,120);
        pincel.stroke();
    }

    function brazoIzq(){
       // pincel.beginPath();
        pincel.moveTo(300,180);
       // pincel.fillStyle="black";
        pincel.lineTo(250,200);
        pincel.stroke();
    }

    function brazoDer(){
        //pincel.beginPath();
        pincel.moveTo(300,180);
        //pincel.fillStyle="black";
        pincel.lineTo(350,200);
        pincel.stroke();
    }

    function piernaIzq(){
       // pincel.beginPath();
       // pincel.fillStyle="black";
        pincel.moveTo(300,250);
        pincel.lineTo(350,270);
        pincel.stroke();
    }
    
    function piernaDer(){
       // pincel.beginPath();
      // pincel.fillStyle="black";
        pincel.moveTo(300,250);
        pincel.lineTo(250,270);
        pincel.stroke();
    }

    function MsjeGano() {
       // pincel.beginPath();
       // pincel.moveTo(150,800)
        pincel.font="30px Arial black";
        pincel.fillStyle="green";
        pincel.fillText("Felicitaciones, Ud ganó!",400,250);
    }

    function MsjePerdio() {
        pincel.font="30px Arial black";
        pincel.fillStyle="red";
        pincel.fillText("Ud perdió, la palabra era "+ palabra,400,250);
    }

    