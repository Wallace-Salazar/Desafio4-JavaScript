//1 - crie uma função que exiba uma mensagem no console
function desafio() {
  console.log("desafio 4");
}
desafio();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function parâmetro(name) {
  console.log(`Olá ${name}, ja viram meu ultimo projeto?`);
}
parâmetro("Wallace");
parâmetro("Stéfany");
parâmetro("Leandro");

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function dados(name, idade, estilo) {
  console.log(
    `ola, me chamo ${name}, tenho ${idade} e meu estilo musical ${estilo}.`
  );
}
dados("wallace", "20 anos", "preferido é pop");
dados("Stéfany", "33 anos", "é bem diversificado");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function dados2(filme, musica) {
  console.log(
    `um dos meus filmes favoritos é ${filme}, e uma das musicas qur amo é ${musica}`
  );
}
dados2("The Greatest Showman", "Easy On Me - Adele");

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(x) {
  return x * 3;
}
console.log(triplo(8));
