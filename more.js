var quotes = [
    'I miss you',
    'You\'re beautiful' ,
    'You\'re handsome', 
    'You\'re funny. I love your jokes',
    'You\'re like a ray of sunshine', 
    'Your smile is so beautiful ',
    ' You make me feel so good',
    'You light up my mood everytime we talk',
    'I\'m glad we met',
    'You\'re special',
    'Thank you for coming into my life',
    'Your voice is my favourite sound',
    'You\'re always on my mind',
    'You stole my heart ',
    'I smile just thinking about you ',
    'One smile can\'t change the world, but yours change mine',
    'Meeting you was one of the best things that happened to me this year',
    'Your energy is so beautiful', 
    'M-am atașat de tine',
    'I can\'t wait to see you again',
    'I\'m lucky I met you',
    'You\'re my favourite notification',
    'I\'m proud of you',
    'Always remember, my heart holds you when my arms cannot.',
    'My heart made its choice, and it chose you',
    'Everything has been better since you',
    'Whenever I talk to you, I\'just happy',
    'Spending time with you is so precious and perfect',
    'You light up my world, my soul, my heart... You\'re my light',
    'You stole my heart, I stole yours... but I know that both of us will keep them safe',
    'Thank you so much for all the moments you\'ve been there for me',
    'I will always be there for you',
    'As soon as I will be able, I will come to visit you',
    'You make my heart so happy',
    
]

function newQuote()
{
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
button.addEventListener("click", () => {
const offset = button.dataset.carouselButton === "next" ? 1 : -1
const slides = button
.closest("[data-carousel]")
.querySelector("[data-slides]")

const activeSlide = slides.querySelector("[data-active]")
let newIndex = [...slides.children].indexOf(activeSlide) + offset
if (newIndex < 0) newIndex = slides.children.length - 1
if (newIndex >= slides.children.length) newIndex = 0

slides.children[newIndex].dataset.active = true
delete activeSlide.dataset.active
})
})


onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };