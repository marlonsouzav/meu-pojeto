const filmes = [
    {
        codigo: 42,
        titulo: "A noite das manas",
        duracao: 7.5,
        atores: ["Messi","Vin Diesel","Madonna"],
        anoDeLancamento: 1997,
        emCartaz: false
        

    },
    {
        codigo: 55,
        titulo: "O preço da torta",
        duracao: 3.5,
        atores: ["Zeca Pagodinho","Elon Musk","Filho do Cristiano Ronaldo"],
        anoDeLancamento: 2021,
        emCartaz: true

    }
    
]

function adicionarFilme(novoFilme){
    filmes.push(novoFilme);

}




const filmeParaAdicionar = {
    codigo: 99,
        titulo: "Dia de Morte",
        duracao: 2,
        atores: ["Albert Einstein","Peppa","Chimbinha"],
        anoDeLancamento: 2070,
        emCartaz: false,

}

    adicionarFilme(filmeParaAdicionar)

   console.log(filmeParaAdicionar)






   function adicionarFilme(filme) { // ouvinte adicionar filme
    filmes.push(filme)
}

function buscarFilme(codigo) {
    return filmes.find((filme) => {
        return filme.codigo === codigo // true || false
    })
}

adicionarFilme({
    codigo: 3,
    titulo: 'Homem Aranha ',
    duracao: 3.5,
    atores: ['fulano 1', 'fulano 2', 'fulano 3'],
    anoLancamento: 2021,
    emCartaz: false
});

const filmeEncontrado = buscarFilme(45);

filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
console.log('Filme encontrado:', filmeEncontrado);