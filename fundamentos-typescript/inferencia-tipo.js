var quantidade = 20; //ts infere que é do tipo number
// quantidade = ''; -> nao compila!
var x = [1, 2, null]; //ts infere que o array é do tipo number
//x[0] = true -> nao compila!
//Contextual Typing
window.onmousedown = function (evento) {
    //deduz que evento é do tipo MouseEvent
};
