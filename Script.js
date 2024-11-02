console.log("array");

// array conjunto de dados
// variavel especial que armazena mais de um dado;
// varivael  que guarda apenas um dado =>
//let nome = "Luan";

// como criamos um array
// [] colchetes
// cada item tem que ser separado por ,

let animais = ["Gato", "Cachorro", "Arara", "Camelo", "Macaco", "Coruja"];

console.log(animais[0])// Gato
// array


//splice() 
// adiciona, remove ou substitui os elementos do array

//splice(indice/posição, item a ser deletado/0, elemento a ser adicionado )

// splice(posição, deleta, adiciona);

//  posição:    0        1      2               
let frutas = ["morango", "caju", "melancia"];
//remoção:
frutas.splice(0,1);
//console.log(frutas);

//adicionando:
frutas.splice(1,0,"uva", "palma de banana");
//console.log(frutas);

//substituição:
frutas.splice(1,1,"laranja");
console.log(frutas);


// Objeto {} -  Coleção de propriedade 
// array []

let desafioSamuel = {
    nome: "Samuel Oliveira",
    idade: 29,
    situacao: true
};
