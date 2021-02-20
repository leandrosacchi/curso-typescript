//boolean
let estaPago: boolean = true;

//number
let idade: number = 20;
let valor: number = 20.99;

//string
let empresa: string = 'Microsoft';

//template strings
let nome: string = 'Joao'
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);

//arrays
let notas: number[] = [8, 7, 9, 10];

//tuple
let alunos: [string, number, string] = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);

//enum
enum Cor {verde, amarelo, azul, branco};
let corFundo: Cor = Cor.verde;

//any
let algumValor: any = 4;
algumValor = 'true';

//void
function alerta(): void{
    //... alert('Operacao nao permitida');
}

//null e undefined
let u: undefined = undefined;
let n: null = null;
