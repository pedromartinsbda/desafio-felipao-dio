let nome = "Homem-Aranha"
let XP = 7000
let patente = 0

if (XP < 1000) {
    patente = "Ferro"
} else if (XP >= 1001 && XP <= 2000) {
    patente = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
    patente = "Prata";
} else if (XP >= 6001 && XP <= 7000) {
    patente = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
    patente = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
    patente = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
    patente = "Imortal";
} else {
    patente = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + patente)