let nomeHeroi;
let qntXp;
let nivelHeroi;

nomeHeroi = "Carlos Henrique"
qntXp = 8500;

if(qntXp < 1000){
    nivelHeroi = "Ferro"
} else if(qntXp >=1001 && qntXp <=2000){
    nivelHeroi = "Bronze"
} else if(qntXp >=2001 && qntXp <=5000){
    nivelHeroi = "Prata"
} else if (qntXp >=5001 && qntXp <= 7000){
    nivelHeroi = "Ouro"
} else if (qntXp >= 7001 && qntXp <= 8000){
    nivelHeroi = "Platina"
} else if (qntXp >= 8001 && qntXp <=9000){
    nivelHeroi = "Ascendente"
}else if (qntXp >= 9001 && qntXp <= 10000){
    nivelHeroi = "Imortaç"
} else {
    nivelHeroi="Radiante"
}

console.log("O Herói " + nomeHeroi + " " + "É do rank" + " " + nivelHeroi)