//var, let e const
//var
function iniciarTime(iniciaJogoEmUberlandia) {
    var nome = 'Messi e amigos';
    var cidade = 'em Barueri';
    if (iniciaJogoEmUberlandia) {
        cidade = 'em Uberlândia';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(false);
