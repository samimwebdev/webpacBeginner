import './css/style.css'
import small from './img/small.jpg';
import large from './img/big.jpg';
export function loadsmallImag(){
  const smallImg = document.createElement('img');
  smallImg.src = small;
  smallImg.className = "small";
  document.body.appendChild(smallImg);
}


 function loadbigImag(){
  const bigImg = document.createElement('img');
  bigImg.src = large;
  document.body.appendChild(bigImg);
}





