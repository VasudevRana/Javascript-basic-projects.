const button =document.querySelector('#button');
const messageIn=document.querySelector('#messageIn');
const messageOut=document.querySelector('#messageOut');

button.addEventListener('click',myFunction);

function myFunction(){

    let content=messageIn.value;
    if(content===''){
        alert('Write Something');
        

    }
    else{
        messageOut.innerHTML=content;
        messageIn.value='';
    }



}