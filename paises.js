const prompt = require("prompt-sync")();
const paises = []

const lerIndice = mensagem => {
    const i = parseInt(prompt(mensagem))
}
const listagem = () => {
    console.log("Países cadastrados: ")
    paises.forEach((pais, i) => {
        console.log(`
        Registro: ${i+1}
            País: ${paises.nome}`)
    })
}
const modelo = () => {
    let pais = {}

    while(true){
        pais.nome = prompt("Qual o nome do país?");
        if(pais.nome != ""){
            break;
        }else{
            console.log("O nome não pode estar vazio!");
        }
    }
    pais.estados = [];
    return pais
}

const cadastro = () => {
    const pais = modelo();
    paises.push(modelo);
    return
}
const atualizar = () => {
    if(paises.length == 0){
        console.log("Sem países cadastrados!");
        return
    }else{
        listagem();
        while(true){
            const indice = lerIndice("Informe o registro que deseja atualizar: ");
            if(indice < 0 || isNaN(indice) || indice >= paises.length){
                console.log("Registro não encontrado!");
            }else{
                const pais = modelo();
                paises[i] = pais;
                break;
            }
            
        }
    }
}


module.exports = {
    cadastro,
    listagem,
    atualizar,
}
