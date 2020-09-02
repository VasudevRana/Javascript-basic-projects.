const btn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A'];

btn.addEventListener('click', myColor);

function myColor(){

 let random = Math.floor(Math.random()*colors.length)
bodyBcg.style.backgroundColor = colors[random];
}