let nome = prompt("Qual seu nome?").toLowerCase
let idade = Number(prompt("Qual sua idade?"))

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

nome === "josé" ? console.log("Oi, Zé!"):console.log("Olá, "+nome);
idade >= 18 ? console.log("pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista")