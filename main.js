document.getElementById("Btn").addEventListener("click",function(){
    const interval = setInterval(() =>roleTheDice(false), 50); 
    setTimeout(() => {
        roleTheDice(true)
        clearInterval(interval); 
    }, 1000);
});

document.addEventListener("DOMContentLoaded",function(){
    roleTheDice(true)
});


function roleTheDice(final_role){
    const dice1=document.getElementById("dice1");
    const dice2=document.getElementById("dice2");
    const Val1=Math.floor(Math.random()*6)+1;
    const Val2=Math.floor(Math.random()*6)+1;
    let innerHTMLD1="";
    let innerHTMLD2="";
    for (let i = 0; i < Val1; i++) {
        innerHTMLD1+="<div>•</div>";
    }
    for (let i = 0; i < Val2; i++) {
        innerHTMLD2+="<div>•</div>";
    }
    dice1.innerHTML=innerHTMLD1;
    dice2.innerHTML=innerHTMLD2;
    dice1.className='';
    dice2.className='';
    dice1.classList.add("Dice");
    dice2.classList.add("Dice");
    dice1.classList.add(`V${Val1}`);
    dice2.classList.add(`V${Val2}`);
    const rotate1 = Math.random() * 90 - 45; 
    const rotate2 = Math.random() * 90 - 45;
    const translateX1 = Math.random() * 100-50; 
    const translateY1 = Math.random() * 100-50;
    const translateX2 = Math.random() * 100-50;
    const translateY2 = Math.random() * 100-50;

    dice1.style.transform = `rotate(${rotate1}deg) translate(${translateX1}px, ${translateY1}px)`;
    dice2.style.transform = `rotate(${rotate2}deg) translate(${translateX2}px, ${translateY2}px)`;
    if (final_role){
        dice1.style.transform = ``;
        dice2.style.transform = ``;
    }
}