let nomeHeroi = "Ioiô"
let nivelHeroi = 17500


if(nivelHeroi <= 1000){
    console.log("O Herói " + nomeHeroi + " e está no nível Ferro");
}else if (nivelHeroi >= 1001 && nivelHeroi <= 2000){
    console.log("O Herói " + nomeHeroi + " e está no nível Bronze");
}else if (nivelHeroi >= 2001 && nivelHeroi <= 5000){
    console.log("O Herói " + nomeHeroi + " e está no nível Prata");
}else if (nivelHeroi >= 5001 && nivelHeroi <= 7000){
    console.log("O Herói " + nomeHeroi + " e está no nível Ouro");
}else if (nivelHeroi >= 7001 && nivelHeroi <= 8000){
    console.log("O Herói " + nomeHeroi + " e está no nível Platina");
}else if (nivelHeroi >= 8001 && nivelHeroi <= 9000){
    console.log("O Herói " + nomeHeroi + " e está no nível Ascendente");
}else if (nivelHeroi >= 9001 && nivelHeroi <= 10000){
    console.log("O Herói " + nomeHeroi + " e está no nível Imortal");
}else{
    console.log("O Herói " + nomeHeroi + " e está no nível Radiante")
}