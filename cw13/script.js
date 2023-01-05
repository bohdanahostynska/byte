const clicksElement = document.getElementById('clicks');

const movesElement = document.getElementById('moves');

clicksElement.addEventListener('click',(event)=>{
    console.log('CLICK');
});

// clicksElement.addEventListener('mouseup',(event)=>{
//     console.log('MOUSEUP');
// });

// clicksElement.addEventListener('mousedown',(event)=>{
//     console.log(event);
//     console.log('MOUSEDOWN');
// });
// movesElement.addEventListener('mouseenter',()=>{
//     console.log('MOUSEENTER');
// });

// movesElement.addEventListener('mouseleave',()=>{
//     console.log('MOUSELEAVE');
// });

// movesElement.addEventListener('mousemove',(evt)=>{
// const x = evt.clientX;
// const y = evt.clientY;

//     console.log('MOUSEMOVE',x, y);
// });

// const  handleClicksCounter = (e) => {
//     const element = e.target;
//     console.log('element', element);

//     const clickCounterElement = element.querySelector('#clicksCounter');
//     const currentClicks = Number(clickCounterElement.innerText);
//     clickCounterElement.innerText = currentClicks +1 ;

// }

// clicksElement.addEventListener('click',handleClicksCounter)

// const createInfoElement = (event) =>{
//     const coords = {
//         x: event.clientX,
//         y: event.clientY,
//     } 

//     const infoElement = document.createElement('p');
//     infoElement.innerText = 'X:${coords.x} Y:${coords.y}';
//     infoElement.id = 'infoElement';

//     return infoElement; 
// };

// const handleAddInfoElement = (event) => {
//     const createdElement = createInfoElement(event);
//     const maybeElement = document.getElementById(createdElement.id);

//     if (maybeElement) {
//       maybeElement.remove();
//     } else {
//       document.body.append(createdElement);
//     }

// }
// clicksElement.addEventListener('click', handleAddInfoElement)

// window.addEventListener("keypress", (event) => {
//   console.log(`keypress`, event);
// });

// window.addEventListener("keyup", (event) => {
//   console.log(`keyup`, event);
// });

// window.addEventListener("keydown", (event) => {
//   console.log(`keydown`, event);
// });


const keysList = [ ...document.querySelectorAll('.keyboard-item')];

const getCurrentPressedKey = (event) => {
  const currentKey = event.key;

  return keysList.find((key) => {
    return key.innerText.toLowerCase() == currentKey.toLowerCase();
  });
};

const handleKeyDown = (event) => {
  const currentKeyElement = getCurrentPressedKey(event)

  if (!currentKeyElement) {
    return;
  }
console.log(currentKeyElement)
  currentKeyElement.classList.add("keyboard-item--pressed");
};

const handleKeyUp = (event) => {
  const currentKeyElement = getCurrentPressedKey(event)
  
  if (!currentKeyElement) {
    return;
  }

  currentKeyElement.classList.remove("keyboard-item--pressed");
};


window.addEventListener("keyup", handleKeyUp);
window.addEventListener("keydown", handleKeyDown);
