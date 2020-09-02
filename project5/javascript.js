let counter = document.querySelector('.counter');
const lowerButton = document.querySelector("#LowerBTN");
const addButton = document.querySelector("#AddBTN");

let count = '0';

lowerButton.addEventListener('click', myDecrement);
addButton.addEventListener('click', myIncrement);



function myIncrement() {
    count++
    counter.innerHTML = count;
    if (counter.innerHTML > 0) {
        counter.style.color = 'green'
    }
    else if (counter.innerHTML === '0') {

        counter.style.color = 'black';
    }
    
}
    function myDecrement() {
        count--
        counter.innerHTML = count;

        if (counter.innerHTML < 0) {
            counter.style.color = 'red'
        }
        else if (counter.innerHTML === '0') {
    
            counter.style.color = 'black';
        }
       
    }

