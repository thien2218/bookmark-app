const features = document.getElementById('features').children;
const slides = document.getElementById('slides');
const arrow = document.querySelectorAll('#arrow');
const QandA = document.querySelectorAll('.q-and-a');

const changeSlide = (index) => {
   for(let i = 0; i < features.length; i++) {
      if(features[i].classList.contains('active')) {
         features[i].classList.remove('active');
      } else if(i === index) {
         features[i].classList.add('active');
      }
   }

   slides.style.transform = `translateX(calc(100% * -1/3 * ${index}))`;
}

const answer = (index) => {
   if(arrow[index].classList.contains('rotate')) {
      arrow[index].children[0].setAttribute('stroke', '#5267DF');
      arrow[index].classList.remove('rotate');
      QandA[index].style.height = '64px';
   } else {
      arrow[index].children[0].setAttribute('stroke', '#FB5859');
      arrow[index].classList.add('rotate');
      QandA[index].style.height = '350px';
   }
}