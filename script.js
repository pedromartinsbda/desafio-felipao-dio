let nome = "Homem-Aranha"
let xp = 7000
let patente = 0

if (xp < 1000) {
    patente = "Ferro"
} else if (xp >= 1001 && XP <= 2000) {
    patente = "Bronze";
} else if (xp >= 2001 && XP <= 5000) {
    patente = "Prata";
} else if (xp >= 6001 && XP <= 7000) {
    patente = "Ouro";
} else if (xp >= 7001 && XP <= 8000) {
    patente = "Platina";
} else if (xp >= 8001 && XP <= 9000) {
    patente = "Ascendente";
} else if (xp >= 9001 && XP <= 10000) {
    patente = "Imortal";
} else {
    patente = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + patente)
