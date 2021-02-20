class Cliente{

    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string{
        return `Olá, eu sou o ${this.nome} e tenho ${this.idade} anos.` 
    }

}

let joao: Cliente = new Cliente('João', 20);

let apresentacao: string = joao.apresentar();

console.log(apresentacao);