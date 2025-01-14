//variables

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const buttonReset = document.querySelector("#buttonReset")
const open = document.querySelector("#cookie1")


let phrases = [

"A solidão é a sorte de todos os espíritos excepcionais. Não ser amado é falta de sorte, mas não amar é a própria infelicidade",
"Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
"Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.",
"A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.",
"Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.",
"Que sorte possuir uma grande inteligência: nunca te faltam asneiras para dizer.",
"Uma bela flor é incompleta sem as suas folhas",
"Não importa o tamanho da montanha, ela não pode tapar o sol.",
"O bom-senso vale mais do que muito conhecimento.",
"Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente",
"O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.",
]

//events

open.addEventListener("click",() => {
  toggleScreen();
  newPhrase();
});

buttonReset.addEventListener("click", toggleScreen)

//functions

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function newPhrase() {
  
const randomIndex = Math.floor(Math.random() * phrases.length);  
document.querySelector('.screen2 p').innerText = phrases[randomIndex]

}

