interface Pessoa{
    idade: number;
    sexo?: string; //nao obrigatorio
}

function imprimirIdade(pessoa: Pessoa){
    console.log(pessoa.idade);
}

let joaoMarcos = {nome: 'João Marcos', idade: 22};

imprimirIdade(joaoMarcos);