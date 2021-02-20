//var, let e const


//var
function iniciarTime(iniciaJogoEmUberlandia: boolean){
    const nome: string='Messi e amigos';
    let cidade: string='em Barueri' 
    
    if (iniciaJogoEmUberlandia){
        cidade = 'em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);

}

iniciarTime(false);
