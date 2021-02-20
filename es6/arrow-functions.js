const precos = ['10', '23', '19'];

//const valorEmReais = precos.map(function(preco) {
//    return 'R$ '+preco+ ',00';
//});

const valorEmReais = precos.map(preco => 'R$ '+preco+ ',00');

console.log(valorEmReais);

const acimaDeVinte = precos
        .filter(preco => preco > 20)
        .map(preco => 'R$ '+preco+ ',00');

console.log(acimaDeVinte);
