
const hexBTN=document.querySelector(".hexBtn");//button select
const bodyBCG=document.querySelector('body');//body select kri.
const hex=document.querySelector('.hex');//hex code to where the color hex no. to written

const hexNumbers=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];//value of all hex numbers 0-15;

hexBTN.addEventListener('click', myHex );//addinf event in hexbtn;


function myHex (){//calling function of btn which is clicked;

let hexColor = '#';

for(let i=0;i<6;i++){//generation of for loop that the 1 value should be less than 6(as hex code is {#334325})
    let random=Math.floor(Math.random()*hexNumbers.length);//setting a variable which will have random value 
    hexColor +=hexNumbers[random]//putting the generated random value in hexcolor
}
bodyBCG.style.backgroundColor=hexColor;//adding color to background
hex.innerHTML=hexColor;//writing the value of color generated;
}
