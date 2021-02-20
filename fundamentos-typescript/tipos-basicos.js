//boolean
var estaPago = true;
//number
var idade = 20;
var valor = 20.99;
//string
var empresa = 'Microsoft';
//template strings
var nome = 'Joao';
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
//arrays
var notas = [8, 7, 9, 10];
//tuple
var alunos = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
//enum
var Cor;
(function (Cor) {
    Cor[Cor["verde"] = 0] = "verde";
    Cor[Cor["amarelo"] = 1] = "amarelo";
    Cor[Cor["azul"] = 2] = "azul";
    Cor[Cor["branco"] = 3] = "branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.verde;
//any
var algumValor = 4;
algumValor = 'true';
//void
function alerta() {
    //... alert('Operacao nao permitida');
}
//null e undefined
var u = undefined;
var n = null;
