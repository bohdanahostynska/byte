
 const sliderWrapper =  document.querySelector('#wrapper');
const sliders = document.querySelectorAll('.slider');
console.log(sliders);
 const nextbutton = document.querySelector('#button-right');
 const prevbutton = document.querySelector('#button-left')
 const maxSlides=sliders.length-1;
 let currentSlide =0;

nextbutton.addEventListener('click',()=>{
console.log('click')

if(currentSlide < maxSlides){
  currentSlide+=1;
}else{
  currentSlide=0;
}
  
sliderWrapper.style.left = `-${890*currentSlide}px`;
})

prevbutton.addEventListener('click',()=>{
  console.log('click')
  
  if(currentSlide < 0){
    currentSlide=maxSlides;
  }else{
    currentSlide-=1;
  }
    
  sliderWrapper.style.left = `-${890*currentSlide}px`;
  })






