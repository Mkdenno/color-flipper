const colors=["pink","red", "blue", "purple", "green","grey","cyan","magenta"];
const buttonEl=document.getElementById("btn");
const color=document.querySelector(".color");

buttonEl.addEventListener('click', function(){
    //get random number between 0-3
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}